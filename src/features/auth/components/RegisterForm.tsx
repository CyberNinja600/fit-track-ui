import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../../../hooks/useAuth'

type UserRole = 'member' | 'trainer'

const inputClassName =
  'w-full bg-surface-container-highest/20 border border-outline-variant px-12 py-3.5 text-on-surface focus:border-primary focus:outline-none focus:shadow-input-focus transition-colors font-data-mono placeholder:text-outline-variant/50'

export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState<UserRole>('member')
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string }>({})
  const navigate = useNavigate()
  const { mutate: register, isPending, error } = useRegister()

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!name) newErrors.name = 'Name is required'
    if (!email) newErrors.email = 'Email is required'
    if (!password) newErrors.password = 'Password is required'
    if (password && password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      register({ email, password, name, role }, { onSuccess: () => navigate('/dashboard') })
    }
  }

  const registerError = (error as any)?.response?.data?.message || 'Please try again'

  return (
    <div className="w-full max-w-lg z-10">
      <div className="bg-surface-container-low border border-surface-stroke p-8 md:p-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -mr-8 -mt-8 rotate-45 border-b border-outline-variant" />

        <div className="mb-8">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight mb-2">
            Register
          </h1>
          <p className="font-data-mono text-data-mono text-on-surface-variant terminal-cursor uppercase">
            Awaiting biological data input...
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="border border-error-container bg-error-container/20 px-4 py-3 font-data-mono text-xs text-on-error-container uppercase">
              Registration failed: {registerError}
            </div>
          )}

          <div className="space-y-3">
            <label className="font-data-mono text-xs text-on-surface-variant uppercase tracking-widest">
              Select_Identity_Vector
            </label>
            <div className="grid grid-cols-2 gap-4">
              {(['member', 'trainer'] as const).map((currentRole) => (
                <label key={currentRole} className="relative cursor-pointer group">
                  <input
                    className="peer sr-only"
                    name="role"
                    type="radio"
                    value={currentRole}
                    checked={role === currentRole}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                  />
                  <div className="p-4 border border-outline-variant bg-surface-container-highest/30 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center gap-2 group-active:scale-95">
                    <span className="material-symbols-outlined text-on-surface-variant peer-checked:text-primary">
                      {currentRole === 'member' ? 'person' : 'fitness_center'}
                    </span>
                    <span className="font-data-mono text-xs uppercase tracking-tighter text-on-surface-variant peer-checked:text-primary">
                      I am a {currentRole === 'member' ? 'Member' : 'Trainer'}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="group">
              <label className="block font-data-mono text-xs text-on-surface-variant uppercase mb-1.5 ml-1 group-focus-within:text-primary" htmlFor="name">
                Full_Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 text-lg">
                  fingerprint
                </span>
                <input
                  className={inputClassName}
                  id="name"
                  name="name"
                  placeholder="User_Identifier"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {errors.name && <p className="mt-1.5 ml-1 font-data-mono text-xs text-error">{errors.name}</p>}
            </div>

            <div className="group">
              <label className="block font-data-mono text-xs text-on-surface-variant uppercase mb-1.5 ml-1 group-focus-within:text-primary" htmlFor="email">
                Auth_Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 text-lg">
                  alternate_email
                </span>
                <input
                  className={inputClassName}
                  id="email"
                  name="email"
                  placeholder="name@domain.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <p className="mt-1.5 ml-1 font-data-mono text-xs text-error">{errors.email}</p>}
            </div>

            <div className="group">
              <label className="block font-data-mono text-xs text-on-surface-variant uppercase mb-1.5 ml-1 group-focus-within:text-primary" htmlFor="password">
                Access_Key
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 text-lg">
                  terminal
                </span>
                <input
                  className={inputClassName}
                  id="password"
                  name="password"
                  placeholder="************"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && <p className="mt-1.5 ml-1 font-data-mono text-xs text-error">{errors.password}</p>}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              className="w-5 h-5 bg-surface-container-highest border-outline-variant text-primary rounded-none focus:ring-0 focus:ring-offset-0"
              id="terms"
              name="terms"
              required
              type="checkbox"
            />
            <label className="text-xs text-on-surface-variant font-label-sm leading-relaxed" htmlFor="terms">
              I acknowledge and agree to the{' '}
              <a className="text-primary hover:underline underline-offset-4" href="#">
                Terms of Operations
              </a>{' '}
              and{' '}
              <a className="text-primary hover:underline underline-offset-4" href="#">
                Privacy Protocols
              </a>
              .
            </label>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-primary-container text-on-primary-container font-headline-lg-mobile py-4 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="animate-spin material-symbols-outlined">refresh</span>
                  <span className="uppercase tracking-widest font-bold">Synchronizing...</span>
                </>
              ) : (
                <>
                  <span className="absolute left-4 opacity-30 font-data-mono text-xs hidden group-hover:block">
                    0x421_EXE
                  </span>
                  <span className="uppercase tracking-widest font-bold">Register_User</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col items-center gap-4">
          <p className="text-xs text-on-surface-variant font-data-mono uppercase">
            Existing_User?{' '}
            <button
              className="text-tertiary hover:text-tertiary-container transition-colors"
              type="button"
              onClick={() => navigate('/login')}
            >
              Login_Here
            </button>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-success" />
              <span className="text-[10px] font-data-mono text-on-surface-variant/50">ENCRYPTION_ACTIVE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-warning" />
              <span className="text-[10px] font-data-mono text-on-surface-variant/50">SECURE_TUNNEL_ESTABLISHED</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-between gap-3 px-2 font-data-mono text-[10px] text-outline-variant uppercase tracking-[0.2em]">
        <span>System_ID: BK-7749</span>
        <span>Latency: 12ms</span>
        <span>Node: US-EAST-1</span>
      </div>
    </div>
  )
}
