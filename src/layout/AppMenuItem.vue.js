/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useLayout } from '@/layout/composables/layout';
import { nextTick, onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const { layoutConfig, layoutState, setActiveMenuItem, toggleMenu, isHorizontal, isSlim, isCompact, isDesktop, isStatic, } = useLayout();
const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
    index: {
        type: Number,
        default: 0,
    },
    root: {
        type: Boolean,
        default: true,
    },
    parentItemKey: {
        type: String,
        default: null,
    },
    rootIndex: {
        type: Number,
        default: 0,
    },
});
const isActiveMenu = ref(false);
const itemKey = ref(null);
const subMenuRef = ref(null);
const menuItemRef = ref(null);
onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);
    const activeItem = layoutState.activeMenuItem;
    isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
    handleRouteChange(route.path);
});
watch(() => isActiveMenu.value, () => {
    if ((isSlim.value || isCompact.value || isHorizontal.value) && isDesktop) {
        nextTick(() => {
            if (subMenuRef.value && subMenuRef.value.parentElement) {
                calculatePosition(subMenuRef.value, subMenuRef.value.parentElement);
            }
        });
    }
});
watch(() => layoutState.activeMenuItem, (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
});
watch(() => layoutConfig.menuMode, () => {
    isActiveMenu.value = false;
});
watch(() => layoutState.overlaySubmenuActive, (newValue) => {
    if (!newValue) {
        isActiveMenu.value = false;
    }
});
watch(() => route.path, (newPath) => {
    if (!(isSlim.value || isCompact.value || isHorizontal.value) && props.item.to && props.item.to === newPath) {
        setActiveMenuItem(itemKey);
    }
    else if (isSlim.value || isCompact.value || isHorizontal.value) {
        isActiveMenu.value = false;
    }
});
watch(() => route.path, handleRouteChange);
function handleRouteChange(newPath) {
    if (!(isSlim.value || isCompact.value || isHorizontal.value) && props.item.to && props.item.to === newPath) {
        setActiveMenuItem(itemKey);
    }
    else if (isSlim.value || isCompact.value || isHorizontal.value) {
        isActiveMenu.value = false;
    }
}
const itemClick = async (event, item) => {
    if (item.disabled) {
        event.preventDefault();
        return;
    }
    const { overlayMenuActive, staticMenuMobileActive } = layoutState;
    if ((item.to || item.url) && (staticMenuMobileActive || overlayMenuActive)) {
        toggleMenu();
    }
    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }
    if (item.items) {
        if (props.root && isActiveMenu.value && (isSlim.value || isCompact.value || isHorizontal.value)) {
            layoutState.overlaySubmenuActive = false;
            layoutState.menuHoverActive = false;
            return;
        }
        setActiveMenuItem(isActiveMenu.value ? props.parentItemKey : itemKey);
        if (props.root && !isActiveMenu.value && (isSlim.value || isCompact.value || isHorizontal.value)) {
            layoutState.overlaySubmenuActive = true;
            layoutState.menuHoverActive = true;
            isActiveMenu.value = true;
            removeAllTooltips();
        }
    }
    else {
        if (!isDesktop.value) {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
        if (isSlim.value || isCompact.value || isHorizontal.value) {
            layoutState.overlaySubmenuActive = false;
            layoutState.menuHoverActive = false;
            return;
        }
        setActiveMenuItem(itemKey);
    }
};
const onMouseEnter = () => {
    if (props.root && (isSlim.value || isCompact.value || isHorizontal.value) && isDesktop) {
        if (!isActiveMenu.value && layoutState.menuHoverActive) {
            setActiveMenuItem(itemKey);
        }
    }
};
const removeAllTooltips = () => {
    const tooltips = document.querySelectorAll('.p-tooltip');
    tooltips.forEach((tooltip) => {
        tooltip.remove();
    });
};
const calculatePosition = (overlay, target) => {
    if (overlay && target) {
        const { left, top } = target.getBoundingClientRect();
        const vHeight = window.innerHeight;
        const oHeight = overlay.offsetHeight;
        overlay.style.top = '';
        overlay.style.left = '';
        if (isHorizontal.value) {
            overlay.style.left = `${left}px`;
        }
        else if (isSlim.value || isCompact.value) {
            const height = top + oHeight;
            overlay.style.top = vHeight < height ? `${top - (height - vHeight)}px` : `${top}px`;
            ``;
        }
    }
};
``;
const checkActiveRoute = (item) => {
    return route.path.startsWith(item.to.replace(/\/$/, ''));
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ref: "menuItemRef",
    ...{ class: ({ 'layout-root-menuitem': __VLS_ctx.root, 'active-menuitem': __VLS_ctx.isStatic ? !__VLS_ctx.root && __VLS_ctx.isActiveMenu : __VLS_ctx.isActiveMenu }) },
});
/** @type {typeof __VLS_ctx.menuItemRef} */ ;
if (__VLS_ctx.root && __VLS_ctx.item.visible !== false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "layout-menuitem-root-text" },
    });
    (__VLS_ctx.item.label);
}
if ((!__VLS_ctx.item.to || __VLS_ctx.item.items) && __VLS_ctx.item.visible !== false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (...[$event]) => {
                if (!((!__VLS_ctx.item.to || __VLS_ctx.item.items) && __VLS_ctx.item.visible !== false))
                    return;
                __VLS_ctx.itemClick($event, __VLS_ctx.item, __VLS_ctx.index);
            } },
        ...{ onMouseenter: (__VLS_ctx.onMouseEnter) },
        href: (__VLS_ctx.item.url),
        ...{ class: (__VLS_ctx.item.class) },
        target: (__VLS_ctx.item.target),
        tabindex: "0",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip)(null, { ...__VLS_directiveBindingRestFields, modifiers: { hover: true, }, value: (__VLS_ctx.isCompact && __VLS_ctx.root && !__VLS_ctx.isActiveMenu ? __VLS_ctx.item.label : null) }, null, null);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
        ...{ class: (__VLS_ctx.item.icon) },
        ...{ class: "layout-menuitem-icon" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "layout-menuitem-text label-small text-inherit" },
    });
    (__VLS_ctx.item.label);
    if (__VLS_ctx.item.items) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
            ...{ class: "pi pi-fw pi-angle-down layout-submenu-toggler" },
        });
    }
}
if (__VLS_ctx.item.to && !__VLS_ctx.item.items && __VLS_ctx.item.visible !== false) {
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        ...{ 'onMouseenter': {} },
        ...{ class: ([__VLS_ctx.item.class, { 'active-route': __VLS_ctx.checkActiveRoute(__VLS_ctx.item) }]) },
        tabindex: "0",
        to: (__VLS_ctx.item.to),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        ...{ 'onMouseenter': {} },
        ...{ class: ([__VLS_ctx.item.class, { 'active-route': __VLS_ctx.checkActiveRoute(__VLS_ctx.item) }]) },
        tabindex: "0",
        to: (__VLS_ctx.item.to),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_4;
    let __VLS_5;
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.item.to && !__VLS_ctx.item.items && __VLS_ctx.item.visible !== false))
                return;
            __VLS_ctx.itemClick($event, __VLS_ctx.item, __VLS_ctx.index);
        }
    };
    const __VLS_8 = {
        onMouseenter: (__VLS_ctx.onMouseEnter)
    };
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip)(null, { ...__VLS_directiveBindingRestFields, modifiers: { hover: true, }, value: (__VLS_ctx.isCompact && __VLS_ctx.root && !__VLS_ctx.isActiveMenu ? __VLS_ctx.item.label : null) }, null, null);
    __VLS_3.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
        ...{ class: (__VLS_ctx.item.icon) },
        ...{ class: "layout-menuitem-icon" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "layout-menuitem-text label-small text-inherit" },
    });
    (__VLS_ctx.item.label);
    if (__VLS_ctx.item.items) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
            ...{ class: "pi pi-fw pi-angle-down layout-submenu-toggler" },
        });
    }
    var __VLS_3;
}
if (__VLS_ctx.item.items && __VLS_ctx.item.visible !== false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ref: "subMenuRef",
        ...{ class: ({ 'layout-root-submenulist': __VLS_ctx.root }) },
    });
    /** @type {typeof __VLS_ctx.subMenuRef} */ ;
    for (const [child, i] of __VLS_getVForSourceType((__VLS_ctx.item.items))) {
        const __VLS_9 = {}.AppMenuItem;
        /** @type {[typeof __VLS_components.AppMenuItem, typeof __VLS_components.appMenuItem, ]} */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
            key: (child),
            index: (i),
            item: (child),
            parentItemKey: (__VLS_ctx.itemKey),
            root: (false),
            rootIndex: (props.index),
        }));
        const __VLS_11 = __VLS_10({
            key: (child),
            index: (i),
            item: (child),
            parentItemKey: (__VLS_ctx.itemKey),
            root: (false),
            rootIndex: (props.index),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    }
}
/** @type {__VLS_StyleScopedClasses['layout-root-menuitem']} */ ;
/** @type {__VLS_StyleScopedClasses['active-menuitem']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-menuitem-root-text']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-menuitem-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-menuitem-text']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['text-inherit']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-fw']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-angle-down']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-submenu-toggler']} */ ;
/** @type {__VLS_StyleScopedClasses['active-route']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-menuitem-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-menuitem-text']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['text-inherit']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-fw']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-angle-down']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-submenu-toggler']} */ ;
/** @type {__VLS_StyleScopedClasses['layout-root-submenulist']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            isCompact: isCompact,
            isStatic: isStatic,
            isActiveMenu: isActiveMenu,
            itemKey: itemKey,
            subMenuRef: subMenuRef,
            menuItemRef: menuItemRef,
            itemClick: itemClick,
            onMouseEnter: onMouseEnter,
            checkActiveRoute: checkActiveRoute,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppMenuItem.vue.js.map