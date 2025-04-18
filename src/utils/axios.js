import axios from 'axios';
// 預設防抖時間
const DEFAULT_DEBOUNCE_WAIT = 300;
// 創建防抖請求映射
const debouncedRequests = new Map();
const createDebouncedRequest = (method, url) => {
    const key = `${method}:${url}`;
    if (!debouncedRequests.has(key)) {
        let timeoutId; // 修正為 `number`
        debouncedRequests.set(key, (config) => {
            return new Promise((resolve, reject) => {
                if (timeoutId)
                    clearTimeout(timeoutId);
                timeoutId = window.setTimeout(() => {
                    // 使用 `window.setTimeout`
                    axios(config).then(resolve).catch(reject);
                }, DEFAULT_DEBOUNCE_WAIT);
            });
        });
    }
    const debouncedFunc = debouncedRequests.get(key);
    return (config) => debouncedFunc(config);
};
const baseURL = import.meta.env.VITE_API_BASE_URL;
const http = {
    get(url, config = {}) {
        const headers = {
            'Content-Type': 'application/json',
            ...config.headers,
        };
        return axios({
            method: 'GET',
            url,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            ...config,
            headers,
        });
    },
    getDebouncedRequest: async (url, config = {}) => {
        const debouncedRequest = createDebouncedRequest('GET', url);
        return await debouncedRequest({
            ...config,
            method: 'GET',
            url,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    post(url, data = {}, config = {}) {
        const headers = {};
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        return axios({
            ...config,
            method: 'POST',
            url,
            data,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers,
        });
    },
    delete(url, config = {}) {
        return axios({
            ...config,
            method: 'DELETE',
            url,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    postDebouncedRequest: async (url, data = {}, config = {}) => {
        const headers = {};
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        const debouncedRequest = createDebouncedRequest('POST', url);
        return await debouncedRequest({
            ...config,
            method: 'POST',
            url,
            data,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers,
        });
    },
    put(url, data = {}, config = {}) {
        const headers = {};
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        return axios({
            ...config,
            method: 'PUT',
            url,
            data,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers,
        });
    },
    putDebouncedRequest: async (url, data = {}, config = {}) => {
        const headers = {};
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        const debouncedRequest = createDebouncedRequest('PUT', url);
        return await debouncedRequest({
            ...config,
            method: 'PUT',
            url,
            data,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers,
        });
    },
    patch(url, data = {}, config = {}) {
        const headers = {};
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        return axios({
            ...config,
            method: 'PATCH',
            url,
            data,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers,
        });
    },
    patchDebouncedRequest: async (url, data = {}, config = {}) => {
        const headers = {};
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        const debouncedRequest = createDebouncedRequest('PATCH', url);
        return await debouncedRequest({
            ...config,
            method: 'PATCH',
            url,
            data,
            baseURL,
            timeout: 5000,
            withCredentials: true,
            headers,
        });
    },
};
// 請求攔截器
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('authorization');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// 響應攔截器
// axios.interceptors.response.use(
//   (response) => {
//     if (response.config.responseType === 'arraybuffer') {
//       return response;
//     }
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 403) {
//       console.log('登入憑證已過期，請重新登入。');
//       if (window.location.pathname.startsWith('/admin')) {
//         window.location.href = '/admin/login';
//       } else {
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );
export default http;
//# sourceMappingURL=axios.js.map