import type { Program } from '../../../types'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
import { Badge } from '../../../components/Badge'
import { Users } from 'lucide-react'

interface ProgramsOverviewProps {
  programs: Program[]
}

export const ProgramsOverview = ({ programs }: ProgramsOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Programs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {programs.length === 0 ? (
            <p className="text-gray-500 text-sm">No programs yet</p>
          ) : (
            programs.slice(0, 5).map((program) => (
              <div key={program.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">{program.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Users className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{program.members?.length || 0} members</span>
                  </div>
                </div>
                <Badge variant="primary">{program.weeks}w</Badge>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
