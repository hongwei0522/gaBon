import { ref } from 'vue'
import axios from 'axios'

export function useVendors() {
    const vendors = ref([])
    const currentVendor = ref(null)
    const loading = ref(false)
    const error = ref(null)
    const validationErrors = ref({})

    const activeVendors = computed(() =>
        vendors.value.filter(vendor => vendor.status === 'Active')
)

const resetError = () => {
    error.value = null
    validationErrors.value = {}
}

const fetchVendors = async () => {
    loading.value = true
    resetError()

    try {
        const response = await axios.get('api/vendors')
        vendors.value = response.data
    } catch (err) {
        error.value = 'Failed to fetch vendors'
        console.error('Error:', err)
    } finally {
        loading.value = false
    }
}

const fetchVendorById = async (id) => {
    loading.value = true
    resetError()
    
    try {
      const response = await axios.get(`api/vendors/${id}`)
      currentVendor.value = response.data
      return response.data
    } catch (err) {
      error.value = 'Failed to fetch vendor details'
      console.error('Error:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const createVendor = async (vendorData) => {
    loading.value = true
    resetError()
    
    try {
      const response = await axios.post('api/vendors', vendorData)
      vendors.value.push(response.data)
      return response.data
    } catch (err) {
      if (err.response?.data?.errors) {
        validationErrors.value = err.response.data.errors
      } else {
        error.value = 'Failed to create vendor'
      }
      console.error('Error:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const updateVendor = async (id, vendorData) => {
    loading.value = true
    resetError()
    
    try {
      const response = await axios.put(`api/vendors/${id}`, vendorData)
      const index = vendors.value.findIndex(v => v.vendorId === id)
      if (index !== -1) {
        vendors.value[index] = response.data
      }
      return response.data
    } catch (err) {
      if (err.response?.data?.errors) {
        validationErrors.value = err.response.data.errors
      } else {
        error.value = 'Failed to update vendor'
      }
      console.error('Error:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const deleteVendor = async (id) => {
    loading.value = true
    resetError()
    
    try {
      await axios.delete(`api/vendors/${id}`)
      vendors.value = vendors.value.filter(v => v.vendorId !== id)
      return true
    } catch (err) {
      error.value = 'Failed to delete vendor'
      console.error('Error:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  const initializeNewVendor = () => ({
    vendorId: '',
    companyNameLocal: '',
    companyNameEnglish: '',
    alternativeNames: '',
    taxId: '',
    primaryContactName: '',
    primaryContactTitle: '',
    primaryContactId: '',
    primaryContactPhone: '',
    primaryContactAddress: '',
    primaryContactEmail: '',
    registrationAddress: '',
    registrationPhone: '',
    companyFax: '',
    companyEmail: '',
    bankCode: '',
    bankAccountNumber: '',
    bankAccountName: '',
    paymentTerms: '',
    systemId: '',
    status: '',
    notes: '',
    taxRegistrationType: '',
    paymentType: '',
    checkPaymentTitle: '',
    userGroup: '',
    priority: 0,
    mcode: ''
  })

  return {
    // State
    vendors,
    currentVendor,
    loading,
    error,
    validationErrors,
    
    // Computed
    activeVendors,
    
    // Methods
    fetchVendors,
    fetchVendorById,
    createVendor,
    updateVendor,
    deleteVendor,
    initializeNewVendor,
    resetError
  }
}