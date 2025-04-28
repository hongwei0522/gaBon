<template>
  <div>
    <h1>任務列表</h1>
    <button class="mt-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" @click="createNewTask">
      創建新任務
    </button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <h2>{{ task.name }}</h2>
        <p>{{ task.description }}</p>
        <p>獎勵類型: {{ task.reward_type }}</p>
        <p>開始日期: {{ task.start_date }}</p>
        <p>結束日期: {{ task.end_date }}</p>
        <p>狀態: {{ task.status }}</p>
        <button
          class="mt-2 mr-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
          @click="handleUpdateTask(task.id)"
        >
          更新任務
        </button>
        <button
          class="mt-2 mr-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          @click="handleDeleteTask(task.id)"
        >
          刪除任務
        </button>
        <button
          class="mt-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded"
          @click="applyForTask(task.id)"
        >
          申請任務
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getTasks, createTask, updateTask, deleteTask, applyTask } from '@/api/tasks'; // 根據您的實際路徑調整

const tasks = ref<any[]>([]); // 使用 any[] 以便後續可進行類型定義

// 獲取任務列表
const fetchTasks = async (page = 1, limit = 10, status = 'draft') => {
  try {
    const params = {
      page,
      limit,
      status,
    };
    const response = await getTasks(params);
    if (response) {
      tasks.value = response.data.data.tasks; // 根據新的數據結構提取任務
    } else {
      console.error('獲取任務失敗:', response);
    }
  } catch (error) {
    console.error('獲取任務失敗:', error);
  }
};

// 創建新任務
const createNewTask = async () => {
  const newTask = {
    id: 0,
    name: '新任務',
    description: '這是一個測試任務',
    reward_type: 'moon_coin',
    reward_amount: 100,
    start_date: new Date().toISOString(),
    end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 一週後
    max_participants: 10,
    status: 'draft',
    required_permission_level: 0,
    application_restriction: 'custom',
    application_config: {
      limit_count: 1,
      period_type: 'quarter',
      target_type: 'person',
    },
  };

  try {
    await createTask(newTask);
    await fetchTasks(); // 重新獲取任務列表
  } catch (error) {
    console.error('創建任務失敗:', error);
  }
};

// 更新任務
const handleUpdateTask = async (taskId: number) => {
  const updatedTask = {
    ...tasks.value.find((task) => task.id === taskId),
    description: '更新的任務描述', // 示例更新
  };

  try {
    await updateTask(taskId, updatedTask);
    await fetchTasks(); // 重新獲取任務列表
  } catch (error) {
    console.error('更新任務失敗:', error);
  }
};

// 刪除任務
const handleDeleteTask = async (taskId: number) => {
  if (confirm('您確定要刪除這個任務嗎？')) {
    try {
      await deleteTask(taskId);
      await fetchTasks(); // 重新獲取任務列表
    } catch (error) {
      console.error('刪除任務失敗:', error);
    }
  }
};

// 申請任務
const applyForTask = async (taskId: number) => {
  const comment = prompt('請輸入申請理由：'); // 提示用戶輸入申請理由
  if (comment) {
    try {
      await applyTask(taskId, comment);
      alert('申請成功！'); // 提示用戶申請成功
      await fetchTasks(); // 重新獲取任務列表以更新狀態
    } catch (error) {
      console.error('申請任務失敗:', error);
    }
  }
};

// 當組件掛載時獲取任務列表
onMounted(fetchTasks);
</script>

<style scoped>
/* 添加一些樣式 */
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
</style>
