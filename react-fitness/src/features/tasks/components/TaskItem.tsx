import type { Task } from '../../../types'
import { Card, CardContent } from '../../../components/Card'
import { Checkbox } from '../../../components/Checkbox'
import { useAuthStore } from '../../../store/authStore'
import { useToggleTaskCompletion } from '../../../hooks/useTasks'

interface TaskItemProps {
  task: Task
  isTrainer?: boolean
}

export const TaskItem = ({ task, isTrainer }: TaskItemProps) => {
  const { user } = useAuthStore()
  const { mutate: toggleCompletion, isPending } = useToggleTaskCompletion()

  const isCompleted = user?.id ? task.completedBy.includes(user.id) : false

  const handleToggle = () => {
    if (user?.id) {
      toggleCompletion({ taskId: task.id, memberId: user.id })
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-3">
          {!isTrainer && (
            <Checkbox
              checked={isCompleted}
              onChange={handleToggle}
              disabled={isPending}
              className="mt-1"
            />
          )}
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{task.title}</h4>
            {task.description && <p className="text-sm text-gray-600 mt-1">{task.description}</p>}
            <div className="flex gap-4 mt-2 text-sm text-gray-500">
              {task.sets && <span>{task.sets} sets</span>}
              {task.reps && <span>{task.reps} reps</span>}
              {task.weight && <span>{task.weight}</span>}
              {task.duration && <span>{task.duration}</span>}
            </div>
            {task.notes && <p className="text-xs text-gray-500 mt-2 italic">{task.notes}</p>}
          </div>
          {isTrainer && (
            <div className="text-right">
              <p className="text-xs text-gray-600">
                {task.completedBy.length} completed
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
