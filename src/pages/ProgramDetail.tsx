import { useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuthStore } from '../store/authStore'
import { Button } from '../components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card'
import { Badge } from '../components/Badge'
import { Users, ArrowLeft } from 'lucide-react'
import { findStaticProgram } from '../data/staticFitTrackData'

export const ProgramDetail = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const program = findStaticProgram(id)

  const isTrainer = program.trainerId === user?.id
  const isMember = program.members?.some((m) => m.id === user?.id)

  return (
    <Layout>
      <div className="space-y-6">
        <button
          onClick={() => navigate('/programs')}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </button>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl">{program.name}</CardTitle>
                <p className="text-gray-600 mt-2">{program.description}</p>
              </div>
              <Badge variant="primary">{program.weeks} weeks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>{program.members?.length || 0} members</span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Members</h3>
              <div className="flex flex-wrap gap-2">
                {program.members?.map((member) => (
                  <Badge key={member.id} variant="success">
                    {member.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t">
              {isTrainer && (
                <>
                  <Button onClick={() => navigate(`/programs/${id}/edit`)}>Edit</Button>
                  <Button variant="danger" onClick={() => console.log(`Static delete clicked for program ${id}`)}>
                    Delete
                  </Button>
                </>
              )}
              {!isTrainer && !isMember && (
                <Button onClick={() => console.log(`Static join clicked for program ${id}`)}>
                  Join Program
                </Button>
              )}
              {!isTrainer && isMember && (
                <Button variant="danger" onClick={() => console.log(`Static leave clicked for program ${id}`)}>
                  Leave Program
                </Button>
              )}
              <Button variant="secondary" onClick={() => navigate(`/programs/${id}/calendar`)}>
                View Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
