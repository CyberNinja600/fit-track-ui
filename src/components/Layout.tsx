import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BarChart3, CalendarDays, CircleHelp, Grid2x2, Home, LayoutGrid, LogOut, Plus, Users } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { Navbar } from './Navbar'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { logout } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()

  const sidebarItems = [
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
    <div className="h-screen overflow-hidden bg-[#0b1220] text-slate-100">
      <Navbar />

      <aside className="fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-64 flex-col border-r border-slate-700/80 bg-[#101d2f] px-4 py-6 lg:flex">
        <div className="mb-8 px-2">
          <div className="text-lg font-black tracking-[-0.08em] text-cyan-300 uppercase">BIO_KERNEL</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-400">V2.4.0_STABLE</div>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map(({ label, to, icon: Icon }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-xs font-medium uppercase tracking-[0.18em] transition ${
                isActive(to) ? 'border-l-2 border-cyan-400 bg-slate-800/80 text-cyan-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 border-t border-slate-700 pt-4">
          <button
            type="button"
            onClick={() => navigate('/programs/create')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-cyan-300"
          >
            <Plus className="h-4 w-4" />
            New Program
          </button>
          <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <CircleHelp className="h-4 w-4" />
            Support
          </button>
          <button
            type="button"
            onClick={() => {
              logout()
              navigate('/login')
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      <main className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto lg:left-64">
        <div className="mx-auto min-h-full max-w-[1600px] px-4 py-8 md:px-6">{children}</div>
      </main>
    </div>
  )
}
