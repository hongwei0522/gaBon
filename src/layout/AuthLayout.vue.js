/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import AppConfig from './AppConfig.vue';
import { useLayout } from './composables/layout';
const { toggleConfigSidebar } = useLayout();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
const __VLS_0 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleConfigSidebar) },
    ...{ class: "layout-config-button config-link" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-cog" },
});
/** @type {[typeof AppConfig, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(AppConfig, new AppConfig({
    location: "landing",
}));
const __VLS_5 = __VLS_4({
    location: "landing",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {__VLS_StyleScopedClasses['layout-config-button']} */ ;
/** @type {__VLS_StyleScopedClasses['config-link']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-cog']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AppConfig: AppConfig,
            toggleConfigSidebar: toggleConfigSidebar,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AuthLayout.vue.js.map