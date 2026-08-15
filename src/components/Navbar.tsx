import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { Codicon } from './Codicon'

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()

  if (!isAuthenticated) return null

  const navItems = [
    { label: 'Dashboard', to: '/dashboard', icon: 'home' },
    { label: 'Programs', to: '/programs', icon: 'layout-sidebar-left' },
    { label: 'Calendar', to: '/calendar', icon: 'calendar' },
    { label: 'Clients', to: '/clients', icon: 'account' },
    { label: 'Analytics', to: '/analytics', icon: 'graph' },
  ]

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-slate-700/80 bg-[#0d1a2d]">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary uppercase glitch-hover">
            FitTrack
          </Link>
          <nav className="flex items-center gap-1 lg:hidden">
            {navItems.map(({ label, to, icon }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-2 rounded-md px-2 py-2 text-[10px] font-medium uppercase tracking-wide transition ${
                  isActive(to) ? 'bg-slate-800 text-cyan-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <Codicon name={icon} className="text-[12px] leading-none" />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 md:flex">
            <Codicon name="search" className="text-sm text-slate-400" />
            <input
              type="text"
              placeholder="CMD+K TO SEARCH"
              className="w-44 border-0 bg-transparent text-xs uppercase tracking-[0.2em] text-slate-300 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <button type="button" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <Codicon name="bell" className="text-sm leading-none" />
          </button>
          <button type="button" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <Codicon name="settings-gear" className="text-sm leading-none" />
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-2 py-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-slate-200">
              <Codicon name="account" className="text-sm leading-none" />
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
            <Codicon name="log-out" className="text-sm leading-none" />
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
