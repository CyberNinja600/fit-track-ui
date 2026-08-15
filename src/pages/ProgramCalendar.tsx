import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card'
import { Badge } from '../components/Badge'
import { Calendar, Plus } from 'lucide-react'
import { findStaticProgram, staticTasks } from '../data/staticFitTrackData'

const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export const ProgramCalendar = () => {
  const { id = '' } = useParams()
  const program = findStaticProgram(id)

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{program.name}</h1>
            <p className="text-gray-600 mt-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Static week preview
            </p>
          </div>
          <Button onClick={() => console.log('Static add task clicked')} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Task
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            {days.map((day, index) => (
              <Card key={day}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{day}</CardTitle>
                    <Badge variant={index === 1 ? 'warning' : 'primary'}>{index === 1 ? 'Rest' : `Day ${index + 1}`}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {index === 1 ? (
                    <p className="text-sm text-gray-500 py-4">Recovery, mobility, and steps only.</p>
                  ) : (
                    staticTasks.slice(0, index === 0 ? 3 : 1).map((task) => (
                      <div key={`${day}-${task.id}`} className="rounded-lg border border-gray-200 p-3">
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                          {task.sets && <span>{task.sets} sets</span>}
                          {task.reps && <span>{task.reps} reps</span>}
                          {task.duration && <span>{task.duration}</span>}
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

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
              <div>
                <p className="text-sm text-gray-600">Source</p>
                <p className="text-sm font-medium">Static local preview</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
