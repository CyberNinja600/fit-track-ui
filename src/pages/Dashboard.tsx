import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants'
import { useAuthStore } from '../store/authStore'

const navItems = [
  { label: 'Dashboard', icon: 'dashboard', path: ROUTES.DASHBOARD, active: true },
  { label: 'Programs', icon: 'architecture', path: ROUTES.PROGRAMS },
  { label: 'Calendar', icon: 'calendar_month', path: '/programs/bk-772/calendar' },
  { label: 'Clients', icon: 'group' },
  { label: 'Analytics', icon: 'monitoring' },
]

const engagementBars = [65, 82, 45, 94, 70, 88]

const activityLogs = [
  ['14:02:11', 'MEMBER_402 (Marcus V.)', 'completed', 'Hypertrophy_Phase_1 // Day 3', 'text-tertiary'],
  ['13:45:02', 'MEMBER_119 (Sarah K.)', 'logged new metric:', 'Body_Fat 18.2% (-0.5%)', 'text-accent-success'],
  ['12:30:58', 'SYSTEM', 'generated', 'Weekly_Performance_Digest', 'text-primary'],
  ['11:15:20', 'MEMBER_982 (Liam W.)', 'subscribed to', 'Endurance_Base_V2', 'text-tertiary'],
]

export const Dashboard = () => {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const handleNavigate = (path?: string, label?: string) => {
    if (path) {
      navigate(path)
      return
    }

    console.log(`Trainer dashboard navigation: ${label} route is not registered yet`)
  }

  const handleLogout = () => {
    logout()
    navigate(ROUTES.LOGIN)
  }

  return (
    <div className="bg-background text-on-background overflow-x-hidden min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-max-width mx-auto">
        <button
          type="button"
          onClick={() => navigate(ROUTES.DASHBOARD)}
          className="font-display-lg text-headline-lg-mobile md:text-display-lg font-black tracking-tighter text-primary glitch-hover"
        >
          BIO_KERNEL
        </button>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-highest px-3 py-1 border border-outline-variant rounded-lg">
            <span className="material-symbols-outlined text-primary text-sm mr-2">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 font-data-mono text-label-sm text-on-surface-variant w-48"
              placeholder="CMD+K TO SEARCH"
              type="text"
            />
          </div>
          <button type="button" className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest p-2 rounded transition-colors active:scale-95">
            notifications
          </button>
          <button type="button" className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest p-2 rounded transition-colors active:scale-95">
            settings
          </button>
          <div className="h-8 w-8 rounded-full border border-primary overflow-hidden bg-surface-container-highest flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[20px]">person</span>
          </div>
        </div>
      </nav>

      <aside className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col bg-surface-container border-r border-outline-variant pt-20 pb-8 py-8 space-y-2 z-40">
        <div className="px-6 mb-6">
          <div className="text-primary font-bold font-display-lg text-xl">BIO_KERNEL</div>
          <div className="font-data-mono text-[10px] text-tertiary-container uppercase tracking-widest mt-1">V2.4.0_STABLE</div>
        </div>
        <nav className="flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigate(item.path, item.label)}
              className={`w-full pl-4 py-3 flex items-center gap-3 font-data-mono uppercase transition-all ${
                item.active
                  ? 'text-primary bg-primary-container/10 border-l-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-4 mb-4">
          <button
            type="button"
            onClick={() => navigate(ROUTES.CREATE_PROGRAM)}
            className="w-full py-3 bg-primary text-on-primary font-data-mono font-bold uppercase rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            NEW_PROGRAM
          </button>
        </div>
        <div className="mt-auto">
          <button
            type="button"
            onClick={() => console.log('Trainer dashboard navigation: Support route is not registered yet')}
            className="w-full text-on-surface-variant pl-4 py-3 flex items-center gap-3 font-data-mono uppercase hover:text-primary hover:bg-surface-container-highest transition-all"
          >
            <span className="material-symbols-outlined">help</span>
            Support
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full text-on-surface-variant pl-4 py-3 flex items-center gap-3 font-data-mono uppercase hover:text-primary hover:bg-surface-container-highest transition-all"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>

      <main className="lg:ml-64 pt-24 pb-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background uppercase tracking-tight">
              TRAINER_DASHBOARD
            </h1>
            <p className="font-data-mono text-on-surface-variant text-sm mt-1">
              OPERATIONAL STATUS: <span className="text-accent-success">OPTIMAL</span> // SESSION_ID: BK-8829
            </p>
          </div>
          <div className="px-4 py-2 border border-outline-variant bg-surface-container rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="font-data-mono text-xs uppercase">12 Active Clients</span>
          </div>
        </header>

        <div className="bento-grid">
          <div className="col-span-12 md:col-span-8 bg-surface-elevated border border-surface-stroke p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-data-mono text-[10px] text-outline opacity-50">SYS_ENG_CORE</div>
            <h3 className="font-data-mono text-on-surface-variant text-sm uppercase mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">analytics</span>
              Engagement_Metrics
            </h3>
            <div className="flex flex-col md:flex-row items-end gap-8 h-48">
              <div className="flex-1 flex items-end justify-between gap-2 h-full">
                {engagementBars.map((height) => (
                  <div key={height} className="w-full bg-primary-container/20 relative group/bar">
                    <div className="chart-bar absolute bottom-0 w-full bg-primary" style={{ height: `${height}%` }} />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-data-mono opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      {height}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-48 space-y-4">
                <div>
                  <div className="text-[10px] font-data-mono text-outline uppercase">Completion Rate</div>
                  <div className="text-2xl font-display-lg text-primary">84.2%</div>
                </div>
                <div>
                  <div className="text-[10px] font-data-mono text-outline uppercase">Active Streak</div>
                  <div className="text-2xl font-display-lg text-tertiary">14 Days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-surface-elevated border border-surface-stroke p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-data-mono text-on-surface-variant text-sm uppercase mb-4">Total_Members</h3>
              <div className="text-5xl font-display-lg text-on-background tracking-tighter">1,248</div>
              <div className="flex items-center gap-2 mt-2 text-accent-success font-data-mono text-xs">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +12.4% THIS_MONTH
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-data-mono text-on-surface-variant">ACTIVE</span>
                <span className="text-sm font-bold text-primary">892</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-data-mono text-on-surface-variant">CHURN_RISK</span>
                <span className="text-sm font-bold text-error">14</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 bg-surface-elevated border border-surface-stroke rounded-xl overflow-hidden">
            <div className="bg-surface-container px-6 py-3 border-b border-surface-stroke flex justify-between items-center">
              <h3 className="font-data-mono text-on-surface-variant text-sm uppercase">Recent_Activity_Log</h3>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-outline-variant" />
                <span className="w-2 h-2 rounded-full bg-outline-variant" />
                <span className="w-2 h-2 rounded-full bg-outline-variant" />
              </div>
            </div>
            <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto font-data-mono text-sm custom-scrollbar">
              {activityLogs.map(([time, actor, action, result, color]) => (
                <div key={time} className="flex items-start gap-4 p-3 border-b border-outline-variant/30 group hover:bg-surface-container-highest transition-colors cursor-pointer">
                  <span className="text-primary opacity-50 shrink-0">{time}</span>
                  <div className="flex flex-wrap gap-x-1">
                    <span className="text-on-background font-bold">{actor}</span>
                    <span className="text-on-surface-variant">{action}</span>
                    <span className={color}>{result}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 p-3 group hover:bg-surface-container-highest transition-colors cursor-pointer">
                <span className="text-primary opacity-50 shrink-0">10:00:00</span>
                <div className="text-on-surface-variant italic">End of logs for 2026-08-15</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <button
              type="button"
              onClick={() => navigate('/programs/bk-991')}
              className="text-left bg-surface-elevated border border-surface-stroke rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-data-mono uppercase">LATEST_BUILD</div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </div>
              <h4 className="font-headline-lg text-xl mb-2">NEURAL_ADAPTATION_V4</h4>
              <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">
                High-frequency central nervous system optimization for advanced powerlifters.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-surface-container p-2 rounded text-center">
                  <div className="text-[10px] font-data-mono text-outline uppercase">Active</div>
                  <div className="font-data-mono text-sm">342 Users</div>
                </div>
                <div className="flex-1 bg-surface-container p-2 rounded text-center">
                  <div className="text-[10px] font-data-mono text-outline uppercase">ROI</div>
                  <div className="font-data-mono text-sm text-accent-success">+18% Strength</div>
                </div>
              </div>
            </button>

            <div className="bg-surface-elevated border border-surface-stroke rounded-xl overflow-hidden flex-1 relative">
              <div className="relative p-6 h-full flex flex-col">
                <h3 className="font-data-mono text-on-surface-variant text-sm uppercase mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">rocket_launch</span>
                  Program_Quicklinks
                </h3>
                <div className="space-y-3">
                  {['Hypertrophy_Phase_1', 'Metabolic_Reset_B', 'Endurance_Base_V2'].map((program, index) => (
                    <button
                      key={program}
                      type="button"
                      onClick={() => navigate(`/programs/${['bk-772', 'bk-884', 'bk-991'][index]}`)}
                      className="w-full flex justify-between items-center p-3 bg-surface-container/50 border border-outline-variant hover:bg-surface-container transition-all rounded-lg"
                    >
                      <span className="font-data-mono text-xs uppercase">{program}</span>
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.PROGRAMS)}
                  className="mt-auto text-primary font-data-mono text-xs uppercase hover:underline text-center pt-4"
                >
                  View All Programs (14)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full lg:hidden z-50 bg-surface/80 backdrop-blur-md border-t border-outline-variant flex justify-around items-center h-16 px-4">
        <button type="button" onClick={() => navigate(ROUTES.DASHBOARD)} className="flex flex-col items-center justify-center text-primary active:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </button>
        <button type="button" onClick={() => navigate(ROUTES.CREATE_PROGRAM)} className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">add_box</span>
          <span className="font-label-sm text-label-sm">Build</span>
        </button>
        <button type="button" onClick={() => navigate('/programs/bk-772/calendar')} className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">event_note</span>
          <span className="font-label-sm text-label-sm">Schedule</span>
        </button>
        <button type="button" onClick={() => console.log('Trainer dashboard navigation: Profile route is not registered yet')} className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </button>
      </nav>
    </div>
  )
}
