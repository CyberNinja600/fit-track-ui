import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { programsApi } from '../api/programs'
import { useProgramStore } from '../store/programStore'

export const usePrograms = () => {
  const { setPrograms, setLoading, setError } = useProgramStore()

  return useQuery({
    queryKey: ['programs'],
    queryFn: async () => {
      setLoading(true)
      try {
        const response = await programsApi.getAll()
        setPrograms(response.data)
        setLoading(false)
        return response.data
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to fetch programs')
        setLoading(false)
        throw error
      }
    },
  })
}

export const useProgram = (id: string) => {
  const { setSelectedProgram, setLoading, setError } = useProgramStore()

  return useQuery({
    queryKey: ['program', id],
    queryFn: async () => {
      setLoading(true)
      try {
        const response = await programsApi.getById(id)
        setSelectedProgram(response.data)
        setLoading(false)
        return response.data
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to fetch program')
        setLoading(false)
        throw error
      }
    },
    enabled: !!id,
  })
}

export const useCreateProgram = () => {
  const queryClient = useQueryClient()
  const { addProgram, setError } = useProgramStore()

  return useMutation({
    mutationFn: async (program: any) => {
      const response = await programsApi.create(program)
      return response.data
    },
    onSuccess: (data) => {
      addProgram(data)
      queryClient.invalidateQueries({ queryKey: ['programs'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to create program')
    },
  })
}

export const useUpdateProgram = (id: string) => {
  const queryClient = useQueryClient()
  const { updateProgram, setError } = useProgramStore()

  return useMutation({
    mutationFn: async (program: any) => {
      const response = await programsApi.update(id, program)
      return response.data
    },
    onSuccess: (data) => {
      updateProgram(data)
      queryClient.invalidateQueries({ queryKey: ['program', id] })
      queryClient.invalidateQueries({ queryKey: ['programs'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to update program')
    },
  })
}

export const useDeleteProgram = () => {
  const queryClient = useQueryClient()
  const { removeProgram, setError } = useProgramStore()

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await programsApi.delete(id)
      return response.data
    },
    onSuccess: (_, id) => {
      removeProgram(id)
      queryClient.invalidateQueries({ queryKey: ['programs'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to delete program')
    },
  })
}

export const useJoinProgram = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await programsApi.join(id)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['programs'] })
      queryClient.invalidateQueries({ queryKey: ['program'] })
    },
  })
}

export const useLeaveProgram = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await programsApi.leave(id)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['programs'] })
      queryClient.invalidateQueries({ queryKey: ['program'] })
    },
  })
}
