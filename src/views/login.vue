<template>
  <div
    class="bg-cover bg-center h-screen w-full relative"
    style="background-image: url('/layout/images/background.jpg')"
  >
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <ProgressSpinner />
    </div>

    <div class="absolute left-0 bottom-1/4">
      <form @submit.prevent="handleSuperLogin">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="username" class="text-white text-sm w-20">帳號</label>
          <InputText
            id="username"
            v-model="loginSuperData.email"
            type="text"
            class="w-full md:w-11rem h-2rem text-sm"
          />
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="password" class="text-white text-sm w-20">密碼</label>
          <Password
            id="password"
            v-model="loginSuperData.password"
            :feedback="false"
            toggle-mask
            input-class="w-full md:w-11rem h-2rem text-sm"
            class="w-full md:w-11rem"
          />
        </div>

        <div class="flex flex-column md:flex-row gap-2 justify-content-center mt-4">
          <Button label="登錄超級管理員" @click="handleSuperLogin" class="w-full md:w-7rem h-2rem text-sm" rounded />
        </div>
      </form>
    </div>

    <div class="absolute left-1/4 bottom-1/4">
      <form @submit.prevent="handleLogin">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="business_id" class="text-white text-sm w-20">businessId</label>
          <InputText
            id="business_id"
            v-model="loginData.business_id"
            type="text"
            class="w-full md:w-11rem h-2rem text-sm"
          />
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="username" class="text-white text-sm w-20">email</label>
          <InputText id="username" v-model="loginData.email" type="text" class="w-full md:w-11rem h-2rem text-sm" />
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="password" class="text-white text-sm w-20">password</label>
          <Password
            id="password"
            v-model="loginData.password"
            :feedback="false"
            toggle-mask
            input-class="w-full md:w-11rem h-2rem text-sm"
            class="w-full md:w-11rem"
          />
        </div>

        <div class="flex flex-column md:flex-row gap-2 justify-content-center mt-4">
          <Button label="登錄系統" @click="handleLogin" class="w-full md:w-7rem h-2rem text-sm" rounded />
        </div>
      </form>
    </div>

    <div class="absolute left-2/4 bottom-1/4">
      <form @submit.prevent="handlePostSendOPT">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="business_id" class="text-white text-sm w-20">businessId</label>
          <InputText
            id="business_id"
            v-model="sendOTP.business_id"
            type="text"
            class="w-full md:w-11rem h-2rem text-sm"
          />
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="username" class="text-white text-sm w-20">email</label>
          <InputText id="username" v-model="sendOTP.email" type="text" class="w-full md:w-11rem h-2rem text-sm" />
        </div>

        <div class="flex flex-column md:flex-row gap-2 justify-content-center mt-4">
          <Button label="發送OTP" @click="handlePostSendOPT" class="w-full md:w-7rem h-2rem text-sm" rounded />
        </div>
      </form>
    </div>

    <div class="absolute left-3/4 bottom-1/4">
      <form @submit.prevent="handleLoginOTP">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="business_id" class="text-white text-sm w-20">businessId</label>
          <InputText
            id="business_id"
            v-model="loginOTP.business_id"
            type="text"
            class="w-full md:w-11rem h-2rem text-sm"
          />
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="username" class="text-white text-sm w-20">email</label>
          <InputText id="username" v-model="loginOTP.email" type="text" class="w-full md:w-11rem h-2rem text-sm" />
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3">
          <label for="password" class="text-white text-sm w-20">otp</label>
          <Password
            id="password"
            v-model="loginOTP.otp"
            :feedback="false"
            toggle-mask
            input-class="w-full md:w-11rem h-2rem text-sm"
            class="w-full md:w-11rem"
          />
        </div>

        <div class="flex flex-column md:flex-row gap-2 justify-content-center mt-4">
          <Button label="登錄系統" @click="handleLoginOTP" class="w-full md:w-7rem h-2rem text-sm" rounded />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { postSuperLogin, postLogin, postSendOPT, postLoginOPT } from '@/api/auth/login';
import { useRouter } from 'vue-router';

const router = useRouter();

const loading = ref(false);
const loginSuperData = ref({ email: '', password: '' });
const loginData = ref({ business_id: '', email: '', password: '' });
const sendOTP = ref({ business_id: '', email: '' });
const loginOTP = ref({ business_id: '', email: '', otp: '' });

const handleSuperLogin = async () => {
  try {
    loading.value = true;
    const response = await postSuperLogin(loginSuperData.value.email, loginSuperData.value.password);
    console.log(response);
    if (response && response.data) {
      const { token } = response.data.data;
      console.log('login api triggered');
      localStorage.setItem('authorization', token);
      router.push('/');
    } else {
      console.error('沒有返回數據');
    }
  } finally {
    loading.value = false;
  }
};

const handleLogin = async () => {
  try {
    loading.value = true;
    const response = await postLogin(loginData.value.business_id, loginData.value.email, loginData.value.password);
    console.log(response);
    if (response && response.data) {
      const { authToken } = response.data;
      console.log('login api triggered');
      localStorage.setItem('authToken', authToken);
      // router.push('/');
    } else {
      console.error('沒有返回數據');
    }
  } finally {
    loading.value = false;
  }
};

const handlePostSendOPT = async () => {
  try {
    loading.value = true;
    const response = await postSendOPT(sendOTP.value.business_id, sendOTP.value.email);
    console.log(response);
    if (response && response.data) {
      const { authToken } = response.data;
      console.log('login api triggered');
      localStorage.setItem('authToken', authToken);
      // router.push('/');
    } else {
      console.error('沒有返回數據');
    }
  } finally {
    loading.value = false;
  }
};

const handleLoginOTP = async () => {
  try {
    loading.value = true;
    const response = await postLoginOPT(loginOTP.value.business_id, loginOTP.value.email, loginOTP.value.otp);
    console.log(response);
    if (response && response.data) {
      const { authToken } = response.data;
      console.log('login api triggered');
      localStorage.setItem('authToken', authToken);
      // router.push('/');
    } else {
      console.error('沒有返回數據');
    }
  } finally {
    loading.value = false;
  }
};
</script>
