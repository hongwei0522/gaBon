/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
import { postSuperLogin, postLogin, postSendOPT, postLoginOPT } from '@/api/auth/login';
import { useRouter } from 'vue-router';
const router = useRouter();
const loading = ref(false);
const loginSuperData = ref({ email: '', password: '' });
const loginData = ref({ business_id: '', email: '', password: '' });
const sendOTP = ref({ business_id: '', email: '' });
const loginOTP = ref({ business_id: '', email: '', otp: '' });
const handleSuperLogin = async () => {
    try {
        loading.value = true;
        const response = await postSuperLogin(loginSuperData.value.email, loginSuperData.value.password);
        console.log(response);
        if (response && response.data) {
            const { token } = response.data.data;
            console.log('login api triggered');
            localStorage.setItem('authorization', token);
            router.push('/');
        }
        else {
            console.error('沒有返回數據');
        }
    }
    finally {
        loading.value = false;
    }
};
const handleLogin = async () => {
    try {
        loading.value = true;
        const response = await postLogin(loginData.value.business_id, loginData.value.email, loginData.value.password);
        console.log(response);
        if (response && response.data) {
            const { authToken } = response.data;
            console.log('login api triggered');
            localStorage.setItem('authToken', authToken);
            // router.push('/');
        }
        else {
            console.error('沒有返回數據');
        }
    }
    finally {
        loading.value = false;
    }
};
const handlePostSendOPT = async () => {
    try {
        loading.value = true;
        const response = await postSendOPT(sendOTP.value.business_id, sendOTP.value.email);
        console.log(response);
        if (response && response.data) {
            const { authToken } = response.data;
            console.log('login api triggered');
            localStorage.setItem('authToken', authToken);
            // router.push('/');
        }
        else {
            console.error('沒有返回數據');
        }
    }
    finally {
        loading.value = false;
    }
};
const handleLoginOTP = async () => {
    try {
        loading.value = true;
        const response = await postLoginOPT(loginOTP.value.business_id, loginOTP.value.email, loginOTP.value.otp);
        console.log(response);
        if (response && response.data) {
            const { authToken } = response.data;
            console.log('login api triggered');
            localStorage.setItem('authToken', authToken);
            // router.push('/');
        }
        else {
            console.error('沒有返回數據');
        }
    }
    finally {
        loading.value = false;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-cover bg-center h-screen w-full relative" },
    ...{ style: {} },
});
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fixed inset-0 flex items-center justify-center bg-white/80 z-50" },
    });
    const __VLS_0 = {}.ProgressSpinner;
    /** @type {[typeof __VLS_components.ProgressSpinner, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute left-0 bottom-1/4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.handleSuperLogin) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "username",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_4 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    id: "username",
    modelValue: (__VLS_ctx.loginSuperData.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_6 = __VLS_5({
    id: "username",
    modelValue: (__VLS_ctx.loginSuperData.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "password",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_8 = {}.Password;
/** @type {[typeof __VLS_components.Password, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    id: "password",
    modelValue: (__VLS_ctx.loginSuperData.password),
    feedback: (false),
    toggleMask: true,
    inputClass: "w-full md:w-11rem h-2rem text-sm",
    ...{ class: "w-full md:w-11rem" },
}));
const __VLS_10 = __VLS_9({
    id: "password",
    modelValue: (__VLS_ctx.loginSuperData.password),
    feedback: (false),
    toggleMask: true,
    inputClass: "w-full md:w-11rem h-2rem text-sm",
    ...{ class: "w-full md:w-11rem" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-column md:flex-row gap-2 justify-content-center mt-4" },
});
const __VLS_12 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ 'onClick': {} },
    label: "登錄超級管理員",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}));
const __VLS_14 = __VLS_13({
    ...{ 'onClick': {} },
    label: "登錄超級管理員",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_16;
let __VLS_17;
let __VLS_18;
const __VLS_19 = {
    onClick: (__VLS_ctx.handleSuperLogin)
};
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute left-1/4 bottom-1/4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.handleLogin) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "business_id",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_20 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    id: "business_id",
    modelValue: (__VLS_ctx.loginData.business_id),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_22 = __VLS_21({
    id: "business_id",
    modelValue: (__VLS_ctx.loginData.business_id),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "username",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_24 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    id: "username",
    modelValue: (__VLS_ctx.loginData.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_26 = __VLS_25({
    id: "username",
    modelValue: (__VLS_ctx.loginData.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "password",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_28 = {}.Password;
/** @type {[typeof __VLS_components.Password, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    id: "password",
    modelValue: (__VLS_ctx.loginData.password),
    feedback: (false),
    toggleMask: true,
    inputClass: "w-full md:w-11rem h-2rem text-sm",
    ...{ class: "w-full md:w-11rem" },
}));
const __VLS_30 = __VLS_29({
    id: "password",
    modelValue: (__VLS_ctx.loginData.password),
    feedback: (false),
    toggleMask: true,
    inputClass: "w-full md:w-11rem h-2rem text-sm",
    ...{ class: "w-full md:w-11rem" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-column md:flex-row gap-2 justify-content-center mt-4" },
});
const __VLS_32 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ 'onClick': {} },
    label: "登錄系統",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}));
const __VLS_34 = __VLS_33({
    ...{ 'onClick': {} },
    label: "登錄系統",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (__VLS_ctx.handleLogin)
};
var __VLS_35;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute left-2/4 bottom-1/4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.handlePostSendOPT) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "business_id",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_40 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    id: "business_id",
    modelValue: (__VLS_ctx.sendOTP.business_id),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_42 = __VLS_41({
    id: "business_id",
    modelValue: (__VLS_ctx.sendOTP.business_id),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "username",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_44 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    id: "username",
    modelValue: (__VLS_ctx.sendOTP.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_46 = __VLS_45({
    id: "username",
    modelValue: (__VLS_ctx.sendOTP.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-column md:flex-row gap-2 justify-content-center mt-4" },
});
const __VLS_48 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    ...{ 'onClick': {} },
    label: "發送OTP",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}));
const __VLS_50 = __VLS_49({
    ...{ 'onClick': {} },
    label: "發送OTP",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
let __VLS_52;
let __VLS_53;
let __VLS_54;
const __VLS_55 = {
    onClick: (__VLS_ctx.handlePostSendOPT)
};
var __VLS_51;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute left-3/4 bottom-1/4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.handleLoginOTP) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "business_id",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_56 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    id: "business_id",
    modelValue: (__VLS_ctx.loginOTP.business_id),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_58 = __VLS_57({
    id: "business_id",
    modelValue: (__VLS_ctx.loginOTP.business_id),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "username",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_60 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    id: "username",
    modelValue: (__VLS_ctx.loginOTP.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}));
const __VLS_62 = __VLS_61({
    id: "username",
    modelValue: (__VLS_ctx.loginOTP.email),
    type: "text",
    ...{ class: "w-full md:w-11rem h-2rem text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col md:flex-row items-start md:items-center gap-2 mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "password",
    ...{ class: "text-white text-sm w-20" },
});
const __VLS_64 = {}.Password;
/** @type {[typeof __VLS_components.Password, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    id: "password",
    modelValue: (__VLS_ctx.loginOTP.otp),
    feedback: (false),
    toggleMask: true,
    inputClass: "w-full md:w-11rem h-2rem text-sm",
    ...{ class: "w-full md:w-11rem" },
}));
const __VLS_66 = __VLS_65({
    id: "password",
    modelValue: (__VLS_ctx.loginOTP.otp),
    feedback: (false),
    toggleMask: true,
    inputClass: "w-full md:w-11rem h-2rem text-sm",
    ...{ class: "w-full md:w-11rem" },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-column md:flex-row gap-2 justify-content-center mt-4" },
});
const __VLS_68 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    ...{ 'onClick': {} },
    label: "登錄系統",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}));
const __VLS_70 = __VLS_69({
    ...{ 'onClick': {} },
    label: "登錄系統",
    ...{ class: "w-full md:w-7rem h-2rem text-sm" },
    rounded: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
let __VLS_72;
let __VLS_73;
let __VLS_74;
const __VLS_75 = {
    onClick: (__VLS_ctx.handleLoginOTP)
};
var __VLS_71;
/** @type {__VLS_StyleScopedClasses['bg-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/80']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-7rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-7rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-2/4']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-7rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-11rem']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-7rem']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2rem']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            loading: loading,
            loginSuperData: loginSuperData,
            loginData: loginData,
            sendOTP: sendOTP,
            loginOTP: loginOTP,
            handleSuperLogin: handleSuperLogin,
            handleLogin: handleLogin,
            handlePostSendOPT: handlePostSendOPT,
            handleLoginOTP: handleLoginOTP,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=login.vue.js.map