import { format, parseISO } from 'date-fns'

export const formatDate = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'MMM dd, yyyy')
}

export const formatDateLong = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'EEEE, MMMM dd, yyyy')
}

export const getWeekDateRange = (startDate: string | Date, endDate: string | Date) => {
  const start = typeof startDate === 'string' ? parseISO(startDate) : startDate
  const end = typeof endDate === 'string' ? parseISO(endDate) : endDate
  return `${format(start, 'MMM dd')} - ${format(end, 'MMM dd, yyyy')}`
}
