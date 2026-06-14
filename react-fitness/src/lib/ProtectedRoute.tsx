import type { ReactNode } from 'react'
import { useAuthStore } from '../store/authStore'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: 'member' | 'trainer'
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}
