import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
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
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <Alert variant="error" title="Login failed" children={(error as any).response?.data?.message || 'Please try again'} />}

          
          <div className="relative w-full ">
            <span className="absolute left-3 top-[53%] material-symbols-outlined text-on-surface-variant flex h-auto items-center justify-center">
              <div className="text-sm  flex  items-center justify-center">alternate_email</div>
            </span>

            <Input
              label="Identity_Handle"
              labelClassName="block text-sm font-medium text-gray-700 mb-1 text-label-sm login-label uppercase"
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
            labelClassName="block text-sm font-medium text-gray-700 mb-1 text-label-sm login-label uppercase"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            placeholder="••••••••"
            className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 py-3 pl-8 pr-4 rounded-none font-mono transition-all"
          />
          </div>

          <Button type="submit" isLoading={isPending} className="w-full">
            Sign In
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button type="button" onClick={() => navigate('/register')} className="text-primary-600 hover:text-primary-700 font-medium">
                Register
              </button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
    
  )
}
