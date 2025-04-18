/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted } from 'vue';
import { getEmployees, getEmployeeDetail, createEmployee, updateEmployee, deleteEmployee } from '@/api/employees';
const employees = ref([]);
const loading = ref(true);
const error = ref('');
const page = ref(1);
const limit = ref(10);
// 獲取員工資料的函式
const fetchEmployees = async (pageNumber) => {
    loading.value = true;
    error.value = '';
    page.value = pageNumber;
    try {
        const response = await getEmployees(page.value, limit.value, 1, 'active'); // 根據需要修改 merchantId 和 status
        employees.value = response.data.data.employees;
    }
    catch (err) {
        error.value = err.message || '發生錯誤';
    }
    finally {
        loading.value = false;
    }
};
// 獲取員工詳細資料的函式
const fetchEmployeeDetail = async (employeeId) => {
    loading.value = true;
    error.value = '';
    try {
        const response = await getEmployeeDetail(employeeId);
        console.log(response);
        alert(`員工詳細資料：\n姓名: ${response.data.data.username}\n電子郵件: ${response.data.data.email}\n電話: ${response.data.data.phone}`);
    }
    catch (err) {
        error.value = err.message || '獲取詳細資料失敗';
    }
    finally {
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
    }
    catch (error) {
        alert('新增失敗：' + (error.response?.data?.message || error.message));
        console.error(error);
    }
};
// 更新員工資料的函式
const updateEmployeeInfo = async (employeeId) => {
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
    }
    catch (error) {
        alert('更新失敗：' + (error.response?.data?.message || error.message));
        console.error(error);
    }
};
// 刪除員工
const deleteEmployeeById = async (employeeId) => {
    if (!confirm('確定要刪除這位員工嗎？'))
        return;
    try {
        await deleteEmployee(employeeId);
        alert('員工已刪除');
        fetchEmployees(page.value);
    }
    catch (error) {
        alert('刪除失敗：' + (error.response?.data?.message || error.message));
        console.error(error);
    }
};
onMounted(() => {
    fetchEmployees(page.value);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "p-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "text-xl font-bold mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.createNewEmployee) },
    ...{ class: "my-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded" },
});
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
}
if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-red-500" },
    });
    (__VLS_ctx.error);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "space-y-4" },
    });
    for (const [employee] of __VLS_getVForSourceType((__VLS_ctx.employees))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: (employee.id),
            ...{ class: "border p-4 rounded-md shadow" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: "text-lg font-semibold" },
        });
        (employee.username);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (employee.role);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (employee.department.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (employee.email);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (employee.phone);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (employee.status);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (employee.merchant.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.fetchEmployeeDetail(employee.id);
                } },
            ...{ class: "mt-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.updateEmployeeInfo(employee.id);
                } },
            ...{ class: "mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded ml-2" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.deleteEmployeeById(employee.id);
                } },
            ...{ class: "mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-2" },
        });
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mt-4 flex justify-between" },
});
if (__VLS_ctx.page > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.page > 1))
                    return;
                __VLS_ctx.fetchEmployees(__VLS_ctx.page - 1);
            } },
        ...{ class: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.fetchEmployees(__VLS_ctx.page + 1);
        } },
    disabled: (__VLS_ctx.employees.length < __VLS_ctx.limit),
    ...{ class: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-purple-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-yellow-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-yellow-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            employees: employees,
            loading: loading,
            error: error,
            page: page,
            limit: limit,
            fetchEmployees: fetchEmployees,
            fetchEmployeeDetail: fetchEmployeeDetail,
            createNewEmployee: createNewEmployee,
            updateEmployeeInfo: updateEmployeeInfo,
            deleteEmployeeById: deleteEmployeeById,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=employees.vue.js.map