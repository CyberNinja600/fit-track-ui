import axiosInstance from './axiosInstance'
import type { Program, ApiResponse } from '../types'
import { API_ENDPOINTS } from '../constants'

export const programsApi = {
  getAll: async (): Promise<ApiResponse<Program[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.PROGRAMS)
    return response.data
  },

  getById: async (id: string): Promise<ApiResponse<Program>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.PROGRAM_DETAIL(id))
    return response.data
  },

  create: async (program: Omit<Program, 'id' | 'createdAt' | 'updatedAt' | 'members'>): Promise<ApiResponse<Program>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.PROGRAMS, program)
    return response.data
  },

  update: async (id: string, program: Partial<Program>): Promise<ApiResponse<Program>> => {
    const response = await axiosInstance.put(API_ENDPOINTS.PROGRAM_DETAIL(id), program)
    return response.data
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    const response = await axiosInstance.delete(API_ENDPOINTS.PROGRAM_DETAIL(id))
    return response.data
  },

  join: async (id: string): Promise<ApiResponse<Program>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.JOIN_PROGRAM(id))
    return response.data
  },

  leave: async (id: string): Promise<ApiResponse<Program>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.LEAVE_PROGRAM(id))
    return response.data
  },

  getMembers: async (id: string): Promise<ApiResponse<any[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.PROGRAM_MEMBERS(id))
    return response.data
  },
}
