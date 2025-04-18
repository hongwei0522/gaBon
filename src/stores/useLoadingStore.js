import { defineStore } from 'pinia';
export const useLoadingStore = defineStore('loading', {
    state: () => ({
        isLoading: false,
    }),
    actions: {
        start() {
            this.isLoading = true;
        },
        stop() {
            this.isLoading = false;
        },
    },
});
//# sourceMappingURL=useLoadingStore.js.map