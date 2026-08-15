import axiosInstance from './axiosInstance'
import type { Week, ApiResponse } from '../types'
import { API_ENDPOINTS } from '../constants'

export const calendarApi = {
  getWeeks: async (programId: string): Promise<ApiResponse<Week[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.WEEKS(programId))
    return response.data
  },

  getWeek: async (programId: string, weekId: string): Promise<ApiResponse<Week>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.WEEK_DETAIL(programId, weekId))
    return response.data
  },

  createWeek: async (programId: string, week: Omit<Week, 'id' | 'days'>): Promise<ApiResponse<Week>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.WEEKS(programId), week)
    return response.data
  },

  getDays: async (programId: string, weekId: string): Promise<ApiResponse<any[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.DAYS(programId, weekId))
    return response.data
  },

  getDay: async (programId: string, weekId: string, dayId: string): Promise<ApiResponse<any>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.DAY_DETAIL(programId, weekId, dayId))
    return response.data
  },
}
