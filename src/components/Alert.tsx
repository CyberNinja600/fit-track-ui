import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react'
import { cn } from '../lib/utils'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'error' | 'warning'
  title?: string
}

export const Alert = ({ variant = 'info', title, children, className, ...props }: AlertProps) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  }

  const icons = {
    info: Info,
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
  }

  const Icon = icons[variant]

  return (
    <div className={cn('p-4 border rounded-lg flex gap-3', variants[variant], className)} {...props}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div>
        {title && <p className="font-medium">{title}</p>}
        {children}
      </div>
    </div>
  )
}
