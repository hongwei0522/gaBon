import http from '@/utils/axios';
const groupPath = '/auth';
// 超級管理員帳號登入系統
export const postSuperLogin = (email, password) => {
    return http.post(`${groupPath}/admin/login`, {
        email,
        password,
    }, {
        withCredentials: true,
    });
};
// 登入系統
export const postLogin = (business_id, email, password) => {
    return http.post(`${groupPath}/login`, {
        business_id,
        email,
        password,
    }, {
        withCredentials: true,
    });
};
// 發送OTP
export const postSendOPT = (business_id, email) => {
    return http.post(`${groupPath}/send-otp`, {
        business_id,
        email,
    }, {
        withCredentials: true,
    });
};
// 驗證OTP
export const postLoginOPT = (business_id, email, otp) => {
    return http.post(`${groupPath}/login-with-otp`, {
        business_id,
        email,
        otp,
    }, {
        withCredentials: true,
    });
};
//# sourceMappingURL=login.js.map