import { create } from 'zustand'
import type { Task } from '../types'

interface TaskState {
  tasks: Task[]
  isLoading: boolean
  error: string | null
  setTasks: (tasks: Task[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  addTask: (task: Task) => void
  updateTask: (task: Task) => void
  removeTask: (id: string) => void
  toggleTaskCompletion: (taskId: string, memberId: string) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  isLoading: false,
  error: null,

  setTasks: (tasks: Task[]) => {
    set({ tasks })
  },

  setLoading: (isLoading: boolean) => {
    set({ isLoading })
  },

  setError: (error: string | null) => {
    set({ error })
  },

  addTask: (task: Task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }))
  },

  updateTask: (task: Task) => {
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
    }))
  },

  removeTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    }))
  },

  toggleTaskCompletion: (taskId: string, memberId: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === taskId) {
          const isCompleted = task.completedBy.includes(memberId)
          return {
            ...task,
            completedBy: isCompleted ? task.completedBy.filter((id) => id !== memberId) : [...task.completedBy, memberId],
          }
        }
        return task
      }),
    }))
  },
}))
