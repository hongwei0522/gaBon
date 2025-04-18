/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useLayout } from '@/layout/composables/layout';
import { ref } from 'vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
const { layoutState, isDarkTheme, toggleMenu, toggleConfigSidebar } = useLayout();
const notificationsBars = [
    {
        id: 'inbox',
        label: 'Inbox',
        badge: '2',
    },
    {
        id: 'general',
        label: 'General',
    },
    {
        id: 'archived',
        label: 'Archived',
    },
];
const selectedNotificationBar = ref(notificationsBars?.[0].id ?? 'inbox');
const notifications = [
    {
        id: 'inbox',
        data: [
            {
                image: '/layout/images/avatar/avatar-square-m-2.jpg',
                name: 'Michael Lee',
                description: 'You have a new message from the support team regarding your recent inquiry.',
                time: '1 hour ago',
                new: true,
            },
            {
                image: '/layout/images/avatar/avatar-square-f-1.jpg',
                name: 'Alice Johnson',
                description: 'Your report has been successfully submitted and is under review.',
                time: '10 minutes ago',
                new: true,
            },
            {
                image: '/layout/images/avatar/avatar-square-f-2.jpg',
                name: 'Emily Davis',
                description: 'The project deadline has been updated to September 30th. Please check the details.',
                time: 'Yesterday at 4:35 PM',
                new: false,
            },
        ],
    },
    {
        id: 'general',
        data: [
            {
                image: '/layout/images/avatar/avatar-square-f-1.jpg',
                name: 'Alice Johnson',
                description: 'Reminder: Your subscription is about to expire in 3 days. Renew now to avoid interruption.',
                time: '30 minutes ago',
                new: true,
            },
            {
                image: '/layout/images/avatar/avatar-square-m-2.jpg',
                name: 'Michael Lee',
                description: 'The server maintenance has been completed successfully. No further downtime is expected.',
                time: 'Yesterday at 2:15 PM',
                new: false,
            },
        ],
    },
    {
        id: 'archived',
        data: [
            {
                image: '/layout/images/avatar/avatar-square-m-2.jpg',
                name: 'Lucas Brown',
                description: 'Your appointment with Dr. Anderson has been confirmed for October 12th at 10:00 AM.',
                time: '1 week ago',
                new: true,
            },
            {
                image: '/layout/images/avatar/avatar-square-f-2.jpg',
                name: 'Emily Davis',
                description: 'The document you uploaded has been successfully archived for future reference.',
                time: '2 weeks ago',
                new: false,
            },
        ],
    },
];
function toggleSearchBar() {
    layoutState.searchBarActive = !layoutState.searchBarActive;
}
function showRightMenu() {
    layoutState.rightMenuVisible = !layoutState.rightMenuVisible;
}
const handleLogOut = () => {
    localStorage.removeItem('authToken');
    setTimeout(() => {
        window.location.href = '/login';
    }, 300);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-topbar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "topbar-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (__VLS_ctx.toggleMenu) },
    tabindex: "0",
    ...{ class: "menu-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-chevron-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "horizontal-logo" },
    src: "/layout/images/logo-white.svg",
    alt: "diamond-layout",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span)({
    ...{ class: "topbar-separator" },
});
/** @type {[typeof AppBreadcrumb, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(AppBreadcrumb, new AppBreadcrumb({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "mobile-logo" },
    src: (`/layout/images/logo-${__VLS_ctx.isDarkTheme ? 'white' : 'dark'}.svg`),
    alt: "diamond-layout",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "topbar-right" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "topbar-menu" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "right-sidebar-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (__VLS_ctx.toggleSearchBar) },
    ...{ class: "right-sidebar-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-search" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "right-sidebar-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleConfigSidebar) },
    ...{ class: "app-config-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-cog" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "right-sidebar-item static sm:relative" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "right-sidebar-button relative z-50" },
});
__VLS_asFunctionalDirective(__VLS_directives.vStyleclass)(null, { ...__VLS_directiveBindingRestFields, value: ({
        selector: '@next',
        enterFromClass: 'hidden',
        enterActiveClass: 'animate-scalein',
        leaveActiveClass: 'animate-fadeout',
        leaveToClass: 'hidden',
        hideOnOutsideClick: true,
    }) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span)({
    ...{ class: "w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2.5" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-bell" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "list-none m-0 rounded-2xl border border-surface absolute bg-surface-0 dark:bg-surface-900 overflow-hidden hidden origin-top min-w-72 sm:w-[22rem] mt-2 right-0 z-50 top-auto shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "p-4 flex items-center justify-between border-b border-surface" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "label-small text-surface-950 dark:text-surface-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "py-1 px-2 text-surface-950 dark:text-surface-0 label-x-small hover:bg-emphasis border border-surface rounded-lg shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] transition-all" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center border-b border-surface" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.notificationsBars))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectedNotificationBar = item.id;
            } },
        key: (index),
        ...{ class: (__VLS_ctx.selectedNotificationBar === item.id
                ? 'border-surface-950 dark:border-surface-0'
                : 'border-transparent') },
        ...{ class: "px-3.5 py-2 inline-flex items-center border-b gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: (__VLS_ctx.selectedNotificationBar === item.id ? 'text-surface-950 dark:text-surface-0' : '') },
        ...{ class: "label-small" },
    });
    (item.label);
    if (item?.badge) {
        const __VLS_3 = {}.Badge;
        /** @type {[typeof __VLS_components.Badge, ]} */ ;
        // @ts-ignore
        const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({
            value: (item.badge),
            severity: "success",
            size: "small",
            ...{ class: "!rounded-md" },
        }));
        const __VLS_5 = __VLS_4({
            value: (item.badge),
            severity: "success",
            size: "small",
            ...{ class: "!rounded-md" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "flex flex-col divide-y divide-[var(--surface-border)] max-h-80 overflow-auto" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.notifications.find((f) => f.id === __VLS_ctx.selectedNotificationBar).data))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-3 px-6 py-3.5 cursor-pointer hover:bg-emphasis transition-all" },
    });
    const __VLS_7 = {}.OverlayBadge;
    /** @type {[typeof __VLS_components.OverlayBadge, typeof __VLS_components.OverlayBadge, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        value: "",
        severity: "danger",
        ...{ class: "inline-flex" },
    }));
    const __VLS_9 = __VLS_8({
        value: "",
        severity: "danger",
        ...{ class: "inline-flex" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_10.slots.default;
    const __VLS_11 = {}.Avatar;
    /** @type {[typeof __VLS_components.Avatar, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
        image: (item.image),
        size: "large",
        'pt:image:class': "!rounded-lg",
    }));
    const __VLS_13 = __VLS_12({
        image: (item.image),
        size: "large",
        'pt:image:class': "!rounded-lg",
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    var __VLS_10;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-3" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "label-small text-left text-surface-950 dark:text-surface-0" },
    });
    (item.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "label-xsmall text-left line-clamp-1" },
    });
    (item.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "label-xsmall text-left" },
    });
    (item.time);
    if (item.new) {
        const __VLS_15 = {}.Badge;
        /** @type {[typeof __VLS_components.Badge, ]} */ ;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
            value: "",
            severity: "success",
        }));
        const __VLS_17 = __VLS_16({
            value: "",
            severity: "success",
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    }
    if (index !== __VLS_ctx.notifications.length - 1) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span)({});
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "profile-item static sm:relative" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "!bg-none !border-none !outline-none" },
});
__VLS_asFunctionalDirective(__VLS_directives.vStyleclass)(null, { ...__VLS_directiveBindingRestFields, value: ({
        selector: '@next',
        enterFromClass: 'hidden',
        enterActiveClass: 'animate-scalein',
        leaveActiveClass: 'animate-fadeout',
        leaveToClass: 'hidden',
        hideOnOutsideClick: true,
    }) }, null, null);
const __VLS_19 = {}.Avatar;
/** @type {[typeof __VLS_components.Avatar, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    image: "/layout/images/profile.jpg",
    'pt:image:class': "!rounded-lg",
    ...{ class: "!w-10 !h-10" },
}));
const __VLS_21 = __VLS_20({
    image: "/layout/images/profile.jpg",
    'pt:image:class': "!rounded-lg",
    ...{ class: "!w-10 !h-10" },
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "list-none p-2 m-0 rounded-2xl border border-surface overflow-hidden absolute bg-surface-0 dark:bg-surface-900 hidden origin-top w-52 mt-2 right-0 z-[999] top-auto shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "flex flex-col gap-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-user" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-cog" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-calendar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-inbox" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-power-off" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ onClick: (__VLS_ctx.handleLogOut) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "right-sidebar-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (__VLS_ctx.showRightMenu) },
    tabindex: "0",
    ...{ class: "right-sidebar-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
    ...{ class: "pi pi-align-right" },
});
/** @type {__VLS_StyleScopedClasses['layout-topbar']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar-left']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-chevron-left']} */ ;
/** @type {__VLS_StyleScopedClasses['horizontal-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar-separator']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar-right']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-item']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-search']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-item']} */ ;
/** @type {__VLS_StyleScopedClasses['app-config-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-cog']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-item']} */ ;
/** @type {__VLS_StyleScopedClasses['static']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:relative']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-button']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-2']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-bell']} */ ;
/** @type {__VLS_StyleScopedClasses['list-none']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-surface']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-surface-900']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['origin-top']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-72']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-[22rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['top-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-surface']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['text-surface-950']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-surface-950']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['label-x-small']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-surface']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-surface']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['!rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-y']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-[var(--surface-border)]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-80']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-surface-950']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['label-xsmall']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['line-clamp-1']} */ ;
/** @type {__VLS_StyleScopedClasses['label-xsmall']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-item']} */ ;
/** @type {__VLS_StyleScopedClasses['static']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:relative']} */ ;
/** @type {__VLS_StyleScopedClasses['!bg-none']} */ ;
/** @type {__VLS_StyleScopedClasses['!border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['!outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['!w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['!h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['list-none']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-surface']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-surface-900']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['origin-top']} */ ;
/** @type {__VLS_StyleScopedClasses['w-52']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[999]']} */ ;
/** @type {__VLS_StyleScopedClasses['top-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-400']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-user']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-400']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-cog']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-400']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-calendar']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-400']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-inbox']} */ ;
/** @type {__VLS_StyleScopedClasses['label-small']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-surface-400']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-power-off']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-item']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-align-right']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AppBreadcrumb: AppBreadcrumb,
            isDarkTheme: isDarkTheme,
            toggleMenu: toggleMenu,
            toggleConfigSidebar: toggleConfigSidebar,
            notificationsBars: notificationsBars,
            selectedNotificationBar: selectedNotificationBar,
            notifications: notifications,
            toggleSearchBar: toggleSearchBar,
            showRightMenu: showRightMenu,
            handleLogOut: handleLogOut,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppTopbar.vue.js.map