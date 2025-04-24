import http from '@/utils/axios';

const groupPath = '/merchants';

// 獲取商戶列表
export const getMerchants = () => {
  return http.get(`${groupPath}`);
};

// 創建商戶
export const postMerchant = (data: {
  name: string;
  business_id: string;
  contact_name_1: string;
  contact_email_1: string;
  contact_phone_1: string;
  contact_name_2: string;
  contact_email_2: string;
  contact_phone_2: string;
  address: string;
  settings: {};
}) => {
  return http.post(groupPath, data);
};

// 獲取商戶詳情
export const getMerchantDetail = (id: number) => {
  return http.get(`${groupPath}/${id}`);
};

// 更新商戶
export const updateMerchantStatus = (id: number, status: 'active' | 'inactive' | 'suspended') => {
  return http.patch(`${groupPath}/${id}/${status}`);
};

// 更新商戶資料
export const updateMerchant = (
  id: number,
  data: {
    name?: string;
    business_id?: string;
    contact_name?: string;
    contact_email?: string;
    contact_phone?: string;
    address?: string;
    subscription_start_date?: string;
    subscription_end_date?: string;
  }
) => {
  return http.put(`${groupPath}/${id}`, data);
};

// 新增商戶管理員
export const postAddMerchantAdmin = (
  merchant_id: number,
  data: {
    user_id: number;
    role: string;
  }
) => {
  return http.post(`${groupPath}/${merchant_id}/admins`, data);
};

// 刪除商戶管理員
export const deleteMerchantAdmin = (merchantId: number, userId: number) => {
  return http.delete(`${groupPath}/${merchantId}/admins/${userId}`);
};
