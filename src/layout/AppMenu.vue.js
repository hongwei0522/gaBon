/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
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
        ],
    },
    { separator: true },
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "layout-menu" },
});
for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.model))) {
    (item);
    if (!item.separator) {
        /** @type {[typeof AppMenuItem, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(AppMenuItem, new AppMenuItem({
            item: (item),
            root: true,
            index: (i),
        }));
        const __VLS_1 = __VLS_0({
            item: (item),
            root: true,
            index: (i),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li)({
            ...{ class: "menu-separator" },
        });
    }
}
/** @type {__VLS_StyleScopedClasses['layout-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-separator']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AppMenuItem: AppMenuItem,
            model: model,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppMenu.vue.js.map