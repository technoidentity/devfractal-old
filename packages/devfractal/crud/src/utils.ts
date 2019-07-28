import { format } from 'date-fns'

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'DD/MM/YYYY')
}

export function isFunction(x: unknown): x is Function {
  return typeof x === 'function'
}
