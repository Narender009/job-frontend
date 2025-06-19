import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 30000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || error.message || "An error occurred"
    return Promise.reject(new Error(message))
  },
)

export const jobsApi = {
  getJobs: (params) => api.get("/jobs", { params }),
  getJobById: (id) => api.get(`/jobs/${id}`),
  getJobStats: () => api.get("/jobs/stats"),
}

export const importsApi = {
  getImportHistory: (params) => api.get("/imports/history", { params }),
  getImportStats: () => api.get("/imports/stats"),
  triggerImport: (data) => api.post("/imports/trigger", data),
  triggerAllImports: () => api.post("/imports/trigger-all"),
}

export default api
