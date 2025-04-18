<script setup>
import FooterWidget from '@/components/landing/FooterWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from './composables/layout';

const { toggleConfigSidebar } = useLayout();
</script>

<template>
    <TopbarWidget />
    <main>
        <router-view />
    </main>
    <FooterWidget />
    <button class="layout-config-button config-link" @click="toggleConfigSidebar">
        <i class="pi pi-cog" />
    </button>
    <AppConfig location="landing" />
</template>
