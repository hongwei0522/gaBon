<script setup>
import { storeToRefs } from "pinia";
import { useLoadingStore } from "@/stores/useLoadingStore";

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
import ScrollTop from 'primevue/scrolltop';

</script>

<template>
  <div>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <ProgressSpinner />
    </div>
    
    <router-view />
  </div>
</template>

<style></style>
