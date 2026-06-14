import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card'
import { Alert } from '../../../components/Alert'
import { useRegister } from '../../../hooks/useAuth'

type UserRole = 'member' | 'trainer'

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
    if (!email) newErrors.email = 'Email is required'
    if (!password) newErrors.password = 'Password is required'
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!name) newErrors.name = 'Name is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      register({ email, password, name, role }, { onSuccess: () => navigate('/dashboard') })
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <Alert variant="error" title="Registration failed" children={(error as any).response?.data?.message || 'Please try again'} />}

          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            placeholder="John Doe"
          />

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            placeholder="your@email.com"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            placeholder="••••••••"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
            <div className="flex gap-4">
              {(['member', 'trainer'] as const).map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm capitalize">{r}</span>
                </label>
              ))}
            </div>
          </div>

          <Button type="submit" isLoading={isPending} className="w-full">
            Sign Up
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button type="button" onClick={() => navigate('/login')} className="text-primary-600 hover:text-primary-700 font-medium">
                Sign In
              </button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
