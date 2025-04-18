/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useLayout } from '@/layout/composables/layout';
const { isDarkTheme } = useLayout();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-footer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer-logo-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (`/layout/images/logo-${__VLS_ctx.isDarkTheme ? 'white' : 'dark'}.svg`),
    alt: "diamond-layout",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "footer-app-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "footer-copyright" },
});
/** @type {__VLS_StyleScopedClasses['layout-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-logo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-app-name']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-copyright']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isDarkTheme: isDarkTheme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppFooter.vue.js.map