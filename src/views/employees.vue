<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">員工列表</h2>
    <!-- 新增員工按鈕 -->
    <button class="my-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded" @click="createNewEmployee">
      新增員工
    </button>

    <!-- 顯示載入中的狀態 -->
    <div v-if="loading">載入中...</div>

    <!-- 顯示錯誤信息 -->
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <!-- 顯示員工列表 -->
    <div v-else>
      <ul class="space-y-4">
        <li v-for="employee in employees" :key="employee.id" class="border p-4 rounded-md shadow">
          <h3 class="text-lg font-semibold">{{ employee.username }}</h3>
          <p>職位：{{ employee.role }}</p>
          <p>部門：{{ employee.department.name }}</p>
          <p>電子郵件：{{ employee.email }}</p>
          <p>聯絡電話：{{ employee.phone }}</p>
          <p>狀態：{{ employee.status }}</p>
          <p>商戶名稱：{{ employee.merchant.name }}</p>
          <button
            @click="fetchEmployeeDetail(employee.id)"
            class="mt-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          >
            獲取員工詳情
          </button>

          <!-- 更新員工按鈕 -->
          <button
            @click="updateEmployeeInfo(employee.id)"
            class="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded ml-2"
          >
            更新員工訊息
          </button>

          <!-- 刪除員工按鈕 -->
          <button
            @click="deleteEmployeeById(employee.id)"
            class="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-2"
          >
            刪除員工
          </button>
        </li>
      </ul>
    </div>

    <!-- 分頁控制 -->
    <div class="mt-4 flex justify-between">
      <button
        v-if="page > 1"
        @click="fetchEmployees(page - 1)"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        上一頁
      </button>
      <button
        @click="fetchEmployees(page + 1)"
        :disabled="employees.length < limit"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        下一頁
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getEmployees, getEmployeeDetail, createEmployee, updateEmployee, deleteEmployee } from '@/api/employees';

interface Employee {
  id: number;
  username: string;
  role: string;
  department: {
    name: string;
  };
  email: string;
  phone: string;
  status: string;
  merchant: {
    name: string;
  };
}

const employees = ref<Employee[]>([]);
const loading = ref(true);
const error = ref('');
const page = ref(1);
const limit = ref(10);

// 獲取員工資料的函式
const fetchEmployees = async (pageNumber: number) => {
  loading.value = true;
  error.value = '';
  page.value = pageNumber;

  try {
    const response = await getEmployees(page.value, limit.value, 1, 'active'); // 根據需要修改 merchantId 和 status
    employees.value = response.data.data.employees;
  } catch (err: any) {
    error.value = err.message || '發生錯誤';
  } finally {
    loading.value = false;
  }
};

// 獲取員工詳細資料的函式
const fetchEmployeeDetail = async (employeeId: number) => {
  loading.value = true;
  error.value = '';

  try {
    const response = await getEmployeeDetail(employeeId);
    console.log(response);
    alert(
      `員工詳細資料：\n姓名: ${response.data.data.username}\n電子郵件: ${response.data.data.email}\n電話: ${response.data.data.phone}`
    );
  } catch (err: any) {
    error.value = err.message || '獲取詳細資料失敗';
  } finally {
    loading.value = false;
  }
};

// 建立新員工的函式
const createNewEmployee = async () => {
  try {
    const payload = {
      department_id: 4,
      username: '測試員工04',
      email: 'test04.employee@example.com',
      phone: '0912345678',
      role: 'USER',
      position_id: 5,
    };

    const res = await createEmployee(payload);
    alert('新增成功！');
    console.log('新增回應:', res.data);

    // 新增後自動刷新列表
    fetchEmployees(page.value);
  } catch (error: any) {
    alert('新增失敗：' + (error.response?.data?.message || error.message));
    console.error(error);
  }
};

// 更新員工資料的函式
const updateEmployeeInfo = async (employeeId: number) => {
  try {
    const payload = {
      username: '更新後的姓名',
      email: 'updated.email@example.com',
      phone: '0987654321',
      role: 'USER',
      position_id: 3,
      department_id: 3,
    };

    const res = await updateEmployee(employeeId, payload);
    alert('員工資料已更新');
    console.log('更新成功:', res.data);

    // 更新後重新載入列表
    fetchEmployees(page.value);
  } catch (error: any) {
    alert('更新失敗：' + (error.response?.data?.message || error.message));
    console.error(error);
  }
};

// 刪除員工
const deleteEmployeeById = async (employeeId: number) => {
  if (!confirm('確定要刪除這位員工嗎？')) return;

  try {
    await deleteEmployee(employeeId);
    alert('員工已刪除');
    fetchEmployees(page.value);
  } catch (error: any) {
    alert('刪除失敗：' + (error.response?.data?.message || error.message));
    console.error(error);
  }
};

onMounted(() => {
  fetchEmployees(page.value);
});
</script>
