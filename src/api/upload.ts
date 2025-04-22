import http from '@/utils/axios';

const groupPath = '/upload/file';

// 上傳檔案
export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return http.post(groupPath, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 取得檔案資訊
export const getFileById = (id: string) => {
  return http.get(`${groupPath}/${id}`);
};

// 刪除檔案
export const deleteFileById = (id: string) => {
  return http.delete(`/upload/file/${id}`);
};
