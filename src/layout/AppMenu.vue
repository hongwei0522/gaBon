<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
  {
    label: '測試用模組 ',
    icon: 'pi pi-fw pi-cog',
    items: [
      {
        label: '商戶管理',
        icon: 'pi pi-fw pi-warehouse',
        to: '/merchants',
      },
      {
        label: '員工管理',
        icon: 'pi pi-fw pi-warehouse',
        to: '/employees',
      },
      {
        label: '檔案上傳',
        icon: 'pi pi-fw pi-warehouse',
        to: '/upload',
      },
      {
        label: '職位等級管理',
        icon: 'pi pi-fw pi-warehouse',
        to: '/positionLevels',
      },
    ],
  },

  { separator: true },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <AppMenuItem v-if="!item.separator" :item="item" root :index="i" />

      <li v-else class="menu-separator" />
    </template>
  </ul>
</template>
