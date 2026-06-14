import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useProgram } from '../hooks/usePrograms'
import { ProgramForm } from '../features/programs/components/ProgramForm'
import { CardSkeleton } from '../components/Skeleton'

export const EditProgram = () => {
  const { id = '' } = useParams()
  const { data: program, isLoading } = useProgram(id)

  if (isLoading) return <Layout><CardSkeleton /></Layout>

  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Edit Program</h1>
        {program && <ProgramForm initialData={program} isEditing />}
      </div>
    </Layout>
  )
}
