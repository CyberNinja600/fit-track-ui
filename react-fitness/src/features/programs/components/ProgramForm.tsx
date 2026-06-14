import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { TextArea } from '../../../components/TextArea'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
import { Alert } from '../../../components/Alert'
import { useCreateProgram, useUpdateProgram } from '../../../hooks/usePrograms'
import type { Program } from '../../../types'

interface ProgramFormProps {
  initialData?: Program
  isEditing?: boolean
}

export const ProgramForm = ({ initialData, isEditing }: ProgramFormProps) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    weeks: initialData?.weeks || 4,
  })
  const [errors, setErrors] = useState<{ name?: string; weeks?: string }>({})
  const navigate = useNavigate()

  const { mutate: createProgram, isPending: isCreating, error: createError } = useCreateProgram()
  const { mutate: updateProgram, isPending: isUpdating, error: updateError } = useUpdateProgram(initialData?.id || '')

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!formData.name) newErrors.name = 'Program name is required'
    if (!formData.weeks || formData.weeks < 1) newErrors.weeks = 'Weeks must be at least 1'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      if (isEditing && initialData) {
        updateProgram(formData, { onSuccess: () => navigate('/programs') })
      } else {
        createProgram(formData, { onSuccess: () => navigate('/programs') })
      }
    }
  }

  const isPending = isCreating || isUpdating
  const error = createError || updateError

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit Program' : 'Create New Program'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <Alert variant="error" title="Error" children={(error as any).response?.data?.message || 'Something went wrong'} />}

          <Input
            label="Program Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            placeholder="e.g., 12-Week Muscle Gain"
          />

          <TextArea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe the program goals, target audience, etc."
            rows={4}
          />

          <Input
            label="Number of Weeks"
            type="number"
            min="1"
            max="52"
            value={formData.weeks}
            onChange={(e) => setFormData({ ...formData, weeks: parseInt(e.target.value) })}
            error={errors.weeks}
          />

          <div className="flex gap-2 pt-4">
            <Button type="submit" isLoading={isPending}>
              {isEditing ? 'Update Program' : 'Create Program'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/programs')}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
