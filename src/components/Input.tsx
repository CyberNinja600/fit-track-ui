import { cn } from '../lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  labelClassName?: string
}

export const Input = ({ label, error, id, labelClassName,  className, ...props  }: InputProps) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className={cn("block text-sm font-medium text-gray-700 mb-1", labelClassName)}>
        {label}
      </label>
    )}
    <input
      id={id}
      className={cn(
        'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        error ? 'border-red-500' : 'border-gray-300',
        className
      )}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
)
