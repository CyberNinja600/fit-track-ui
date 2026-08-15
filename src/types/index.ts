export type UserRole = 'member' | 'trainer'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  createdAt: string
}

export interface Program {
  id: string
  name: string
  description: string
  trainerId: string
  trainer?: User
  weeks: number
  members: User[]
  createdAt: string
  updatedAt: string
}

export interface Week {
  id: string
  programId: string
  weekNumber: number
  startDate: string
  endDate: string
  days: Day[]
}

export interface Day {
  id: string
  weekId: string
  dayOfWeek: number // 0 = Saturday, 5 = Friday
  date: string
  tasks: Task[]
}

export interface Task {
  id: string
  dayId: string
  title: string
  description: string
  sets?: number
  reps?: number
  weight?: string
  duration?: string
  notes?: string
  completedBy: string[] // Array of member IDs who completed
  createdAt: string
  updatedAt: string
}

export interface AuthToken {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  status: number
}
