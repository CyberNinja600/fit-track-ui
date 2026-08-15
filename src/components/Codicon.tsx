interface CodiconProps {
  name: string
  className?: string
}

export const Codicon = ({ name, className = '' }: CodiconProps) => {
  return <span aria-hidden="true" className={`codicon codicon-${name} ${className}`.trim()} />
}
