import http from '@/utils/axios';

const basePath = '/tasks';

// 類型定義
// 任務介面
export interface TaskCreateParams {
  id: number; // 任務ID
  name: string; // 任務名稱
  description: string; // 任務描述
  reward_type: string; // 獎勵類型，如 "moon_coin"
  reward_amount: number; // 獎勵金額
  start_date: string; // 開始日期，格式：2025-04-24T07:21:18.628Z
  end_date: string; // 結束日期，格式：2025-04-24T07:21:18.628Z
  max_participants: number; // 最大參與人數
  status: string; // 任務狀態，如 "draft"
  required_permission_level: number; // 所需權限等級
  application_restriction: string; // 申請限制類型
  application_config: {
    limit_count: number; // 限制數量
    period_type: string; // 期間類型
    target_type: string; // 目標類型
  };
}

// 修改後的更新任務介面，與提供的JSON結構一致
export interface TaskUpdateParams {
  id: number; // 任務ID
  name: string; // 任務名稱
  description: string; // 任務描述
  reward_type: string; // 獎勵類型，如 "moon_coin"
  reward_amount: number; // 獎勵金額
  start_date: string; // 開始日期
  end_date: string; // 結束日期
  max_participants: number; // 最大參與人數
  status: string; // 任務狀態，如 "draft"
  required_permission_level: number; // 所需權限等級
  application_restriction: string; // 申請限制類型
  application_config: {
    limit_count: number; // 限制數量
    period_type: string; // 期間類型
    target_type: string; // 目標類型
  };
}

export interface TaskQueryParams {
  page?: number; // 頁碼
  limit?: number; // 每頁數量
  status?: string; // 狀態過濾
  sort_by?: string; // 排序欄位
  sort_order?: 'asc' | 'desc'; // 排序方向
}

// API 方法
/**
 * 獲取任務列表，支援可選過濾條件
 */
export const getTasks = (params?: TaskQueryParams) => {
  return http.get(basePath, { params });
};

/**
 * 通過ID獲取任務詳情
 */
export const getTaskDetail = (taskId: number) => {
  return http.get(`${basePath}/${taskId}`);
};

/**
 * 創建新任務
 */
export const createTask = (data: TaskCreateParams) => {
  return http.post(basePath, data);
};

/**
 * 更新現有任務
 */
export const updateTask = (taskId: number, data: TaskUpdateParams) => {
  return http.put(`${basePath}/${taskId}`, data);
};

/**
 * 通過ID刪除任務
 */
export const deleteTask = (taskId: number) => {
  return http.delete(`${basePath}/${taskId}`);
};

/**
 * 申請任務
 */
export const applyTask = (taskId: number, comment: string) => {
  return http.post(`${basePath}/apply/${taskId}`, { comment });
};
