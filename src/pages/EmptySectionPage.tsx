import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

interface EmptySectionPageProps {
  title: string
  description?: string
  actionLabel?: string
  actionRoute?: string
  showAction?: boolean
}

export const EmptySectionPage = ({
  title,
  description = 'This section is currently empty.',
  actionLabel,
  actionRoute = '/programs/create',
  showAction = false,
}: EmptySectionPageProps) => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900/60 p-8 text-center shadow-2xl shadow-slate-950/40">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Section status</p>
          <h1 className="mt-4 text-3xl font-black uppercase tracking-[-0.08em] text-white md:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-400">{description}</p>

          {showAction && actionLabel && (
            <Button onClick={() => navigate(actionRoute)} className="mt-6 inline-flex items-center gap-2">
              <span className="text-lg leading-none">+</span>
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </Layout>
  )
}
