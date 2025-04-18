import http from '@/utils/axios';
const groupPath = '/employees';
// 獲取員工列表資料
export const getEmployees = (page, limit, merchantId, status) => {
    return http.get(`${groupPath}?page=${page}&limit=${limit}&merchant_id=${merchantId}&status=${status}`);
};
// 獲取單個員工詳細資料
export const getEmployeeDetail = (employeeId) => {
    return http.get(`${groupPath}/${employeeId}`);
};
// 建立新員工
export const createEmployee = (payload) => {
    return http.post('/employees', payload);
};
// 更新員工資料
export const updateEmployee = (employeeId, payload) => {
    return http.put(`/employees/${employeeId}`, payload);
};
// 刪除員工
export const deleteEmployee = (employeeId) => {
    return http.delete(`/employees/${employeeId}`);
};
//# sourceMappingURL=employees.js.map