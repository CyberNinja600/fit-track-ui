import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
import { Badge } from '../../../components/Badge'
import type { Task } from '../../../types'

interface DayTasksProps {
  tasks: Task[]
  completedCount: number
}

export const DayTasksWidget = ({ tasks, completedCount }: DayTasksProps) => {
  const completionPercentage = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Today's Tasks</span>
          <Badge variant="success">{completionPercentage}%</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-sm">No tasks for today</p>
          ) : (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">
                {completedCount} of {tasks.length} tasks completed
              </p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
