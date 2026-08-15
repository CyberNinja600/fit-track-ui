import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { tasksApi } from '../api/tasks'
import { useTaskStore } from '../store/taskStore'

export const useTasks = (dayId: string | undefined) => {
  const { setTasks, setLoading, setError } = useTaskStore()

  return useQuery({
    queryKey: ['tasks', dayId],
    queryFn: async () => {
      if (!dayId) return []
      setLoading(true)
      try {
        const response = await tasksApi.getByDay(dayId)
        setTasks(response.data)
        setLoading(false)
        return response.data
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to fetch tasks')
        setLoading(false)
        throw error
      }
    },
    enabled: !!dayId,
  })
}

export const useTask = (id: string) => {
  return useQuery({
    queryKey: ['task', id],
    queryFn: async () => {
      const response = await tasksApi.getById(id)
      return response.data
    },
    enabled: !!id,
  })
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { addTask, setError } = useTaskStore()

  return useMutation({
    mutationFn: async (task: any) => {
      const response = await tasksApi.create(task)
      return response.data
    },
    onSuccess: (data) => {
      addTask(data)
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to create task')
    },
  })
}

export const useUpdateTask = (id: string) => {
  const queryClient = useQueryClient()
  const { updateTask, setError } = useTaskStore()

  return useMutation({
    mutationFn: async (task: any) => {
      const response = await tasksApi.update(id, task)
      return response.data
    },
    onSuccess: (data) => {
      updateTask(data)
      queryClient.invalidateQueries({ queryKey: ['task', id] })
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to update task')
    },
  })
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const { removeTask, setError } = useTaskStore()

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await tasksApi.delete(id)
      return response.data
    },
    onSuccess: (_, id) => {
      removeTask(id)
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to delete task')
    },
  })
}

export const useToggleTaskCompletion = () => {
  const queryClient = useQueryClient()
  const { toggleTaskCompletion, setError } = useTaskStore()

  return useMutation({
    mutationFn: async ({ taskId, memberId }: { taskId: string; memberId: string }) => {
      const response = await tasksApi.toggleComplete(taskId, memberId)
      return response.data
    },
    onSuccess: (data) => {
      toggleTaskCompletion(data.id, data.completedBy[0])
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Failed to toggle task')
    },
  })
}
