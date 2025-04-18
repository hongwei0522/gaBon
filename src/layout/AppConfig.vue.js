/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useLayout } from '@/layout/composables/layout';
import { $t, updatePreset, updateSurfacePalette } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';
import { computed, ref, watch } from 'vue';
const { layoutState, layoutConfig, isDarkTheme } = useLayout();
const __VLS_props = defineProps({
    location: {
        type: String,
        default: 'app',
    },
    simple: {
        type: Boolean,
        default: false,
    },
});
const presets = {
    Aura,
    Lara,
    Nora,
};
const presetOptions = ref(Object.keys(presets));
const preset = ref(layoutConfig.preset);
const themeOptions = ref([
    { name: 'Light', value: false },
    { name: 'Dark', value: true },
]);
const menuThemeOptions = computed(() => {
    if (isDarkTheme.value) {
        return [
            { name: 'Dark', value: 'dark' },
            { name: 'Primary', value: 'primary' },
        ];
    }
    else {
        return [
            { name: 'Light', value: 'light' },
            { name: 'Dark', value: 'dark' },
            { name: 'Primary', value: 'primary' },
        ];
    }
});
const cardStyleOptions = ref([
    { name: 'Transparent', value: 'transparent' },
    { name: 'Filled', value: 'filled' },
]);
const darkTheme = ref(layoutConfig.darkTheme);
const menuMode = ref(layoutConfig.menuMode);
const menuTheme = computed(() => layoutConfig.menuTheme);
const cardStyle = computed(() => layoutConfig.cardStyle);
const primaryColors = ref([
    { name: 'noir', palette: {} },
    {
        name: 'emerald',
        palette: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
        },
    },
    {
        name: 'green',
        palette: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
        },
    },
    {
        name: 'lime',
        palette: {
            50: '#f7fee7',
            100: '#ecfccb',
            200: '#d9f99d',
            300: '#bef264',
            400: '#a3e635',
            500: '#84cc16',
            600: '#65a30d',
            700: '#4d7c0f',
            800: '#3f6212',
            900: '#365314',
            950: '#1a2e05',
        },
    },
    {
        name: 'orange',
        palette: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
        },
    },
    {
        name: 'amber',
        palette: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
        },
    },
    {
        name: 'yellow',
        palette: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
        },
    },
    {
        name: 'teal',
        palette: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
            950: '#042f2e',
        },
    },
    {
        name: 'cyan',
        palette: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            950: '#083344',
        },
    },
    {
        name: 'sky',
        palette: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
        },
    },
    {
        name: 'blue',
        palette: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
        },
    },
    {
        name: 'indigo',
        palette: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
        },
    },
    {
        name: 'violet',
        palette: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
        },
    },
    {
        name: 'purple',
        palette: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
            950: '#3b0764',
        },
    },
    {
        name: 'fuchsia',
        palette: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
            950: '#4a044e',
        },
    },
    {
        name: 'pink',
        palette: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843',
            950: '#500724',
        },
    },
    {
        name: 'rose',
        palette: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239',
            900: '#881337',
            950: '#4c0519',
        },
    },
]);
const surfaces = ref([
    {
        name: 'slate',
        palette: {
            0: '#ffffff',
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
        },
    },
    {
        name: 'gray',
        palette: {
            0: '#ffffff',
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#030712',
        },
    },
    {
        name: 'zinc',
        palette: {
            0: '#ffffff',
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#09090b',
        },
    },
    {
        name: 'neutral',
        palette: {
            0: '#ffffff',
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
        },
    },
    {
        name: 'stone',
        palette: {
            0: '#ffffff',
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09',
        },
    },
    {
        name: 'soho',
        palette: {
            0: '#ffffff',
            50: '#f4f4f4',
            100: '#e8e9e9',
            200: '#d2d2d4',
            300: '#bbbcbe',
            400: '#a5a5a9',
            500: '#8e8f93',
            600: '#77787d',
            700: '#616268',
            800: '#4a4b52',
            900: '#34343d',
            950: '#1d1e27',
        },
    },
    {
        name: 'viva',
        palette: {
            0: '#ffffff',
            50: '#f3f3f3',
            100: '#e7e7e8',
            200: '#cfd0d0',
            300: '#b7b8b9',
            400: '#9fa1a1',
            500: '#87898a',
            600: '#6e7173',
            700: '#565a5b',
            800: '#3e4244',
            900: '#262b2c',
            950: '#0e1315',
        },
    },
    {
        name: 'ocean',
        palette: {
            0: '#ffffff',
            50: '#fbfcfc',
            100: '#F7F9F8',
            200: '#EFF3F2',
            300: '#DADEDD',
            400: '#B1B7B6',
            500: '#828787',
            600: '#5F7274',
            700: '#415B61',
            800: '#29444E',
            900: '#183240',
            950: '#0c1920',
        },
    },
]);
function executeDarkModeToggle() {
    layoutConfig.darkTheme = !layoutConfig.darkTheme;
    document.documentElement.classList.toggle('app-dark');
}
function handleToggleDarkMode() {
    if (!document.startViewTransition) {
        executeDarkModeToggle();
        return;
    }
    document.startViewTransition(() => {
        executeDarkModeToggle();
    });
}
function updateColors(type, color) {
    if (type === 'primary') {
        layoutConfig.primary = color.name;
    }
    else if (type === 'surface') {
        layoutConfig.surface = color.name;
    }
    applyTheme(type, color);
}
function applyTheme(type, color) {
    if (type === 'primary') {
        updatePreset(getPresetExt());
    }
    else if (type === 'surface') {
        updateSurfacePalette(color.palette);
    }
}
function onPresetChange() {
    layoutConfig.preset = preset.value;
    const presetValue = presets[preset.value];
    const surfacePalette = surfaces.value.find((s) => s.name === layoutConfig.surface)?.palette;
    $t().preset(presetValue).preset(getPresetExt()).surfacePalette(surfacePalette).use({ useDefaultOptions: true });
}
function onMenuThemeChange(event) {
    layoutConfig.menuTheme = event.value;
}
function onCardStyleChange(event) {
    layoutConfig.cardStyle = event.value;
}
const handleSetMenuMode = (mode) => {
    layoutConfig.menuMode = mode;
    if (mode === 'static') {
        layoutState.staticMenuDesktopInactive = false;
    }
};
function getPresetExt() {
    const color = primaryColors.value.find((c) => c.name === layoutConfig.primary);
    if (color.name === 'noir') {
        return {
            semantic: {
                primary: {
                    50: '{surface.50}',
                    100: '{surface.100}',
                    200: '{surface.200}',
                    300: '{surface.300}',
                    400: '{surface.400}',
                    500: '{surface.500}',
                    600: '{surface.600}',
                    700: '{surface.700}',
                    800: '{surface.800}',
                    900: '{surface.900}',
                    950: '{surface.950}',
                },
                colorScheme: {
                    light: {
                        primary: {
                            color: '{primary.950}',
                            contrastColor: '#ffffff',
                            hoverColor: '{primary.800}',
                            activeColor: '{primary.700}',
                        },
                        highlight: {
                            background: '{primary.950}',
                            focusBackground: '{primary.700}',
                            color: '#ffffff',
                            focusColor: '#ffffff',
                        },
                    },
                    dark: {
                        primary: {
                            color: '{primary.50}',
                            contrastColor: '{primary.950}',
                            hoverColor: '{primary.200}',
                            activeColor: '{primary.300}',
                        },
                        highlight: {
                            background: '{primary.50}',
                            focusBackground: '{primary.300}',
                            color: '{primary.950}',
                            focusColor: '{primary.950}',
                        },
                    },
                },
            },
        };
    }
    else {
        return {
            semantic: {
                primary: color.palette,
                colorScheme: {
                    light: {
                        primary: {
                            color: '{primary.500}',
                            contrastColor: '#ffffff',
                            hoverColor: '{primary.600}',
                            activeColor: '{primary.700}',
                        },
                        highlight: {
                            background: '{primary.50}',
                            focusBackground: '{primary.100}',
                            color: '{primary.700}',
                            focusColor: '{primary.800}',
                        },
                    },
                    dark: {
                        primary: {
                            color: '{primary.400}',
                            contrastColor: '{surface.900}',
                            hoverColor: '{primary.300}',
                            activeColor: '{primary.200}',
                        },
                        highlight: {
                            background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                            focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                            color: 'rgba(255,255,255,.87)',
                            focusColor: 'rgba(255,255,255,.87)',
                        },
                    },
                },
            },
        };
    }
}
watch(isDarkTheme, (newValue) => {
    if (newValue && menuTheme.value === 'light') {
        layoutConfig.menuTheme = 'dark';
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.Drawer;
/** @type {[typeof __VLS_components.Drawer, typeof __VLS_components.Drawer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    visible: (__VLS_ctx.layoutState.configSidebarVisible),
    position: "right",
    header: "Settings",
    ...{ class: "layout-config-sidebar w-80" },
    pt: ({
        pcCloseButton: { root: 'ml-auto' },
    }),
}));
const __VLS_2 = __VLS_1({
    visible: (__VLS_ctx.layoutState.configSidebarVisible),
    position: "right",
    header: "Settings",
    ...{ class: "layout-config-sidebar w-80" },
    pt: ({
        pcCloseButton: { root: 'ml-auto' },
    }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-lg text-muted-color font-semibold" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pt-2 flex gap-2 flex-wrap" },
});
for (const [primaryColor] of __VLS_getVForSourceType((__VLS_ctx.primaryColors))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.updateColors('primary', primaryColor);
            } },
        key: (primaryColor.name),
        type: "button",
        ...{ class: "w-6 h-6 cursor-pointer hover:shadow-lg rounded duration-150 flex items-center justify-center" },
        ...{ style: ({
                backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette['500']}`,
            }) },
    });
    if (primaryColor.name === __VLS_ctx.layoutConfig.primary) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
            ...{ class: "pi pi-check text-white" },
        });
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-lg text-muted-color font-semibold" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pt-2 flex gap-2 flex-wrap" },
});
for (const [surface] of __VLS_getVForSourceType((__VLS_ctx.surfaces))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.updateColors('surface', surface);
            } },
        key: (surface.name),
        type: "button",
        ...{ class: "w-6 h-6 cursor-pointer hover:shadow-lg rounded duration-150 flex items-center justify-center" },
        ...{ style: ({ backgroundColor: `${surface.palette['500']}` }) },
    });
    if (__VLS_ctx.layoutConfig.surface
        ? __VLS_ctx.layoutConfig.surface === surface.name
        : __VLS_ctx.isDarkTheme
            ? surface.name === 'zinc'
            : surface.name === 'slate') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
            ...{ class: "pi pi-check text-white" },
        });
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-lg text-muted-color font-semibold" },
});
const __VLS_5 = {}.SelectButton;
/** @type {[typeof __VLS_components.SelectButton, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.preset),
    options: (__VLS_ctx.presetOptions),
    allowEmpty: (false),
}));
const __VLS_7 = __VLS_6({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.preset),
    options: (__VLS_ctx.presetOptions),
    allowEmpty: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_9;
let __VLS_10;
let __VLS_11;
const __VLS_12 = {
    onChange: (__VLS_ctx.onPresetChange)
};
var __VLS_8;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-lg text-muted-color font-semibold" },
});
const __VLS_13 = {}.SelectButton;
/** @type {[typeof __VLS_components.SelectButton, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.darkTheme),
    options: (__VLS_ctx.themeOptions),
    optionLabel: "name",
    optionValue: "value",
    allowEmpty: (false),
}));
const __VLS_15 = __VLS_14({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.darkTheme),
    options: (__VLS_ctx.themeOptions),
    optionLabel: "name",
    optionValue: "value",
    allowEmpty: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onChange: (__VLS_ctx.handleToggleDarkMode)
};
var __VLS_16;
if (!__VLS_ctx.simple && __VLS_ctx.location === 'app') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-lg text-muted-color font-semibold" },
    });
    const __VLS_21 = {}.SelectButton;
    /** @type {[typeof __VLS_components.SelectButton, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        ...{ 'onChange': {} },
        modelValue: (__VLS_ctx.cardStyle),
        options: (__VLS_ctx.cardStyleOptions),
        allowEmpty: (false),
        optionLabel: "name",
        optionValue: "value",
    }));
    const __VLS_23 = __VLS_22({
        ...{ 'onChange': {} },
        modelValue: (__VLS_ctx.cardStyle),
        options: (__VLS_ctx.cardStyleOptions),
        allowEmpty: (false),
        optionLabel: "name",
        optionValue: "value",
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    let __VLS_25;
    let __VLS_26;
    let __VLS_27;
    const __VLS_28 = {
        onChange: (__VLS_ctx.onCardStyleChange)
    };
    var __VLS_24;
}
if (!__VLS_ctx.simple && __VLS_ctx.location === 'app') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-lg text-muted-color font-semibold" },
    });
    const __VLS_29 = {}.SelectButton;
    /** @type {[typeof __VLS_components.SelectButton, ]} */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
        ...{ 'onChange': {} },
        modelValue: (__VLS_ctx.menuTheme),
        options: (__VLS_ctx.menuThemeOptions),
        allowEmpty: (false),
        optionLabel: "name",
        optionValue: "value",
    }));
    const __VLS_31 = __VLS_30({
        ...{ 'onChange': {} },
        modelValue: (__VLS_ctx.menuTheme),
        options: (__VLS_ctx.menuThemeOptions),
        allowEmpty: (false),
        optionLabel: "name",
        optionValue: "value",
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    let __VLS_33;
    let __VLS_34;
    let __VLS_35;
    const __VLS_36 = {
        onChange: (__VLS_ctx.onMenuThemeChange)
    };
    var __VLS_32;
}
if (!__VLS_ctx.simple && __VLS_ctx.location === 'app') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-lg text-muted-color font-semibold" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-wrap flex-col gap-3" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_37 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "static",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "static",
    }));
    const __VLS_39 = __VLS_38({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "static",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "static",
    }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_41;
    let __VLS_42;
    let __VLS_43;
    const __VLS_44 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_40;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "static",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_45 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "overlay",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "overlay",
    }));
    const __VLS_47 = __VLS_46({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "overlay",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "overlay",
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    let __VLS_49;
    let __VLS_50;
    let __VLS_51;
    const __VLS_52 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_48;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "overlay",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_53 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "slim",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "slim",
    }));
    const __VLS_55 = __VLS_54({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "slim",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "slim",
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    let __VLS_57;
    let __VLS_58;
    let __VLS_59;
    const __VLS_60 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_56;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "slim",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_61 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "compact",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "compact",
    }));
    const __VLS_63 = __VLS_62({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "compact",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "compact",
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    let __VLS_65;
    let __VLS_66;
    let __VLS_67;
    const __VLS_68 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_64;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "compact",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_69 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "reveal",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "reveal",
    }));
    const __VLS_71 = __VLS_70({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "reveal",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "reveal",
    }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    let __VLS_73;
    let __VLS_74;
    let __VLS_75;
    const __VLS_76 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_72;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "reveal",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_77 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "drawer",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "drawer",
    }));
    const __VLS_79 = __VLS_78({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "drawer",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "drawer",
    }, ...__VLS_functionalComponentArgsRest(__VLS_78));
    let __VLS_81;
    let __VLS_82;
    let __VLS_83;
    const __VLS_84 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_80;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "drawer",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 w-6/12" },
    });
    const __VLS_85 = {}.RadioButton;
    /** @type {[typeof __VLS_components.RadioButton, ]} */ ;
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "horizontal",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "horizontal",
    }));
    const __VLS_87 = __VLS_86({
        ...{ 'onUpdate:modelValue': {} },
        name: "menuMode",
        value: "horizontal",
        modelValue: (__VLS_ctx.menuMode),
        inputId: "horizontal",
    }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    let __VLS_89;
    let __VLS_90;
    let __VLS_91;
    const __VLS_92 = {
        'onUpdate:modelValue': (__VLS_ctx.handleSetMenuMode)
    };
    var __VLS_88;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: "horizontal",
    });
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['layout-config-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['w-80']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-check']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-check']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-color']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6/12']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            layoutState: layoutState,
            layoutConfig: layoutConfig,
            isDarkTheme: isDarkTheme,
            presetOptions: presetOptions,
            preset: preset,
            themeOptions: themeOptions,
            menuThemeOptions: menuThemeOptions,
            cardStyleOptions: cardStyleOptions,
            darkTheme: darkTheme,
            menuMode: menuMode,
            menuTheme: menuTheme,
            cardStyle: cardStyle,
            primaryColors: primaryColors,
            surfaces: surfaces,
            handleToggleDarkMode: handleToggleDarkMode,
            updateColors: updateColors,
            onPresetChange: onPresetChange,
            onMenuThemeChange: onMenuThemeChange,
            onCardStyleChange: onCardStyleChange,
            handleSetMenuMode: handleSetMenuMode,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppConfig.vue.js.map