/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useLayout } from '@/layout/composables/layout';
import { ref } from 'vue';
const { layoutState } = useLayout();
const searchInput = ref(null);
function toggleSearchBar() {
    layoutState.searchBarActive = !layoutState.searchBarActive;
}
function focusOnInput() {
    searchInput.value.$el.focus();
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.Dialog;
/** @type {[typeof __VLS_components.Dialog, typeof __VLS_components.Dialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onShow': {} },
    visible: (__VLS_ctx.layoutState.searchBarActive),
    breakpoints: ({ '992px': '75vw', '576px': '90vw' }),
    modal: true,
    dismissableMask: true,
    pt: ({
        root: 'w-1/2',
        header: '!hidden',
        content: '!p-0',
    }),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onShow': {} },
    visible: (__VLS_ctx.layoutState.searchBarActive),
    breakpoints: ({ '992px': '75vw', '576px': '90vw' }),
    modal: true,
    dismissableMask: true,
    pt: ({
        root: 'w-1/2',
        header: '!hidden',
        content: '!p-0',
    }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onShow: (__VLS_ctx.focusOnInput)
};
var __VLS_8 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "search-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-search" },
});
const __VLS_9 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ 'onKeydown': {} },
    type: "text",
    ...{ class: "p-inputtext search-input" },
    ref: "searchInput",
    placeholder: "Search",
}));
const __VLS_11 = __VLS_10({
    ...{ 'onKeydown': {} },
    type: "text",
    ...{ class: "p-inputtext search-input" },
    ref: "searchInput",
    placeholder: "Search",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
let __VLS_13;
let __VLS_14;
let __VLS_15;
const __VLS_16 = {
    onKeydown: (__VLS_ctx.toggleSearchBar)
};
/** @type {typeof __VLS_ctx.searchInput} */ ;
var __VLS_17 = {};
var __VLS_12;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['search-container']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-search']} */ ;
/** @type {__VLS_StyleScopedClasses['p-inputtext']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
// @ts-ignore
var __VLS_18 = __VLS_17;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            layoutState: layoutState,
            searchInput: searchInput,
            toggleSearchBar: toggleSearchBar,
            focusOnInput: focusOnInput,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppSearch.vue.js.map