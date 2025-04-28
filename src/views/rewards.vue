<template>
  <div>
    <h1>獎勵列表</h1>
    <button class="mt-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" @click="createNewReward">
      創建新獎勵
    </button>
    <ul>
      <li v-for="reward in rewards" :key="reward.id">
        <h2>{{ reward.name }}</h2>
        <p>{{ reward.description }}</p>
        <p>消耗類型: {{ reward.cost_type }}</p>
        <p>消耗數量: {{ reward.cost_amount }}</p>
        <p>庫存: {{ reward.stock }}</p>
        <p>所需權限等級: {{ reward.required_permission_level }}</p>
        <p>狀態: {{ reward.is_active ? '啟用' : '停用' }}</p>
        <button
          class="mt-2 mr-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
          @click="handleUpdateReward(reward.id)"
        >
          更新獎勵
        </button>
        <button
          class="mt-2 mr-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          @click="handleToggleStatus(reward.id)"
        >
          切換狀態
        </button>
        <select v-model="selectedStatus" class="mt-2 mr-2 mb-2 px-2 py-1 border rounded">
          <option value="active">啟用</option>
          <option value="inactive">停用</option>
        </select>
        <button
          class="mt-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded"
          @click="handleRedeem(reward.id)"
        >
          兌換獎勵
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getRewards, createReward, updateReward, updateRewardStatus, redeemReward } from '@/api/rewards';

const rewards = ref<any[]>([]);
const loading = ref(false);
const selectedStatus = ref<'active' | 'inactive'>('active');
const newRewardIds = ref<number[]>([]);

// 獲取獎勵列表
const fetchRewards = async () => {
  try {
    const response = await getRewards({
      page: 1,
      limit: 10,
      cost_type: 'moon_coin',
      required_permission_level: 100,
      // is_active: true,
    });
    rewards.value = response.data.data.data;
  } catch (error) {
    console.error('獲取獎勵列表失敗:', error);
  }
};

// 創建新獎勵
const createNewReward = async () => {
  const newReward = {
    name: '新獎勵',
    description: '這是一個測試獎勵',
    cost_type: 'moon_coin',
    cost_amount: 100,
    stock: 10,
    required_permission_level: 1,
    application_restriction: 'unlimited',
  };

  try {
    const response = await createReward(newReward);
    if (response.data && response.data.id) {
      newRewardIds.value.push(response.data.id);
      // 5秒後移除新獎勵標記
      setTimeout(() => {
        newRewardIds.value = newRewardIds.value.filter((id) => id !== response.data.id);
      }, 5000);
    }
    await fetchRewards();
  } catch (error) {
    console.error('創建獎勵失敗:', error);
  }
};

// 更新獎勵
const handleUpdateReward = async (rewardId: number) => {
  const updatedReward = {
    ...rewards.value.find((reward) => reward.id === rewardId),
    name: '更新後的獎勵名稱',
    description: '更新後的獎勵描述',
    cost_amount: 200,
    stock: 20,
  };

  try {
    await updateReward(rewardId, updatedReward);
    await fetchRewards();
  } catch (error) {
    console.error('更新獎勵失敗:', error);
  }
};

// 切換狀態
const handleToggleStatus = async (rewardId: number) => {
  try {
    loading.value = true;
    await updateRewardStatus(rewardId, selectedStatus.value);
    await fetchRewards();
  } catch (error) {
    console.error('切換狀態失敗:', error);
  } finally {
    loading.value = false;
  }
};

// 兌換獎勵
const handleRedeem = async (rewardId: number) => {
  try {
    await redeemReward(rewardId);
    alert('兌換成功！');
    await fetchRewards();
  } catch (error) {
    console.error('兌換獎勵失敗:', error);
  }
};

onMounted(() => {
  fetchRewards();
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
button {
  margin: 0.5rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
.bg-green-50 {
  animation: highlight 5s ease-out;
}

@keyframes highlight {
  0% {
    background-color: #f0fff4;
  }
  100% {
    background-color: transparent;
  }
}
</style>
