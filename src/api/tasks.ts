import axiosInstance from './axiosInstance'
import type { Task, ApiResponse } from '../types'
import { API_ENDPOINTS } from '../constants'

export const tasksApi = {
  getByDay: async (dayId: string): Promise<ApiResponse<Task[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.TASKS(dayId))
    return response.data
  },

  getById: async (id: string): Promise<ApiResponse<Task>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.TASK_DETAIL(id))
    return response.data
  },

  create: async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completedBy'>): Promise<ApiResponse<Task>> => {
    const response = await axiosInstance.post('/tasks', task)
    return response.data
  },

  update: async (id: string, task: Partial<Task>): Promise<ApiResponse<Task>> => {
    const response = await axiosInstance.put(API_ENDPOINTS.TASK_DETAIL(id), task)
    return response.data
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    const response = await axiosInstance.delete(API_ENDPOINTS.TASK_DETAIL(id))
    return response.data
  },

  toggleComplete: async (id: string, memberId: string): Promise<ApiResponse<Task>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.TOGGLE_TASK(id), {
      memberId,
    })
    return response.data
  },
}
