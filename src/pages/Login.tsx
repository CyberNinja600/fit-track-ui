import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useEffect } from 'react'
import { LoginForm } from '../features/auth/components/LoginForm'
import { Codicon } from '../components/Codicon'

export const Login = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

return (
  <div className="relative min-h-screen bg-background text-on-background font-body-md overflow-hidden">
    <div className="fixed inset-0 terminal-grid z-0 opacity-40" />
    <div className="scanline" />

    <main className="relative z-20 flex min-h-screen items-center justify-center px-margin-mobile md:px-margin-desktop py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-unit bg-primary-container/10 border border-outline-variant mb-4">
            <Codicon name="terminal" className="text-primary text-2xl" />
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary uppercase glitch-hover">
            FitTracker
          </h1>
          <p className="font-data-mono text-data-mono text-on-surface-variant mt-2 tracking-widest uppercase">
            Your personal fitness companion
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  </div>
)
}
