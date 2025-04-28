import http from '@/utils/axios';

const groupPath = '/rewards';

// 類型定義
export interface RewardCreateParams {
  name: string;
  description: string;
  cost_type: string;
  cost_amount: number;
  stock: number;
  image_id?: number;
  required_permission_level: number;
  application_restriction: string;
}

export interface RewardUpdateParams {
  name: string;
  description: string;
  image_id?: number | null;
  cost_type: string;
  cost_amount: number;
  stock: number;
  is_active: boolean;
  required_permission_level: number;
}

export interface RewardQueryParams {
  page?: number;
  limit?: number;
  cost_type?: string;
  required_permission_level?: number;
  is_active?: boolean;
  is_awarded?: boolean;
}

// API 方法
export const getRewards = (params?: RewardQueryParams) => {
  return http.get(groupPath, { params });
};

export const createReward = (data: RewardCreateParams) => {
  return http.post(groupPath, data);
};

export const updateReward = (rewardId: number, data: RewardUpdateParams) => {
  return http.put(`${groupPath}/${rewardId}`, data);
};

export const updateRewardStatus = (id: number, status: 'active' | 'inactive') => {
  return http.patch(`${groupPath}/${id}/${status}`);
};

export const redeemReward = (rewardId: number) => {
  return http.post(`${groupPath}/redeem/${rewardId}`);
};
