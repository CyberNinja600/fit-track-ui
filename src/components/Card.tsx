import { cn } from '../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => (
  <div className={cn('bg-white rounded-lg border border-gray-200 shadow-sm', className)} {...props} />
)

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={cn('px-6 py-4 border-b border-gray-200', className)} {...props} />
)

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = ({ className, ...props }: CardContentProps) => <div className={cn('px-6 py-4', className)} {...props} />

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div className={cn('px-6 py-4 border-t border-gray-200 flex gap-2 justify-end', className)} {...props} />
)

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3 className={cn('text-lg font-semibold text-gray-900', className)} {...props} />
)

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={cn('text-sm text-gray-600 mt-1', className)} {...props} />
)
