import { useState } from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { TextArea } from '../../../components/TextArea'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
import { useCreateTask } from '../../../hooks/useTasks'

interface TaskFormProps {
  dayId: string
  onClose: () => void
}

export const TaskForm = ({ dayId, onClose }: TaskFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    sets: '',
    reps: '',
    weight: '',
    duration: '',
    notes: '',
  })

  const { mutate: createTask, isPending } = useCreateTask()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.title) {
      createTask(
        {
          ...formData,
          dayId,
          sets: formData.sets ? parseInt(formData.sets) : undefined,
          reps: formData.reps ? parseInt(formData.reps) : undefined,
        },
        { onSuccess: onClose }
      )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Task Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Bench Press"
            required
          />

          <TextArea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Task details and instructions"
            rows={3}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Sets"
              type="number"
              value={formData.sets}
              onChange={(e) => setFormData({ ...formData, sets: e.target.value })}
              placeholder="3"
            />
            <Input
              label="Reps"
              type="number"
              value={formData.reps}
              onChange={(e) => setFormData({ ...formData, reps: e.target.value })}
              placeholder="10"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Weight"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="e.g., 50kg"
            />
            <Input
              label="Duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="e.g., 30 min"
            />
          </div>

          <TextArea
            label="Notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Additional notes for members"
            rows={2}
          />

          <div className="flex gap-2 pt-4">
            <Button type="submit" isLoading={isPending}>
              Add Task
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
