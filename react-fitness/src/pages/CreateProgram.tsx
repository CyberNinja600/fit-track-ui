import { Layout } from '../components/Layout'
import { ProgramForm } from '../features/programs/components/ProgramForm'

export const CreateProgram = () => {
  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Create New Program</h1>
        <ProgramForm />
      </div>
    </Layout>
  )
}
