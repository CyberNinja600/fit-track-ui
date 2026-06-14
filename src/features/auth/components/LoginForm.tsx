import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Input'
import { Card, CardContent } from '../../../components/Card'
import { Alert } from '../../../components/Alert'
import { useLogin } from '../../../hooks/useAuth'


export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const navigate = useNavigate()
  const { mutate: login, isPending, error } = useLogin()

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!email) newErrors.email = 'Email is required'
    if (!password) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      login({ email, password }, { onSuccess: () => navigate('/dashboard') })
    }
  }

  return (
    <Card className="w-full max-w-md bg-surface-elevated border border-surface-stroke relative overflow-hidden group">
      {/* <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader> */}
      <div className ="absolute top-0 left-0 w-8 h-px bg-primary"></div>
      <div className ="absolute top-0 left-0 w-px h-8 bg-primary"></div>
      <div className ="absolute bottom-0 right-0 w-8 h-px bg-primary"></div>
      <div className ="absolute bottom-0 right-0 w-px h-8 bg-primary"></div>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          {error && <Alert variant="error" title="Login failed" children={(error as any).response?.data?.message || 'Please try again'} />}

          
          <div className="relative w-full ">
            <span className="absolute left-3 top-[53%] material-symbols-outlined text-on-surface-variant flex h-auto items-center justify-center">
              <div className="text-sm  flex  items-center justify-center">alternate_email</div>
            </span>

            <Input
              label="Identity_Handle"
              labelClassName="block text-sm font-medium text-gray-700 mb-1 text-label-sm text-primary uppercase font-data-mono"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              placeholder="USER@KERNEL.IO"
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 py-3 pl-8 pr-4 rounded-none font-mono transition-all"
            />
          </div>

          <div className="relative w-full font-stretch-extra-condensed">
            <span className="absolute left-3 top-[53%] material-symbols-outlined text-on-surface-variant flex h-auto items-center justify-center ">
              <div className="text-sm  flex  items-center justify-center">key</div>
            </span>
          <Input
            label="Access Cipher"
            labelClassName="block text-sm font-medium text-gray-700 mb-1 text-label-sm text-primary uppercase font-data-mono"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            placeholder="••••••••"
            className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 py-3 pl-8 pr-4 rounded-none font-mono transition-all"
          />
          </div>

            <button type="submit" disabled={isPending} className="w-full bg-primary-container text-on-primary-container font-headline-lg-mobile md:font-headline-lg py-4 border border-primary/50 hover:bg-primary-container/80 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-70">
              <span className="material-symbols-outlined">{isPending ? 'progress_activity' : 'login'}</span>{isPending ? 'Signing in...' : 'Sign In'}
            </button>

          <div className="text-center">
            <p className="text-gray-600 font-data-mono text-[9px] uppercase">
              Version 1.0.0 - &copy; 2024 FitTracker. All rights reserved.
            </p>
          </div>
          <p className="font-body-md">
                    Don't have an account?{' '}
                    <button type="button" onClick={() => navigate('/register')} className="text-primary font-medium hover:underline underline-offset-4 ml-1"> Register </button>
          </p>
        </form>
      </CardContent>
    </Card>
    
  )
}
