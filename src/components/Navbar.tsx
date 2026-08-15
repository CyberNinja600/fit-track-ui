import type { ReactNode } from 'react'
import { useAuthStore } from '../store/authStore'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { LogOut, Home, ListTodo, LayoutGrid, User } from 'lucide-react'

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path

  if (!isAuthenticated) {
    return null
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="font-bold text-xl text-primary-600">
              💪 FitTracker
            </Link>
            <div className="hidden md:flex gap-1">
              <NavLink to="/dashboard" isActive={isActive('/dashboard')} icon={<Home className="w-4 h-4" />}>
                Dashboard
              </NavLink>
              <NavLink to="/programs" isActive={isActive('/programs')} icon={<LayoutGrid className="w-4 h-4" />}>
                Programs
              </NavLink>
              {user?.role === 'trainer' && (
                <NavLink to="/programs/create" isActive={isActive('/programs/create')} icon={<ListTodo className="w-4 h-4" />}>
                  Create Program
                </NavLink>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
              <User className="w-4 h-4" />
              <span className="text-sm text-gray-700">{user?.name}</span>
              <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full capitalize">{user?.role}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                logout()
                navigate('/login')
              }}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

interface NavLinkProps {
  to: string
  isActive: boolean
  icon?: ReactNode
  children: ReactNode
}

function NavLink({ to, isActive, icon, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      {children}
    </Link>
  )
}
