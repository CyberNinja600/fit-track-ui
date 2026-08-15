import type { Week } from '../../../types'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
import { DAYS_OF_WEEK } from '../../../constants'
import { useNavigate } from 'react-router-dom'

interface WeekCalendarProps {
  week: Week
  programId: string
}

export const WeekCalendar = ({ week, programId }: WeekCalendarProps) => {
  const navigate = useNavigate()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Week {week.weekNumber}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {DAYS_OF_WEEK.map((dayName, index) => {
            const day = week.days?.find((d) => d.dayOfWeek === index)
            return (
              <div
                key={index}
                className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => day && navigate(`/programs/${programId}/calendar?dayId=${day.id}`)}
              >
                <p className="text-xs font-medium text-gray-700">{dayName}</p>
                <p className="text-xs text-gray-500 mt-1">{day?.tasks?.length || 0} tasks</p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
