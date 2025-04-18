/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useLayout } from '@/layout/composables/layout';
import AppMenu from './AppMenu.vue';
import AppTopbar from './AppTopbar.vue';
const { layoutConfig, layoutState, isHorizontal } = useLayout();
let timeout = null;
function onMouseEnter() {
    if (!layoutState.anchored) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        layoutState.sidebarActive = true;
    }
}
function onMouseLeave() {
    if (!layoutState.anchored) {
        if (!timeout) {
            timeout = setTimeout(() => (layoutState.sidebarActive = false), 300);
        }
    }
}
function onAnchorToggle() {
    layoutState.anchored = !layoutState.anchored;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseenter: (__VLS_ctx.onMouseEnter) },
    ...{ onMouseleave: (__VLS_ctx.onMouseLeave) },
    ...{ class: "layout-sidebar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sidebar-header" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: ({ name: 'home' }),
    ...{ class: "logo" },
}));
const __VLS_2 = __VLS_1({
    to: ({ name: 'home' }),
    ...{ class: "logo" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "logo-image" },
    src: (__VLS_ctx.layoutConfig.menuTheme === 'light' ? '/layout/images/logo-dark.svg' : '/layout/images/logo-white.svg'),
    alt: "diamond-layout",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "app-name title-h7" },
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onAnchorToggle) },
    ...{ class: "layout-sidebar-anchor" },
    type: "button",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-menu-container" },
});
/** @type {[typeof AppMenu, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(AppMenu, new AppMenu({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
if (__VLS_ctx.isHorizontal) {
    /** @type {[typeof AppTopbar, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(AppTopbar, new AppTopbar({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
/** @type {__VLS_StyleScopedClasses['layout-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-header']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-image']} */ ;
/** @type {__VLS_StyleScopedClasses['app-name']} */ ;
/** @type {__VLS_StyleScopedClasses['title-h7']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-sidebar-anchor']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-menu-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AppMenu: AppMenu,
            AppTopbar: AppTopbar,
            layoutConfig: layoutConfig,
            isHorizontal: isHorizontal,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onAnchorToggle: onAnchorToggle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppSidebar.vue.js.map