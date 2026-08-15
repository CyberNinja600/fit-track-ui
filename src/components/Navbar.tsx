import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Bell, LayoutGrid, LogOut, Search, Settings, User, Home, ListTodo, CalendarDays, Users, BarChart3 } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()

  if (!isAuthenticated) return null

  const navItems = [
    { label: 'Dashboard', to: '/dashboard', icon: Home },
    { label: 'Programs', to: '/programs', icon: LayoutGrid },
    { label: 'Calendar', to: '/programs/1/calendar', icon: CalendarDays },
    { label: 'Clients', to: '/clients', icon: Users },
    { label: 'Analytics', to: '/analytics', icon: BarChart3 },
  ]

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-slate-700/80 bg-[#0d1a2d]">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="font-black tracking-[-0.08em] text-2xl text-[#7dd3fc] uppercase">
            BIO_KERNEL
          </Link>
          <nav className="flex items-center gap-1 lg:hidden">
            {navItems.map(({ label, to, icon: Icon }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-2 rounded-md px-2 py-2 text-[10px] font-medium uppercase tracking-wide transition ${
                  isActive(to) ? 'bg-slate-800 text-cyan-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="CMD+K TO SEARCH"
              className="w-44 border-0 bg-transparent text-xs uppercase tracking-[0.2em] text-slate-300 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <button type="button" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <Bell className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <Settings className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-2 py-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-slate-200">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-xs font-medium text-slate-200">{user?.name ?? 'User'}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{user?.role ?? 'trainer'}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              logout()
              navigate('/login')
            }}
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
