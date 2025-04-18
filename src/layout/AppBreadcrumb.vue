<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const breadcrumbRoutes = ref([]);

const setBreadcrumbRoutes = () => {
  if (route.meta.breadcrumb) {
    breadcrumbRoutes.value = route.meta.breadcrumb.map((label, index) => {
      return {
        label,
        path: index === 0 ? '/' : null,
      };
    });
    return;
  }

  breadcrumbRoutes.value = route.fullPath
    .split('/')
    .filter((item) => item !== '')
    .filter((item) => isNaN(Number(item)))
    .map((item, index, array) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      path: index === array.length - 1 ? null : '/' + array.slice(0, index + 1).join('/'),
    }));
};

watch(
  route,
  () => {
    setBreadcrumbRoutes();
  },
  { immediate: true }
);
</script>

<template>
  <nav class="layout-breadcrumb">
    <ol class="flex space-x-2">
      <template v-for="(breadcrumb, i) in breadcrumbRoutes" :key="breadcrumb.label">
        <li v-if="breadcrumb.path">
          <RouterLink :to="breadcrumb.path" class="text-surface-950 dark:text-surface-0 title-h7 text-xl">
            {{ breadcrumb.label }}
          </RouterLink>
        </li>
        <li v-else class="text-surface-950 dark:text-surface-0 title-h7 text-xl select-none">
          {{ breadcrumb.label }}
        </li>
        <li v-if="i !== breadcrumbRoutes.length - 1" class="layout-breadcrumb-chevron select-none">/</li>
      </template>
    </ol>
  </nav>
</template>
<!-- <script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const breadcrumbRoutes = ref([]);

const setBreadcrumbRoutes = () => {
  breadcrumbRoutes.value = route.matched.flatMap((matchedRoute, index) => {
    if (!matchedRoute.meta.breadcrumb) return [];

    return matchedRoute.meta.breadcrumb.map((label, breadcrumbIndex) => {
      const pathSegments = route.matched
        .slice(0, index + 1)
        .map((r) => r.path)
        .join('/')
        .replace(/\/+/g, '/'); // 去除重复的斜杠

      return {
        label,
        path: breadcrumbIndex === 0 ? '/' : pathSegments,
      };
    });
  });
};

watch(
  () => route.path,
  () => {
    setBreadcrumbRoutes();
  },
  { immediate: true }
);
</script>

<template>
  <nav class="layout-breadcrumb">
    <ol class="flex space-x-2">
      <template v-for="(breadcrumb, i) in breadcrumbRoutes" :key="breadcrumb.label">
        <li v-if="breadcrumb.path">
          <RouterLink
            v-if="i !== breadcrumbRoutes.length - 1"
            :to="breadcrumb.path"
            class="text-surface-950 dark:text-surface-0 title-h7 text-xl"
          >
            {{ breadcrumb.label }}
          </RouterLink>
          <span v-else class="text-surface-950 dark:text-surface-0 title-h7 text-xl select-none">
            {{ breadcrumb.label }}
          </span>
        </li>
        <li v-if="i !== breadcrumbRoutes.length - 1" class="layout-breadcrumb-chevron select-none">/</li>
      </template>
    </ol>
  </nav>
</template>  !-->
