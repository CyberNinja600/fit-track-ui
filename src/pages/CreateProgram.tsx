import { Layout } from '../components/Layout'
import { ProgramBuilderPage } from '../features/programs/components/builder/ProgramBuilderPage'

export const CreateProgram = () => {
  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] min-h-0 overflow-hidden">
        <ProgramBuilderPage />
      </div>
    </Layout>
  )
}
