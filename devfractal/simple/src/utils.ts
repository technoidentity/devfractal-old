import { format } from 'date-fns'

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'DD/MM/YYYY')
}
