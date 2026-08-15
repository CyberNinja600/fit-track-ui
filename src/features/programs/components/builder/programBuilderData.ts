export type BuilderNavKey = 'dashboard' | 'programs' | 'calendar' | 'clients' | 'analytics' | 'support' | 'logout'
export type TopNavKey = 'builder' | 'library'
export type MobileNavKey = 'home' | 'build' | 'schedule' | 'profile'
export type TaskKind = 'workout' | 'nutrition' | 'rest'
export type SlotKind = 'task' | 'diet'

export interface BuilderTask {
  id: string
  kind: TaskKind
  title: string
  meta: string
  tags?: string[]
}

export interface BuilderDay {
  id: string
  label: string
  dayNumber: string
  faded?: boolean
  tasks: BuilderTask[]
  slots: SlotKind[]
}

export interface LibraryItem {
  id: string
  title: string
  icon: string
  color: 'primary' | 'tertiary'
  progress?: string
  meta?: string
}

export const sidebarItems: Array<{ key: BuilderNavKey; label: string; icon: string }> = [
  { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { key: 'programs', label: 'Programs', icon: 'architecture' },
  { key: 'calendar', label: 'Calendar', icon: 'calendar_month' },
  { key: 'clients', label: 'Clients', icon: 'group' },
  { key: 'analytics', label: 'Analytics', icon: 'monitoring' },
]

export const sidebarFooterItems: Array<{ key: BuilderNavKey; label: string; icon: string }> = [
  { key: 'support', label: 'Support', icon: 'help' },
  { key: 'logout', label: 'Logout', icon: 'logout' },
]

export const mobileNavItems: Array<{ key: MobileNavKey; label: string; icon: string }> = [
  { key: 'home', label: 'Home', icon: 'grid_view' },
  { key: 'build', label: 'Build', icon: 'add_box' },
  { key: 'schedule', label: 'Schedule', icon: 'event_note' },
  { key: 'profile', label: 'Profile', icon: 'account_circle' },
]

export const weeks = ['WEEK_01', 'WEEK_02', 'WEEK_03', 'WEEK_04']

export const builderDays: BuilderDay[] = [
  {
    id: 'saturday',
    label: 'Saturday',
    dayNumber: 'DAY_01',
    tasks: [
      {
        id: 'max-strength-lower',
        kind: 'workout',
        title: 'Max Strength Lower',
        meta: '8 EXERCISES | 65 MIN',
        tags: ['LEG_DAY', 'COMPOUND'],
      },
      {
        id: 'refeed-protocol',
        kind: 'nutrition',
        title: 'Re-feed Protocol',
        meta: '3200 KCAL | HIGH CARB',
      },
    ],
    slots: ['task', 'diet'],
  },
  {
    id: 'sunday',
    label: 'Sunday',
    dayNumber: 'DAY_02',
    faded: true,
    tasks: [
      {
        id: 'rest-day',
        kind: 'rest',
        title: 'REST_DAY_ACTIVE',
        meta: '',
      },
    ],
    slots: ['task'],
  },
  {
    id: 'monday',
    label: 'Monday',
    dayNumber: 'DAY_03',
    tasks: [
      {
        id: 'hypertrophy-upper',
        kind: 'workout',
        title: 'Hypertrophy Upper',
        meta: '12 EXERCISES | 75 MIN',
      },
    ],
    slots: ['task'],
  },
  {
    id: 'tuesday',
    label: 'Tuesday',
    dayNumber: 'DAY_04',
    tasks: [],
    slots: ['task'],
  },
  {
    id: 'wednesday',
    label: 'Wednesday',
    dayNumber: 'DAY_05',
    tasks: [],
    slots: ['task'],
  },
]

export const workoutLibrary: LibraryItem[] = [
  { id: 'push-day-a', title: 'Push Day A', icon: 'fitness_center', color: 'primary', progress: 'w-2/3' },
  { id: 'pull-day-b', title: 'Pull Day B', icon: 'fitness_center', color: 'primary', progress: 'w-1/2' },
]

export const nutritionLibrary: LibraryItem[] = [
  { id: 'keto-baseline', title: 'Keto Baseline', icon: 'nutrition', color: 'tertiary', meta: 'FAT: 75% | PRO: 20%' },
]
