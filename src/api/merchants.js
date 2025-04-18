import http from '@/utils/axios';
const groupPath = '/merchants';
// 獲取商戶列表
export const getMerchants = () => {
    return http.get(`${groupPath}`);
};
// 創建商戶
export const postMerchant = (data) => {
    return http.post(groupPath, data);
};
// 獲取商戶詳情
export const getMerchantDetail = (id) => {
    return http.get(`${groupPath}/${id}`);
};
// 更新商戶
export const updateMerchantStatus = (id, status) => {
    return http.patch(`${groupPath}/${id}/${status}`);
};
// 更新商戶資料
export const updateMerchant = (id, data) => {
    return http.put(`${groupPath}/${id}`, data);
};
// 新增商戶管理員
export const postAddMerchantAdmin = (merchant_id) => {
    return http.post(`${groupPath}/${merchant_id}/admins`, {
        merchant_id,
    });
};
// 刪除商戶管理員
export const deleteMerchantAdmin = (merchantId, userId) => {
    return http.delete(`${groupPath}/${merchantId}/admins/${userId}`);
};
//# sourceMappingURL=merchants.js.map