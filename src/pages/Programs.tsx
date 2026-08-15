import { Layout } from '../components/Layout'
import { useAuthStore } from '../store/authStore'
import { Button } from '../components/Button'
import { ProgramCard } from '../features/programs/components/ProgramCard'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { staticPrograms } from '../data/staticFitTrackData'

export const Programs = () => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const programs = staticPrograms

  const userPrograms = user?.role === 'member' ? [] : programs
  const availablePrograms = programs.filter((p) => !p.members?.some((m) => m.id === user?.id))
  const joinedPrograms = programs.filter((p) => p.members?.some((m) => m.id === user?.id))

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Programs</h1>
          {(user?.role === 'trainer' || !user) && (
            <Button onClick={() => navigate('/programs/create')} className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Program
            </Button>
          )}
        </div>

        <>
            {(user?.role === 'trainer' || !user) && userPrograms.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{user?.role === 'trainer' ? 'My Programs' : 'Static Programs'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userPrograms.map((program) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      canEdit
                      onEdit={(id) => navigate(`/programs/${id}/edit`)}
                      onDelete={(id) => console.log(`Static delete clicked for program ${id}`)}
                    />
                  ))}
                </div>
              </div>
            )}

            {joinedPrograms.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">My Joined Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {joinedPrograms.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </div>
            )}

            {availablePrograms.length > 0 && user?.role === 'member' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Available Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availablePrograms.map((program) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      canJoin
                      onJoin={(id) => console.log(`Static join clicked for program ${id}`)}
                    />
                  ))}
                </div>
              </div>
            )}

            {programs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No programs available yet</p>
              </div>
            )}
          </>
      </div>
    </Layout>
  )
}
