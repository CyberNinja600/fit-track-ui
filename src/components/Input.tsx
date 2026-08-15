import { cn } from '../lib/utils'
import { Codicon } from './Codicon'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  labelClassName?: string
  icon?: string
  iconClassName?: string
  errorClassName?: string
}

export const Input = ({ label, error, id, labelClassName, icon, iconClassName, errorClassName, className, ...props  }: InputProps) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className={cn("block text-sm font-medium text-gray-700 mb-1", labelClassName)}>
        {label}
      </label>
    )}
    <div className="relative w-full">
      {icon && <Codicon name={icon} className={cn("absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base", iconClassName)} />}
      <input
        id={id}
        className={cn(
          'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          error ? 'border-red-500' : 'border-gray-300',
          icon ? 'pl-10' : '',
          className
        )}
        {...props}
      />
    </div>
    {error && <p className={cn("mt-1 text-sm text-red-600", errorClassName)}>{error}</p>}
  </div>
)
