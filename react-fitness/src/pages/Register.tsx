import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useEffect } from 'react'
import { RegisterForm } from '../features/auth/components/RegisterForm'

export const Register = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">💪 FitTracker</h1>
          <p className="text-gray-600 mt-2">Join our fitness community</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
