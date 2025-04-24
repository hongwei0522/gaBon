<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">商戶列表</h2>

    <!-- 🔹 創建商戶 -->
    <button class="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="createMerchant">
      創建商戶
    </button>

    <div v-if="loading">載入中...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul class="space-y-4">
        <li v-for="merchant in merchants" :key="merchant.merchant_id" class="border p-4 rounded-md shadow">
          <h3 class="text-lg font-semibold">{{ merchant.name }}</h3>
          <p>統一編號：{{ merchant.business_id }}</p>
          <p>狀態：{{ merchant.status }}</p>
          <p>聯絡人：{{ merchant.contact_name }}（{{ merchant.contact_email }} / {{ merchant.contact_phone }}）</p>
          <p>地址：{{ merchant.address }}</p>
          <p>
            訂閱期間：{{ merchant.subscription_start_date }} ~
            {{ merchant.subscription_end_date }}
          </p>
          <p>
            管理員：
            <span v-for="admin in merchant.admins" :key="admin.id"> {{ admin.username }}（{{ admin.email }}） </span>
          </p>

          <!-- 🔹 獲取詳情按鈕 -->
          <button
            class="mt-2 mr-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            @click="fetchMerchantDetail(merchant.merchant_id)"
          >
            獲取商戶詳情
          </button>

          <!-- 🔹 更新商戶狀態按鈕 -->
          <button
            class="mt-2 mr-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
            @click="updateMerchantStatusButton(merchant.merchant_id)"
          >
            更新商戶狀態
          </button>
          <select v-model="selectedStatus" class="mt-2 mr-2 mb-2 px-2 py-1 border rounded">
            <option value="active">啟用</option>
            <option value="inactive">停用</option>
            <option value="suspended">暫停</option>
          </select>

          <!-- 🔹 更新商戶資料 -->
          <button
            class="mt-2 mr-2 bg-blue-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            @click="updateMerchantData(merchant.merchant_id)"
          >
            更新商戶資料
          </button>

          <!-- 🔹 新增商戶管理員按鈕 -->
          <!-- <button
            class="mt-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded"
            @click="addMerchantAdmin(merchant)"
          >
            新增商戶管理員
          </button> -->

          <!-- 🔹 刪除商戶管理員按鈕 -->
          <!-- <button
            class="mt-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded"
            @click="deleteMerchantAdminButton(merchant.merchant_id, merchant.merchant_id)"
          >
            刪除
          </button> -->
        </li>
      </ul>

      <!-- 🔽 顯示詳情資料 -->
      <div v-if="selectedMerchant" class="mt-6 border-t pt-4">
        <h3 class="text-lg font-bold mb-2">商戶詳情</h3>
        <div class="space-y-1">
          <p>名稱：{{ selectedMerchant.name }}</p>
          <p>統一編號：{{ selectedMerchant.business_id }}</p>
          <p>狀態：{{ selectedMerchant.status }}</p>
          <p>
            聯絡人：{{ selectedMerchant.contact_name }}（{{ selectedMerchant.contact_email }} /
            {{ selectedMerchant.contact_phone }}）
          </p>
          <p>地址：{{ selectedMerchant.address }}</p>
          <p>訂閱期間：{{ selectedMerchant.subscription_start_date }} ~ {{ selectedMerchant.subscription_end_date }}</p>
        </div>

        <div class="mt-4">
          <h4 class="font-semibold mb-1">管理員</h4>
          <ul class="list-disc list-inside">
            <li v-for="admin in selectedMerchant.admins" :key="admin.id">
              {{ admin.username }}（{{ admin.email }}） - {{ admin.MerchantAdmin.role }}
            </li>
          </ul>
        </div>

        <div class="mt-4">
          <h4 class="font-semibold mb-1">部門列表</h4>
          <ul class="list-disc list-inside">
            <li v-for="dept in selectedMerchant.departments" :key="dept.id">
              {{ dept.name }} - {{ dept.description }}｜主管：{{ dept.manager.username }}（{{ dept.manager.email }}）
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  getMerchants,
  postMerchant,
  getMerchantDetail,
  updateMerchantStatus,
  updateMerchant,
  // postAddMerchantAdmin,
  // deleteMerchantAdmin,
} from '@/api/merchants';

interface MerchantAdmin {
  id: number;
  username: string;
  email: string;
}

interface Merchant {
  merchant_id: number;
  name: string;
  business_id: string;
  status: string;
  subscription_plan_id: number;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  address: string;
  subscription_start_date: string;
  subscription_end_date: string;
  created_at: string;
  updated_at: string;
  settings: Record<string, any>;
  admins: MerchantAdmin[];
}

const merchants = ref<Merchant[]>([]);
const loading = ref(true);
const error = ref('');

// 獲取商戶列表
const fetchMerchants = async () => {
  loading.value = true;
  error.value = '';
  try {
    const res = await getMerchants();
    merchants.value = res.data.data;
  } catch (err: any) {
    error.value = err.message || '發生錯誤';
  } finally {
    loading.value = false;
  }
};

// 創建商戶
const createMerchant = async () => {
  try {
    loading.value = true;
    const payload = {
      // name: '測試用戶',
      // business_id: '12345678',
      // contact_name_1: '測試1',
      // contact_email_1: 'use1@example.com',
      // contact_phone_1: '0912345678',
      // contact_name_2: '測試2',
      // contact_email_2: 'use2@example.com',
      // contact_phone_2: '0812345678',
      // address: '西打藍好內容',
      // settings: {},
      name: '測試用戶2',
      business_id: '22345678',
      contact_name_1: '測試3',
      contact_email_1: 'use3@example.com',
      contact_phone_1: '0712345678',
      contact_name_2: '測試4',
      contact_email_2: 'use4@example.com',
      contact_phone_2: '0612345678',
      address: '西打藍好內容',
      settings: {},
    };
    await postMerchant(payload);
    await fetchMerchants();
    alert('商戶建立成功');
  } catch (err: any) {
    alert('建立失敗：' + (err.message || ''));
  } finally {
    loading.value = false;
  }
};

// 獲取商戶詳情
const selectedMerchant = ref<any | null>(null);

const fetchMerchantDetail = async (id: number) => {
  try {
    const res = await getMerchantDetail(id);
    selectedMerchant.value = res.data.data;
  } catch (err: any) {
    alert('獲取商戶詳情失敗：' + (err.message || ''));
  }
};

// 更新商戶狀態
const selectedStatus = ref<'active' | 'inactive' | 'suspended'>('active'); // 明確指定為這三個狀態之一

const updateMerchantStatusButton = async (id: number) => {
  try {
    loading.value = true;
    await updateMerchantStatus(id, selectedStatus.value); // 這裡是 API 請求來更新商戶狀態
    console.log('商戶狀態已更新');
    await fetchMerchants(); // 重新獲取商戶列表
  } catch (err: any) {
    console.log('更新失敗：' + (err.message || ''));
  } finally {
    loading.value = false;
  }
};

// 更新商戶資料
const updateMerchantData = async (id: number) => {
  try {
    loading.value = true;
    const payload = {
      name: '7-14',
      business_id: '3333333334',
      contact_name: 'peter',
      contact_email: '121@gmail.com',
      contact_phone: '0912345678',
      address: '基隆市 XXXXX',
    };
    await updateMerchant(id, payload); // 假設這是更新商戶資料的 API 請求
    console.log('商戶資料已更新');
    await fetchMerchants(); // 重新獲取商戶列表
  } catch (err: any) {
    console.log('更新失敗：' + (err.message || ''));
  } finally {
    loading.value = false;
  }
};

// // 新增商戶管理員
// const addMerchantAdmin = async (merchant) => {
//   // 總共會有三種角色
//   // SUPER_ADMIN
//   // MERCHANT_ADMIN
//   // USER
//   try {
//     loading.value = true;
//     const adminData = {
//       user_id: merchant.admins[0].user_id,
//       role: 'SUPER_ADMIN',
//     };
//     await postAddMerchantAdmin(merchant.merchant_id, adminData);
//     await fetchMerchants();
//     alert('新增管理員成功');
//   } catch (err: any) {
//     alert('新增失敗：' + (err.message || ''));
//   } finally {
//     loading.value = false;
//   }
// };

// // 刪除商戶管理員
// const deleteMerchantAdminButton = async (merchantId: number, userId: number) => {
//   try {
//     loading.value = true;
//     await deleteMerchantAdmin(merchantId, userId);
//     await fetchMerchants();
//     alert('已刪除管理員');
//   } catch (err: any) {
//     alert('刪除失敗：' + (err.message || ''));
//   } finally {
//     loading.value = false;
//   }
// };

onMounted(async () => {
  fetchMerchants();
});
</script>
