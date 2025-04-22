<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">檔案上傳</h2>

    <!-- 🔹 檔案選擇 -->
    <input type="file" @change="onFileChange" class="mb-4" />

    <!-- 🔹 上傳 -->
    <button
      class="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      @click="handleUpload"
      :disabled="!file"
    >
      上傳
    </button>

    <!-- 🔹 檔案操作 -->
    <div class="mt-6 space-y-4">
      <!-- 取得檔案 -->
      <div>
        <input v-model="fileId" type="text" placeholder="輸入檔案 ID" class="border px-2 py-1 mr-2 rounded" />
        <button class="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded" @click="fetchFile">
          取得檔案資訊
        </button>
      </div>

      <!-- 刪除檔案 -->
      <div>
        <input v-model="fileId" type="text" placeholder="輸入檔案 ID" class="border px-2 py-1 mr-2 rounded" />
        <button class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded" @click="deleteFile">刪除檔案</button>
      </div>
    </div>

    <!-- 🔹 顯示結果 -->
    <div v-if="fileInfo" class="mt-6 p-4 bg-green-100 rounded text-sm text-green-900">
      <p><strong>原始檔名：</strong>{{ fileInfo.original_name }}</p>
      <p><strong>MIME 類型：</strong>{{ fileInfo.mime_type }}</p>
      <p><strong>檔案大小：</strong>{{ (fileInfo.file_size / 1024).toFixed(2) }} KB</p>
      <p><strong>建立時間：</strong>{{ fileInfo.created_at }}</p>
      <p>
        <strong>預覽連結：</strong>
        <a :href="fileInfo.url" target="_blank" class="text-blue-600 underline">點我查看</a>
      </p>

      <div class="mt-4" v-if="fileInfo.mime_type.startsWith('image')">
        <img :src="fileInfo.url" alt="上傳圖片" class="max-w-xs rounded border border-gray-300 shadow" />
      </div>
    </div>

    <!-- 🔹 錯誤訊息 -->
    <div v-if="error" class="mt-4 p-4 bg-red-100 rounded">
      <p class="text-sm text-red-800">❌ 錯誤：{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { uploadFile, getFileById, deleteFileById } from '@/api/upload';

const file = ref<File | null>(null);
const fileInfo = ref<any>(null);
const error = ref<string | null>(null);
const fileId = ref<string>('');

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  file.value = target.files?.[0] || null;
};

const handleUpload = async () => {
  if (!file.value) return;

  try {
    const res = await uploadFile(file.value);
    fileInfo.value = res.data?.data || null;
    error.value = null;
  } catch (err: any) {
    error.value = err?.response?.data?.message || err.message || '上傳失敗';
    fileInfo.value = null;
  }
};

const fetchFile = async () => {
  try {
    const res = await getFileById(fileId.value);
    fileInfo.value = res.data?.data || null;
    error.value = null;
  } catch (err: any) {
    error.value = err?.response?.data?.message || err.message || '查詢失敗';
    fileInfo.value = null;
  }
};

const deleteFile = async () => {
  try {
    const res = await deleteFileById(fileId.value);
    fileInfo.value = null;
    error.value = `✅ ${res}檔案已成功刪除`;
  } catch (err: any) {
    error.value = err?.response?.data?.message || err.message || '刪除失敗';
  }
};
</script>
