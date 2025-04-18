import http from '@/utils/axios';

const groupPath = '/employees';

// 獲取員工列表資料
export const getEmployees = (page: number, limit: number, merchantId: number, status: string) => {
  return http.get(`${groupPath}?page=${page}&limit=${limit}&merchant_id=${merchantId}&status=${status}`);
};

// 獲取單個員工詳細資料
export const getEmployeeDetail = (employeeId: number) => {
  return http.get(`${groupPath}/${employeeId}`);
};

// 建立新員工
export const createEmployee = (payload: {
  department_id: number;
  username: string;
  email: string;
  phone: string;
  role: string;
  position_id: number;
}) => {
  return http.post('/employees', payload);
};

// 更新員工資料
export const updateEmployee = (
  employeeId: number,
  payload: {
    username: string;
    email: string;
    phone: string;
    role: string;
    position_id: number;
    department_id: number;
  }
) => {
  return http.put(`/employees/${employeeId}`, payload);
};

// 刪除員工
export const deleteEmployee = (employeeId: number) => {
  return http.delete(`/employees/${employeeId}`);
};
