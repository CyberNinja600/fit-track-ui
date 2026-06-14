export const LoadingSkeleton = ({ count = 1, className = '' }: { count?: number; className?: string }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`animate-pulse bg-gray-200 rounded ${className}`} />
      ))}
    </>
  )
}

export const CardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
    <div className="h-3 bg-gray-200 rounded w-1/2" />
  </div>
)
