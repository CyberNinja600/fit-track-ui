import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authApi } from '../api/auth'
import { useAuthStore } from '../store/authStore'
import { STORAGE_KEYS } from '../constants'

export const useLogin = () => {
  const queryClient = useQueryClient()
  const { setUser, setError } = useAuthStore()

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const response = await authApi.login(email, password)
      return response.data
    },
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken)
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken)
      setUser(data.user)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Login failed')
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()
  const { setUser, setError } = useAuthStore()

  return useMutation({
    mutationFn: async ({
      email,
      password,
      name,
      role,
    }: {
      email: string
      password: string
      name: string
      role: 'member' | 'trainer'
    }) => {
      const response = await authApi.register(email, password, name, role)
      return response.data
    },
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken)
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken)
      setUser(data.user)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Registration failed')
    },
  })
}

export const useMe = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await authApi.getMe()
      return response.data
    },
    retry: 1,
    enabled: !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const { logout: logoutStore } = useAuthStore()

  return useMutation({
    mutationFn: async () => {
      return await authApi.logout()
    },
    onSuccess: () => {
      logoutStore()
      queryClient.invalidateQueries()
    },
  })
}
