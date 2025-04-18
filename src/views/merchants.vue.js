/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted } from 'vue';
import { getMerchants, postMerchant, getMerchantDetail, updateMerchantStatus, updateMerchant, postAddMerchantAdmin, deleteMerchantAdmin, } from '@/api/merchants';
const merchants = ref([]);
const loading = ref(true);
const error = ref('');
// 獲取商戶列表
const fetchMerchants = async () => {
    loading.value = true;
    error.value = '';
    try {
        const res = await getMerchants();
        merchants.value = res.data.data;
    }
    catch (err) {
        error.value = err.message || '發生錯誤';
    }
    finally {
        loading.value = false;
    }
};
// 創建商戶
const createMerchant = async () => {
    try {
        loading.value = true;
        const payload = {
            name: '西打藍好內容2',
            business_id: '93662834',
            contact_name: 'frank2',
            contact_email: 'sida.test03@gmail.com',
            contact_phone: '0912345678',
            address: '基隆市 XXXXX',
        };
        await postMerchant(payload);
        await fetchMerchants();
        alert('商戶建立成功');
    }
    catch (err) {
        alert('建立失敗：' + (err.message || ''));
    }
    finally {
        loading.value = false;
    }
};
// 獲取商戶詳情
const selectedMerchant = ref(null);
const fetchMerchantDetail = async (id) => {
    try {
        const res = await getMerchantDetail(id);
        selectedMerchant.value = res.data.data;
    }
    catch (err) {
        alert('獲取商戶詳情失敗：' + (err.message || ''));
    }
};
// 更新商戶狀態
const selectedStatus = ref('active'); // 明確指定為這三個狀態之一
const updateMerchantStatusButton = async (id) => {
    try {
        loading.value = true;
        await updateMerchantStatus(id, selectedStatus.value); // 這裡是 API 請求來更新商戶狀態
        console.log('商戶狀態已更新');
        await fetchMerchants(); // 重新獲取商戶列表
    }
    catch (err) {
        console.log('更新失敗：' + (err.message || ''));
    }
    finally {
        loading.value = false;
    }
};
// 更新商戶資料
const updateMerchantData = async (id) => {
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
    }
    catch (err) {
        console.log('更新失敗：' + (err.message || ''));
    }
    finally {
        loading.value = false;
    }
};
// 新增商戶管理員
const addMerchantAdmin = async (merchantId) => {
    try {
        loading.value = true;
        await postAddMerchantAdmin(merchantId);
        await fetchMerchants();
        alert('新增管理員成功');
    }
    catch (err) {
        alert('新增失敗：' + (err.message || ''));
    }
    finally {
        loading.value = false;
    }
};
// 刪除商戶管理員
const deleteMerchantAdminButton = async (merchantId, userId) => {
    try {
        loading.value = true;
        await deleteMerchantAdmin(merchantId, userId);
        await fetchMerchants();
        alert('已刪除管理員');
    }
    catch (err) {
        alert('刪除失敗：' + (err.message || ''));
    }
    finally {
        loading.value = false;
    }
};
onMounted(async () => {
    fetchMerchants();
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
    ...{ onClick: (__VLS_ctx.createMerchant) },
    ...{ class: "mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" },
});
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.error);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "space-y-4" },
    });
    for (const [merchant] of __VLS_getVForSourceType((__VLS_ctx.merchants))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: (merchant.id),
            ...{ class: "border p-4 rounded-md shadow" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: "text-lg font-semibold" },
        });
        (merchant.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (merchant.business_id);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (merchant.status);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (merchant.contact_name);
        (merchant.contact_email);
        (merchant.contact_phone);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (merchant.address);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (merchant.subscription_start_date);
        (merchant.subscription_end_date);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        for (const [admin] of __VLS_getVForSourceType((merchant.admins))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                key: (admin.id),
            });
            (admin.username);
            (admin.email);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.fetchMerchantDetail(merchant.id);
                } },
            ...{ class: "mt-2 mr-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.updateMerchantStatusButton(merchant.id);
                } },
            ...{ class: "mt-2 mr-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
            value: (__VLS_ctx.selectedStatus),
            ...{ class: "mt-2 mr-2 mb-2 px-2 py-1 border rounded" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            value: "active",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            value: "inactive",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            value: "suspended",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.updateMerchantData(merchant.id);
                } },
            ...{ class: "mt-2 mr-2 bg-blue-500 hover:bg-green-600 text-white px-3 py-1 rounded" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.addMerchantAdmin(merchant.id);
                } },
            ...{ class: "mt-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    if (!!(__VLS_ctx.error))
                        return;
                    __VLS_ctx.deleteMerchantAdminButton(merchant.id, merchant.id);
                } },
            ...{ class: "mt-2 mr-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded" },
        });
    }
    if (__VLS_ctx.selectedMerchant) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "mt-6 border-t pt-4" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: "text-lg font-bold mb-2" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "space-y-1" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedMerchant.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedMerchant.business_id);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedMerchant.status);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedMerchant.contact_name);
        (__VLS_ctx.selectedMerchant.contact_email);
        (__VLS_ctx.selectedMerchant.contact_phone);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedMerchant.address);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedMerchant.subscription_start_date);
        (__VLS_ctx.selectedMerchant.subscription_end_date);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "mt-4" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
            ...{ class: "font-semibold mb-1" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: "list-disc list-inside" },
        });
        for (const [admin] of __VLS_getVForSourceType((__VLS_ctx.selectedMerchant.admins))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: (admin.id),
            });
            (admin.username);
            (admin.email);
            (admin.MerchantAdmin.role);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "mt-4" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
            ...{ class: "font-semibold mb-1" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: "list-disc list-inside" },
        });
        for (const [dept] of __VLS_getVForSourceType((__VLS_ctx.selectedMerchant.departments))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: (dept.id),
            });
            (dept.name);
            (dept.description);
            (dept.manager.username);
            (dept.manager.email);
        }
    }
}
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-yellow-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-yellow-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-purple-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-purple-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['list-disc']} */ ;
/** @type {__VLS_StyleScopedClasses['list-inside']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['list-disc']} */ ;
/** @type {__VLS_StyleScopedClasses['list-inside']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            merchants: merchants,
            loading: loading,
            error: error,
            createMerchant: createMerchant,
            selectedMerchant: selectedMerchant,
            fetchMerchantDetail: fetchMerchantDetail,
            selectedStatus: selectedStatus,
            updateMerchantStatusButton: updateMerchantStatusButton,
            updateMerchantData: updateMerchantData,
            addMerchantAdmin: addMerchantAdmin,
            deleteMerchantAdminButton: deleteMerchantAdminButton,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=merchants.vue.js.map