export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROGRAMS: '/programs',
  PROGRAM_DETAIL: '/programs/:id',
  CREATE_PROGRAM: '/programs/create',
  EDIT_PROGRAM: '/programs/:id/edit',
  PROGRAM_CALENDAR: '/programs/:id/calendar',
  PROFILE: '/profile',
  NOT_FOUND: '*',
}

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',

  // Programs
  PROGRAMS: '/programs',
  PROGRAM_DETAIL: (id: string) => `/programs/${id}`,
  JOIN_PROGRAM: (id: string) => `/programs/${id}/join`,
  LEAVE_PROGRAM: (id: string) => `/programs/${id}/leave`,
  PROGRAM_MEMBERS: (id: string) => `/programs/${id}/members`,

  // Calendar
  WEEKS: (programId: string) => `/programs/${programId}/weeks`,
  WEEK_DETAIL: (programId: string, weekId: string) => `/programs/${programId}/weeks/${weekId}`,
  DAYS: (programId: string, weekId: string) => `/programs/${programId}/weeks/${weekId}/days`,
  DAY_DETAIL: (programId: string, weekId: string, dayId: string) => `/programs/${programId}/weeks/${weekId}/days/${dayId}`,

  // Tasks
  TASKS: (dayId: string) => `/tasks?dayId=${dayId}`,
  TASK_DETAIL: (id: string) => `/tasks/${id}`,
  TOGGLE_TASK: (id: string) => `/tasks/${id}/complete`,

  // Dashboard
  DASHBOARD_DATA: '/dashboard',
}

export const DAYS_OF_WEEK = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme',
}

export const API_CONFIG = {
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
}
