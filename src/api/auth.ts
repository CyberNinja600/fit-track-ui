import axiosInstance from './axiosInstance'
import type { User, AuthToken, ApiResponse } from '../types'
import { API_ENDPOINTS } from '../constants'

export const authApi = {
  login: async (email: string, password: string): Promise<ApiResponse<AuthToken & { user: User }>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, {
      email,
      password,
    })
    return response.data
  },

  register: async (
    email: string,
    password: string,
    name: string,
    role: 'member' | 'trainer'
  ): Promise<ApiResponse<AuthToken & { user: User }>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.REGISTER, {
      email,
      password,
      name,
      role,
    })
    return response.data
  },

  logout: async (): Promise<ApiResponse<null>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.LOGOUT)
    return response.data
  },

  getMe: async (): Promise<ApiResponse<User>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.ME)
    return response.data
  },

  refreshToken: async (refreshToken: string): Promise<ApiResponse<AuthToken>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.REFRESH, {
      refreshToken,
    })
    return response.data
  },
}
