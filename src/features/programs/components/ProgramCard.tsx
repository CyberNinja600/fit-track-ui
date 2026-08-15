import type { Program } from '../../../types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/Card'
import { Badge } from '../../../components/Badge'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Users } from 'lucide-react'

interface ProgramCardProps {
  program: Program
  onJoin?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  canEdit?: boolean
  canJoin?: boolean
}

export const ProgramCard = ({ program, onJoin, onEdit, onDelete, canEdit, canJoin }: ProgramCardProps) => {
  const navigate = useNavigate()

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(`/programs/${program.id}`)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{program.name}</CardTitle>
            <CardDescription className="mt-2">By {program.trainer?.name || 'Unknown'}</CardDescription>
          </div>
          <Badge variant="primary">{program.weeks} weeks</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{program.description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          <span>{program.members?.length || 0} members</span>
        </div>
        <div className="flex gap-2">
          {canJoin && (
            <Button size="sm" onClick={(e) => { e.stopPropagation(); onJoin?.(program.id) }} className="flex-1">
              Join
            </Button>
          )}
          {canEdit && (
            <>
              <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); onEdit?.(program.id) }} className="flex-1">
                Edit
              </Button>
              <Button size="sm" variant="danger" onClick={(e) => { e.stopPropagation(); onDelete?.(program.id) }}>
                Delete
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
