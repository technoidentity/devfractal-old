import { format } from 'date-fns'

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'dd/MM/yyyy')
}

export function isFunction(x: unknown): x is Function {
  return typeof x === 'function'
}
