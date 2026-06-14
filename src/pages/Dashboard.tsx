import { useAuthStore } from '../store/authStore'
import { Layout } from '../components/Layout'
import { ProgramsOverview } from '../features/dashboard/components/ProgramsOverview'
import { DayTasksWidget } from '../features/dashboard/components/DayTasksWidget'
import { usePrograms } from '../hooks/usePrograms'
import { CardSkeleton } from '../components/Skeleton'
import type { Task } from '../types'

export const Dashboard = () => {
  const { user } = useAuthStore()
  const { data: programs, isLoading } = usePrograms()

  const todayTasks: Task[] = [] // In a real app, fetch today's tasks from API

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome, {user?.name}! 👋</h1>
          <p className="text-lg text-gray-600 mt-2">You are logged in as a <span className="font-semibold capitalize">{user?.role}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {isLoading ? <CardSkeleton /> : <DayTasksWidget tasks={todayTasks} completedCount={0} />}
          </div>
          <div>
            {isLoading ? <CardSkeleton /> : <ProgramsOverview programs={programs || []} />}
          </div>
        </div>

        {user?.role === 'trainer' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900">
              As a trainer, you can create programs and manage member progresss.
              <a href="/programs/create" className="font-semibold ml-2 underline">Create your first program</a>
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
