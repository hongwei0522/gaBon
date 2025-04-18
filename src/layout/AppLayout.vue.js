/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
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
    }
    else {
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
    return !(sidebarEl?.isSameNode(event.target) ||
        sidebarEl?.contains(event.target) ||
        topbarButtonEl?.isSameNode(event.target) ||
        topbarButtonEl?.contains(event.target));
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-wrapper" },
    ...{ class: (__VLS_ctx.containerClass) },
});
/** @type {[typeof AppSidebar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(AppSidebar, new AppSidebar({
    ref: "sidebarRef",
}));
const __VLS_1 = __VLS_0({
    ref: "sidebarRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {typeof __VLS_ctx.sidebarRef} */ ;
var __VLS_3 = {};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onScroll: (__VLS_ctx.onScroll) },
    ...{ class: "layout-content-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-content-wrapper-inside" },
});
/** @type {[typeof AppTopbar, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(AppTopbar, new AppTopbar({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-content" },
});
/** @type {[typeof AppBreadcrumb, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(AppBreadcrumb, new AppBreadcrumb({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const __VLS_11 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof AppFooter, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(AppFooter, new AppFooter({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const __VLS_18 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    ...{ 'onClick': {} },
    icon: "pi pi-arrow-up",
    ...{ class: "p-button-rounded !fixed md:right-12 right-3 bottom-12" },
}));
const __VLS_20 = __VLS_19({
    ...{ 'onClick': {} },
    icon: "pi pi-arrow-up",
    ...{ class: "p-button-rounded !fixed md:right-12 right-3 bottom-12" },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
let __VLS_22;
let __VLS_23;
let __VLS_24;
const __VLS_25 = {
    onClick: (__VLS_ctx.handleToTop)
};
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.showScrollTopButton) }, null, null);
var __VLS_21;
/** @type {[typeof AppConfig, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(AppConfig, new AppConfig({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {[typeof AppSearch, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(AppSearch, new AppSearch({}));
const __VLS_30 = __VLS_29({}, ...__VLS_functionalComponentArgsRest(__VLS_29));
/** @type {[typeof AppRightMenu, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(AppRightMenu, new AppRightMenu({}));
const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const __VLS_35 = {}.Toast;
/** @type {[typeof __VLS_components.Toast, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    ...{ class: "layout-mask" },
});
/** @type {__VLS_StyleScopedClasses['layout-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-content-wrapper-inside']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-content']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button-rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['!fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['md:right-12']} */ ;
/** @type {__VLS_StyleScopedClasses['right-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-12']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-mask']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AppBreadcrumb: AppBreadcrumb,
            AppConfig: AppConfig,
            AppFooter: AppFooter,
            AppRightMenu: AppRightMenu,
            AppSearch: AppSearch,
            AppSidebar: AppSidebar,
            AppTopbar: AppTopbar,
            containerClass: containerClass,
            showScrollTopButton: showScrollTopButton,
            onScroll: onScroll,
            handleToTop: handleToTop,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppLayout.vue.js.map