/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import FooterWidget from '@/components/landing/FooterWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from './composables/layout';
const { toggleConfigSidebar } = useLayout();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof TopbarWidget, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TopbarWidget, new TopbarWidget({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
const __VLS_3 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {[typeof FooterWidget, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(FooterWidget, new FooterWidget({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleConfigSidebar) },
    ...{ class: "layout-config-button config-link" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-cog" },
});
/** @type {[typeof AppConfig, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(AppConfig, new AppConfig({
    location: "landing",
}));
const __VLS_11 = __VLS_10({
    location: "landing",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {__VLS_StyleScopedClasses['layout-config-button']} */ ;
/** @type {__VLS_StyleScopedClasses['config-link']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-cog']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FooterWidget: FooterWidget,
            TopbarWidget: TopbarWidget,
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
//# sourceMappingURL=LandingLayout.vue.js.map