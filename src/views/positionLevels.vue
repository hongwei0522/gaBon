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

        <!-- 職位等級管理區塊 -->
        <div class="mt-6 border-t pt-4">
          <h4 class="text-lg font-semibold mb-2">職位等級管理</h4>

          <!-- 創建職位等級按鈕 -->
          <button
            class="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            @click="showCreateModal = true"
          >
            創建職位等級
          </button>

          <!-- 職位等級列表 -->
          <div v-if="loadingPositionLevels">載入職位等級中...</div>
          <div v-else-if="positionLevelsError">{{ positionLevelsError }}</div>
          <div v-else>
            <table class="min-w-full bg-white border">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b text-left">名稱</th>
                  <th class="py-2 px-4 border-b text-left">等級</th>
                  <th class="py-2 px-4 border-b text-left">描述</th>
                  <th class="py-2 px-4 border-b text-left">權限</th>
                  <th class="py-2 px-4 border-b text-left">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="level in positionLevels" :key="level.id" class="border-b hover:bg-gray-50">
                  <td class="py-2 px-4">{{ level.name }}</td>
                  <td class="py-2 px-4">{{ level.level }}</td>
                  <td class="py-2 px-4">{{ level.description }}</td>
                  <td class="py-2 px-4">
                    <ul class="list-disc list-inside">
                      <template v-for="(value, key) in level.permissions" :key="key">
                        <li v-if="value === true">
                          {{ formatPermissionName(key) }}
                        </li>
                      </template>
                    </ul>
                  </td>
                  <td class="py-2 px-4">
                    <button
                      class="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      @click="openUpdateModal(level)"
                    >
                      更新
                    </button>
                    <button
                      class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      @click="confirmDelete(level.id)"
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 創建職位等級彈窗 -->
  <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-1/2 max-w-md">
      <h3 class="text-lg font-bold mb-4">創建職位等級</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">名稱</label>
          <input v-model="newLevel.name" type="text" class="mt-1 block w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">等級</label>
          <input v-model="newLevel.level" type="text" class="mt-1 block w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">描述</label>
          <textarea v-model="newLevel.description" class="mt-1 block w-full border rounded-md p-2"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">權限</label>
          <div class="mt-1 space-y-2">
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="newLevel.permissions.canManageUsers"
                id="create-manage-users"
                class="mr-2"
              />
              <label for="create-manage-users">管理用戶</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="newLevel.permissions.canManageTasks"
                id="create-manage-tasks"
                class="mr-2"
              />
              <label for="create-manage-tasks">管理任務</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="newLevel.permissions.canApproveAll"
                id="create-approve-all"
                class="mr-2"
              />
              <label for="create-approve-all">審批所有內容</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="newLevel.permissions.canManageRewards"
                id="create-manage-rewards"
                class="mr-2"
              />
              <label for="create-manage-rewards">管理獎勵</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-end space-x-2">
        <button class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" @click="showCreateModal = false">取消</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" @click="handleCreateLevel">
          確認創建
        </button>
      </div>
    </div>
  </div>

  <!-- 更新職位等級彈窗 -->
  <div v-if="showUpdateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-1/2 max-w-md">
      <h3 class="text-lg font-bold mb-4">更新職位等級</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">名稱</label>
          <input v-model="editingLevel.name" type="text" class="mt-1 block w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">等級</label>
          <input v-model="editingLevel.level" type="number" class="mt-1 block w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">描述</label>
          <textarea v-model="editingLevel.description" class="mt-1 block w-full border rounded-md p-2"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">權限</label>
          <div class="mt-1 space-y-2">
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="editingLevel.permissions.canManageUsers"
                id="edit-manage-users"
                class="mr-2"
              />
              <label for="edit-manage-users">管理用戶</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="editingLevel.permissions.canManageTasks"
                id="edit-manage-tasks"
                class="mr-2"
              />
              <label for="edit-manage-tasks">管理任務</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="editingLevel.permissions.canApproveAll"
                id="edit-approve-all"
                class="mr-2"
              />
              <label for="edit-approve-all">審批所有內容</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="editingLevel.permissions.canManageRewards"
                id="edit-manage-rewards"
                class="mr-2"
              />
              <label for="edit-manage-rewards">管理獎勵</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="editingLevel.permissions.canManageDepartments"
                id="edit-manage-departments"
                class="mr-2"
              />
              <label for="edit-manage-departments">管理部門</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-end space-x-2">
        <button class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" @click="showUpdateModal = false">取消</button>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded" @click="handleUpdateLevel">
          確認更新
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getMerchants, postMerchant, getMerchantDetail } from '@/api/merchants';
import {
  getPositionLevelEmployees,
  createPositionLevel,
  updatePositionLevel,
  deletePositionLevel,
} from '@/api/positionLevels';

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

interface PositionLevel {
  id: number;
  name: string;
  level: string | number;
  description: string;
  permissions: {
    canManageUsers: boolean;
    canManageTasks: boolean;
    canApproveAll: boolean;
    canManageRewards: boolean;
    canManageDepartments?: boolean;
  };
}

const merchants = ref<Merchant[]>([]);
const loading = ref(true);
const error = ref('');

// 職位等級相關狀態
const positionLevels = ref<PositionLevel[]>([]);
const loadingPositionLevels = ref(false);
const positionLevelsError = ref('');
const showCreateModal = ref(false);
const showUpdateModal = ref(false);
const editingLevelId = ref<number | null>(null);

const newLevel = ref({
  name: '',
  level: 'A',
  description: '',
  permissions: {
    canManageUsers: false,
    canManageTasks: false,
    canApproveAll: false,
    canManageRewards: false,
  },
});

const editingLevel = ref({
  name: '',
  level: 0,
  description: '',
  permissions: {
    canManageUsers: false,
    canManageTasks: false,
    canApproveAll: false,
    canManageRewards: false,
    canManageDepartments: false,
  },
});

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
      name: '測試用戶',
      business_id: '12345678',
      contact_name_1: '測試1',
      contact_email_1: 'use1@example.com',
      contact_phone_1: '0912345678',
      contact_name_2: '測試2',
      contact_email_2: 'use2@example.com',
      contact_phone_2: '0812345678',
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

    // 獲取職位等級列表
    await fetchPositionLevels(id);
  } catch (err: any) {
    alert('獲取商戶詳情失敗：' + (err.message || ''));
  }
};

// 獲取職位等級列表
const fetchPositionLevels = async (merchantId: number) => {
  loadingPositionLevels.value = true;
  positionLevelsError.value = '';
  try {
    const res = await getPositionLevelEmployees(merchantId);
    positionLevels.value = res.data.data || [];
  } catch (err: any) {
    positionLevelsError.value = err.message || '獲取職位等級失敗';
  } finally {
    loadingPositionLevels.value = false;
  }
};

// 創建職位等級
const handleCreateLevel = async () => {
  if (!selectedMerchant.value) return;

  try {
    await createPositionLevel(selectedMerchant.value.merchant_id, {
      name: newLevel.value.name,
      level: newLevel.value.level,
      description: newLevel.value.description,
      permissions: newLevel.value.permissions,
    });

    // 重新獲取職位等級列表
    await fetchPositionLevels(selectedMerchant.value.merchant_id);

    // 關閉彈窗並重置表單
    showCreateModal.value = false;
    newLevel.value = {
      name: '',
      level: 'A',
      description: '',
      permissions: {
        canManageUsers: false,
        canManageTasks: false,
        canApproveAll: false,
        canManageRewards: false,
      },
    };

    alert('職位等級創建成功');
  } catch (err: any) {
    alert('創建職位等級失敗：' + (err.message || ''));
  }
};

// 打開更新彈窗
const openUpdateModal = (level: PositionLevel) => {
  editingLevelId.value = level.id;
  editingLevel.value = {
    name: level.name,
    level: typeof level.level === 'string' ? parseInt(level.level) || 0 : level.level,
    description: level.description,
    permissions: {
      canManageUsers: level.permissions.canManageUsers || false,
      canManageTasks: level.permissions.canManageTasks || false,
      canApproveAll: level.permissions.canApproveAll || false,
      canManageRewards: level.permissions.canManageRewards || false,
      canManageDepartments: level.permissions.canManageDepartments || false,
    },
  };
  showUpdateModal.value = true;
};

// 更新職位等級
const handleUpdateLevel = async () => {
  if (!selectedMerchant.value || editingLevelId.value === null) return;

  try {
    await updatePositionLevel(selectedMerchant.value.merchant_id, editingLevelId.value, editingLevel.value);

    // 重新獲取職位等級列表
    await fetchPositionLevels(selectedMerchant.value.merchant_id);

    // 關閉彈窗
    showUpdateModal.value = false;
    editingLevelId.value = null;

    alert('職位等級更新成功');
  } catch (err: any) {
    alert('更新職位等級失敗：' + (err.message || ''));
  }
};

// 刪除職位等級
const confirmDelete = async (levelId: number) => {
  if (!selectedMerchant.value) return;

  if (confirm('確定要刪除此職位等級嗎？此操作無法撤銷。')) {
    try {
      await deletePositionLevel(selectedMerchant.value.merchant_id, levelId);

      // 重新獲取職位等級列表
      await fetchPositionLevels(selectedMerchant.value.merchant_id);

      alert('職位等級刪除成功');
    } catch (err: any) {
      alert('刪除職位等級失敗：' + (err.message || ''));
    }
  }
};

// 格式化權限名稱
const formatPermissionName = (key: string) => {
  const permissionMap: Record<string, string> = {
    canManageUsers: '管理用戶',
    canManageTasks: '管理任務',
    canApproveAll: '審批所有內容',
    canManageRewards: '管理獎勵',
    canManageDepartments: '管理部門',
  };

  return permissionMap[key] || key;
};

onMounted(async () => {
  fetchMerchants();
});
</script>
