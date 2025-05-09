import AppLayout from '@/layout/AppLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import LandingLayout from '@/layout/LandingLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useLoadingStore } from '@/stores/useLoadingStore';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/dashboard.vue'),
      },
    ],
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/merchants',
        name: 'merchants',
        meta: {
          breadcrumb: ['測試用模組', '商戶管理'],
        },
        component: () => import('../views/merchants.vue'),
      },
    ],
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/employees',
        name: 'employees',
        meta: {
          breadcrumb: ['測試用模組', '員工管理'],
        },
        component: () => import('../views/employees.vue'),
      },
    ],
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/upload',
        name: 'upload',
        meta: {
          breadcrumb: ['測試用模組', '檔案上傳'],
        },
        component: () => import('../views/upload.vue'),
      },
    ],
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/positionLevels',
        name: 'positionLevels',
        meta: {
          breadcrumb: ['測試用模組', '職位等級管理'],
        },
        component: () => import('../views/positionLevels.vue'),
      },
    ],
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/tasks',
        name: 'tasks',
        meta: {
          breadcrumb: ['測試用模組', '任務管理'],
        },
        component: () => import('../views/tasks.vue'),
      },
    ],
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/rewards',
        name: 'rewards',
        meta: {
          breadcrumb: ['測試用模組', '獎勵管理'],
        },
        component: () => import('../views/rewards.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

// 登錄檢查
// router.beforeEach((to, from, next) => {
//   const loadingStore = useLoadingStore();
//   loadingStore.start();

//   const token = localStorage.getItem('authToken');

//   if (!token && to.path !== '/login') {
//     next('/login');
//   } else if (token && to.path === '/login') {
//     next('/');
//   } else {
//     next();
//   }
// });

// router.afterEach(() => {
//   const loadingStore = useLoadingStore();
//   loadingStore.stop();
// });

export default router;
