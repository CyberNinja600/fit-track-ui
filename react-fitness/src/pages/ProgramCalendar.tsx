import { useParams, useSearchParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useProgram } from '../hooks/usePrograms'
import { useTasks } from '../hooks/useTasks'
import { useAuthStore } from '../store/authStore'
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card'
import { TaskItem } from '../features/tasks/components/TaskItem'
import { TaskForm } from '../features/tasks/components/TaskForm'
import { Button } from '../components/Button'
import { CardSkeleton } from '../components/Skeleton'
import { useState } from 'react'
import { Plus, Calendar } from 'lucide-react'
import { formatDateLong } from '../lib/dateUtils'

export const ProgramCalendar = () => {
  const { id = '' } = useParams()
  const [searchParams] = useSearchParams()
  const [showAddTask, setShowAddTask] = useState(false)
  
  const dayId = searchParams.get('dayId') || ''
  const { user } = useAuthStore()
  const { data: program, isLoading: isProgramLoading } = useProgram(id)
  const { data: tasks = [], isLoading: isTasksLoading } = useTasks(dayId)

  const isTrainer = program?.trainerId === user?.id

  if (isProgramLoading) return <Layout><CardSkeleton /></Layout>
  if (!program) return <Layout><div>Program not found</div></Layout>

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{program.name}</h1>
          <p className="text-gray-600 mt-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {dayId && formatDateLong(new Date().toISOString())}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Tasks</CardTitle>
                  {isTrainer && (
                    <Button
                      size="sm"
                      onClick={() => setShowAddTask(!showAddTask)}
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Task
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {showAddTask && dayId && (
                  <TaskForm dayId={dayId} onClose={() => setShowAddTask(false)} />
                )}
                {isTasksLoading ? (
                  <CardSkeleton />
                ) : tasks.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No tasks for this day</p>
                ) : (
                  tasks.map((task) => (
                    <TaskItem key={task.id} task={task} isTrainer={isTrainer} />
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Program Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Weeks</p>
                  <p className="text-2xl font-bold">{program.weeks}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Members</p>
                  <p className="text-2xl font-bold">{program.members?.length || 0}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
