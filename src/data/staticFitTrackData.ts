import type { Program, Task, User } from '../types'

export const staticTrainer: User = {
  id: 'trainer-001',
  email: 'coach@biokernel.dev',
  name: 'Avery Stone',
  role: 'trainer',
  createdAt: '2026-01-01T00:00:00.000Z',
}

export const staticMembers: User[] = [
  {
    id: 'member-402',
    email: 'marcus@example.com',
    name: 'Marcus V.',
    role: 'member',
    createdAt: '2026-01-08T00:00:00.000Z',
  },
  {
    id: 'member-119',
    email: 'sarah@example.com',
    name: 'Sarah K.',
    role: 'member',
    createdAt: '2026-01-11T00:00:00.000Z',
  },
  {
    id: 'member-982',
    email: 'liam@example.com',
    name: 'Liam W.',
    role: 'member',
    createdAt: '2026-01-20T00:00:00.000Z',
  },
]

export const staticPrograms: Program[] = [
  {
    id: 'bk-772',
    name: 'Hypertrophy Phase 1',
    description: 'A four-week accumulation block focused on upper/lower hypertrophy, high-quality volume, and recovery rhythm.',
    trainerId: staticTrainer.id,
    trainer: staticTrainer,
    weeks: 4,
    members: staticMembers,
    createdAt: '2026-02-01T00:00:00.000Z',
    updatedAt: '2026-02-14T00:00:00.000Z',
  },
  {
    id: 'bk-884',
    name: 'Metabolic Reset B',
    description: 'Conditioning and nutrition reset protocol with three progressive weekly density targets.',
    trainerId: staticTrainer.id,
    trainer: staticTrainer,
    weeks: 3,
    members: staticMembers.slice(0, 2),
    createdAt: '2026-03-05T00:00:00.000Z',
    updatedAt: '2026-03-12T00:00:00.000Z',
  },
  {
    id: 'bk-991',
    name: 'Endurance Base V2',
    description: 'Aerobic base building plan with easy-zone volume, mobility work, and weekly benchmark sessions.',
    trainerId: staticTrainer.id,
    trainer: staticTrainer,
    weeks: 6,
    members: staticMembers.slice(2),
    createdAt: '2026-04-01T00:00:00.000Z',
    updatedAt: '2026-04-16T00:00:00.000Z',
  },
]

export const staticTasks: Task[] = [
  {
    id: 'task-lower-strength',
    dayId: 'day-01',
    title: 'Max Strength Lower',
    description: 'Back squat, RDL, split squat, hamstring curl, calves, and trunk bracing.',
    sets: 5,
    reps: 5,
    weight: 'RPE 8',
    duration: '65 min',
    notes: 'Keep last set fast enough to avoid technical breakdown.',
    completedBy: ['member-402'],
    createdAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
  },
  {
    id: 'task-upper-hypertrophy',
    dayId: 'day-01',
    title: 'Hypertrophy Upper',
    description: 'Incline press, row, pulldown, lateral raise, curls, triceps, and cuff work.',
    sets: 4,
    reps: 12,
    duration: '75 min',
    notes: 'Use controlled eccentric tempo on accessories.',
    completedBy: ['member-402', 'member-119'],
    createdAt: '2026-05-02T00:00:00.000Z',
    updatedAt: '2026-05-02T00:00:00.000Z',
  },
  {
    id: 'task-refeed',
    dayId: 'day-01',
    title: 'Re-feed Protocol',
    description: 'High-carb nutrition day for glycogen replenishment and training readiness.',
    duration: 'All day',
    notes: 'Target 3200 kcal with most carbs around training.',
    completedBy: [],
    createdAt: '2026-05-03T00:00:00.000Z',
    updatedAt: '2026-05-03T00:00:00.000Z',
  },
]

export const findStaticProgram = (id: string) => staticPrograms.find((program) => program.id === id) || staticPrograms[0]
