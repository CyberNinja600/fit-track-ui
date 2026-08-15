import type { ReactNode } from 'react'
import { useAuthStore } from '../store/authStore'
import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '../constants'
import { staticTrainer } from '../data/staticFitTrackData'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: 'member' | 'trainer'
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, user, setUser } = useAuthStore()

  const continueAsTrainer = () => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, 'static-trainer-token')
    setUser(staticTrainer)
  }

  if (!isAuthenticated) {
    if (requiredRole === 'trainer') {
      return (
        <div className="min-h-screen bg-background text-on-background flex items-center justify-center px-margin-mobile">
          <div className="w-full max-w-md bg-surface-elevated border border-surface-stroke p-8">
            <div className="mb-8">
              <p className="font-data-mono text-[10px] text-on-surface-variant uppercase tracking-[0.3em] mb-3">
                User_Type_Required
              </p>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
                Trainer_Dashboard
              </h1>
              <p className="font-body-md text-on-surface-variant mt-3">
                Dashboard access needs a trainer user type. Backend auth can still own login later; this static preview can continue as trainer.
              </p>
            </div>
            <button
              type="button"
              onClick={continueAsTrainer}
              className="w-full bg-primary text-on-primary font-data-mono font-bold uppercase py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">admin_panel_settings</span>
              Continue_As_Trainer
            </button>
          </div>
        </div>
      )
    }

    return <Navigate to="/login" replace />
  }

  if (requiredRole === 'trainer' && user?.role !== requiredRole) {
    return (
      <div className="min-h-screen bg-background text-on-background flex items-center justify-center px-margin-mobile">
        <div className="w-full max-w-md bg-surface-elevated border border-surface-stroke p-8">
          <div className="mb-8">
            <p className="font-data-mono text-[10px] text-on-surface-variant uppercase tracking-[0.3em] mb-3">
              User_Type_Mismatch
            </p>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Trainer_Access_Required
            </h1>
            <p className="font-body-md text-on-surface-variant mt-3">
              Switch this static preview session to trainer mode to open the trainer dashboard.
            </p>
          </div>
          <button
            type="button"
            onClick={continueAsTrainer}
            className="w-full bg-primary text-on-primary font-data-mono font-bold uppercase py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">sync_alt</span>
            Switch_To_Trainer
          </button>
        </div>
      </div>
    )
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/programs" replace />
  }

  return <>{children}</>
}
