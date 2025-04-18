<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed, onBeforeUnmount, ref, watch, onMounted } from 'vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppConfig from './AppConfig.vue';
import AppFooter from './AppFooter.vue';
import AppRightMenu from './AppRightMenu.vue';
import AppSearch from './AppSearch.vue';
import AppSidebar from './AppSidebar.vue';
import AppTopbar from './AppTopbar.vue';

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

watch(isSidebarActive, (newVal) => {
  if (newVal) {
    bindOutsideClickListener();
  } else {
    unbindOutsideClickListener();
  }
});

onBeforeUnmount(() => {
  unbindOutsideClickListener();
});

const containerClass = computed(() => {
  return [
    `layout-sidebar-${layoutConfig.menuTheme}`,
    `layout-card-${layoutConfig.cardStyle}`,
    {
      'layout-overlay': layoutConfig.menuMode === 'overlay',
      'layout-static': layoutConfig.menuMode === 'static',
      'layout-slim': layoutConfig.menuMode === 'slim',
      'layout-horizontal': layoutConfig.menuMode === 'horizontal',
      'layout-compact': layoutConfig.menuMode === 'compact',
      'layout-reveal': layoutConfig.menuMode === 'reveal',
      'layout-drawer': layoutConfig.menuMode === 'drawer',
      'layout-overlay-active': layoutState.overlayMenuActive || layoutState.staticMenuMobileActive,
      'layout-mobile-active': layoutState.staticMenuMobileActive,
      'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
      'layout-sidebar-active': layoutState.sidebarActive,
      'layout-sidebar-anchored': layoutState.anchored,
    },
  ];
});

function bindOutsideClickListener() {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        layoutState.overlayMenuActive = false;
        layoutState.overlaySubmenuActive = false;
        layoutState.staticMenuMobileActive = false;
        layoutState.menuHoverActive = false;
        layoutState.configSidebarVisible = false;
      }
    };

    setTimeout(() => {
      document.addEventListener('click', outsideClickListener.value);
    }, 0);
  }
}

function unbindOutsideClickListener() {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener.value);
    outsideClickListener.value = null;
  }
}

function isOutsideClicked(event) {
  const sidebarEl = document.querySelector('.layout-sidebar');
  const topbarButtonEl = document.querySelector('.topbar-left > a');

  return !(
    sidebarEl?.isSameNode(event.target) ||
    sidebarEl?.contains(event.target) ||
    topbarButtonEl?.isSameNode(event.target) ||
    topbarButtonEl?.contains(event.target)
  );
}

// scrollToTop Button
const showScrollTopButton = ref(false);

const onScroll = () => {
  const scrollContainer = document.querySelector('.layout-content-wrapper');

  if (scrollContainer) {
    showScrollTopButton.value = scrollContainer.scrollTop > 0;
  }
};

const handleToTop = () => {
  const scrollContainer = document.querySelector('.layout-content-wrapper');
  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

onMounted(() => {
  onScroll();
});
</script>

<template>
  <div class="layout-wrapper" :class="containerClass">
    <AppSidebar ref="sidebarRef" />
    <div class="layout-content-wrapper" @scroll="onScroll">
      <div class="layout-content-wrapper-inside">
        <AppTopbar />
        <div class="layout-content">
          <AppBreadcrumb />
          <router-view />
        </div>
        <AppFooter />
      </div>

      <Button
        v-show="showScrollTopButton"
        icon="pi pi-arrow-up"
        class="p-button-rounded !fixed md:right-12 right-3 bottom-12"
        @click="handleToTop"
      />
    </div>
    <AppConfig />
    <AppSearch />
    <AppRightMenu />
    <Toast />

    <div class="layout-mask" />
  </div>
</template>
