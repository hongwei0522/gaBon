/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
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
watch(route, () => {
    setBreadcrumbRoutes();
}, { immediate: true });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "layout-breadcrumb" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({
    ...{ class: "flex space-x-2" },
});
for (const [breadcrumb, i] of __VLS_getVForSourceType((__VLS_ctx.breadcrumbRoutes))) {
    (breadcrumb.label);
    if (breadcrumb.path) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_0 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: (breadcrumb.path),
            ...{ class: "text-surface-950 dark:text-surface-0 title-h7 text-xl" },
        }));
        const __VLS_2 = __VLS_1({
            to: (breadcrumb.path),
            ...{ class: "text-surface-950 dark:text-surface-0 title-h7 text-xl" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_3.slots.default;
        (breadcrumb.label);
        var __VLS_3;
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: "text-surface-950 dark:text-surface-0 title-h7 text-xl select-none" },
        });
        (breadcrumb.label);
    }
    if (i !== __VLS_ctx.breadcrumbRoutes.length - 1) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: "layout-breadcrumb-chevron select-none" },
        });
    }
}
/** @type {__VLS_StyleScopedClasses['layout-breadcrumb']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-surface-950']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['title-h7']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-surface-950']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['title-h7']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['select-none']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-breadcrumb-chevron']} */ ;
/** @type {__VLS_StyleScopedClasses['select-none']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            breadcrumbRoutes: breadcrumbRoutes,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppBreadcrumb.vue.js.map