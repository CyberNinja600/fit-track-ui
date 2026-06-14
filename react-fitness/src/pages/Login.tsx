import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useEffect } from 'react'
import { LoginForm } from '../features/auth/components/LoginForm'

export const Login = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="min-h-screen bg-black from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-600">FitTracker</h1>
          <p className="text-slate-400 mt-2">Your personal fitness companion</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
