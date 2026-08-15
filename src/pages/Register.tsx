import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterForm } from '../features/auth/components/RegisterForm'
import { useAuthStore } from '../store/authStore'
import { Codicon } from '../components/Codicon'

export const Register = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="relative min-h-screen bg-background text-on-background font-body-md flex flex-col overflow-hidden">
      <div className="fixed inset-0 terminal-grid z-0 opacity-40" />
      <div className="scanline" />

      <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant h-16 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="font-display-lg text-headline-lg-mobile md:text-display-lg font-black tracking-tighter text-primary">
          FitTrack
        </div>
        <div className="flex items-center gap-4">
          <span className="font-data-mono text-xs text-on-surface-variant hidden md:block">V2.4.0_STABLE</span>
          <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center">
            <Codicon name="shield" className="text-sm" />
          </div>
        </div>
      </header>

      <main className="relative z-20 flex-grow flex items-center justify-center pt-24 pb-12 px-margin-mobile overflow-hidden">
        <RegisterForm />
      </main>

      <aside className="fixed bottom-12 right-12 hidden xl:block w-72 pointer-events-none">
        <div className="border-l-2 border-primary/20 pl-6 py-4 space-y-4">
          <h4 className="font-data-mono text-xs text-primary uppercase">Identity_Validation</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed font-body-md opacity-60">
            FitTrack requires biometric alignment for all new nodes. Selecting 'Trainer' unlocks administrative program drafting tools,
            while 'Member' enables localized biometric tracking and schedule synchronization.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="grid grid-cols-4 gap-1">
            <div className="h-4 bg-primary/10" />
            <div className="h-4 bg-primary/20" />
            <div className="h-4 bg-primary/30" />
            <div className="h-4 bg-primary/40" />
          </div>
        </div>
      </aside>

      <footer className="mt-auto py-8 text-center border-t border-outline-variant/10 bg-surface-container-lowest">
        <p className="font-data-mono text-[10px] text-on-surface-variant/30 uppercase tracking-[0.3em]">
          (C) 2024 FitTrack // BIOMETRIC_INTEGRATION_NETWORK // ALL_RIGHTS_RESERVED
        </p>
      </footer>
    </div>
  )
}
