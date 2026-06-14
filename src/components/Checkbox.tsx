interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      id={id}
      className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
      {...props}
    />
    {label && (
      <label htmlFor={id} className="ml-2 text-sm text-gray-700">
        {label}
      </label>
    )}
  </div>
)
