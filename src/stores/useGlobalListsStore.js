"use strict";
// import { defineStore } from 'pinia';
// import { ref } from 'vue';
// import { getCompanyLists, getCorporateLists } from '@/api/auth/util';
// export const useGlobalListsStore = defineStore('globalLists', () => {
//   const companyLists = ref<{ label: string; value: string; siteType: string }[]>([]);
//   const corporateLists = ref<{ label: string; value: string }[]>([]);
//   const corporateELists = ref<{ label: string; value: string }[]>([]);
//   const loadFromLocalStorage = () => {
//     const storedCompanyData = localStorage.getItem('companyLists');
//     if (storedCompanyData) {
//       companyLists.value = JSON.parse(storedCompanyData);
//     }
//     const storedCorporateData = localStorage.getItem('corporateLists');
//     if (storedCorporateData) {
//       corporateLists.value = JSON.parse(storedCorporateData);
//     }
//     const storedCorporateEData = localStorage.getItem('corporateELists');
//     if (storedCorporateEData) {
//       corporateELists.value = JSON.parse(storedCorporateEData);
//     }
//   };
//   const fetchGlobalLists = async () => {
//     try {
//       const companyListsResponse = await getCompanyLists();
//       if (companyListsResponse.data && Array.isArray(companyListsResponse.data)) {
//         companyLists.value = companyListsResponse.data.map(
//           (item: { siteId: string; siteName: string; siteType: string }) => ({
//             label: `${item.siteId}-${item.siteName}`,
//             value: item.siteId,
//             siteType: item.siteType,
//           })
//         );
//       }
//       const corporateListsResponse = await getCorporateLists('CORPORATE');
//       if (corporateListsResponse.data && Array.isArray(corporateListsResponse.data)) {
//         corporateLists.value = corporateListsResponse.data.map((item: { tag: string; content: string }) => ({
//           label: item.content,
//           value: item.tag,
//         }));
//       }
//       const corporateEListsResponse = await getCorporateLists('CORPORATE_E');
//       if (corporateEListsResponse.data && Array.isArray(corporateEListsResponse.data)) {
//         corporateELists.value = corporateEListsResponse.data.map((item: { tag: string; content: string }) => ({
//           label: item.content,
//           value: item.tag,
//         }));
//       }
//       localStorage.setItem('companyLists', JSON.stringify(companyLists.value));
//       localStorage.setItem('corporateLists', JSON.stringify(corporateLists.value));
//       localStorage.setItem('corporateELists', JSON.stringify(corporateELists.value));
//     } catch (error) {
//       console.error('獲取資料時出現錯誤:', error);
//     }
//   };
//   loadFromLocalStorage();
//   return { companyLists, corporateLists, corporateELists, fetchGlobalLists };
// });
//# sourceMappingURL=useGlobalListsStore.js.map