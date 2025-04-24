import http from '@/utils/axios';

const groupPath = '/merchants';

// 獲取特定職位等級的員工列表
export const getPositionLevelEmployees = (merchantId: number) => {
  return http.get(`${groupPath}/${merchantId}/position-levels`);
};

// 創建職位等級
export const createPositionLevel = (
  merchantId: number,
  data: {
    name: string;
    level: string;
    description: string;
    permissions: {
      canManageUsers: boolean;
      canManageTasks: boolean;
      canApproveAll: boolean;
      canManageRewards: boolean;
    };
  }
) => {
  return http.post(`${groupPath}/${merchantId}/position-levels`, data);
};

// 更新職位等級
export const updatePositionLevel = (
  merchantId: number,
  levelId: number,
  data: {
    name?: string;
    level?: number;
    description?: string;
    permissions?: {
      canManageUsers?: boolean;
      canManageTasks?: boolean;
      canApproveAll?: boolean;
      canManageRewards?: boolean;
      canManageDepartments?: boolean;
    };
  }
) => {
  return http.put(`${groupPath}/${merchantId}/position-levels/${levelId}`, data);
};

// 刪除職位等級
export const deletePositionLevel = (merchantId: number, levelId: number) => {
  return http.delete(`${groupPath}/${merchantId}/position-levels/${levelId}`);
};
