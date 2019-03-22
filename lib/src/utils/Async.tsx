import { useAsync } from 'react-use'
import { nop } from './index'

export interface AsyncComponentProps<T = any> {
  readonly isLoading: boolean
  readonly error?: Error
  readonly data?: T
}

export interface AsyncProps<T = any> {
  children(props: AsyncComponentProps<T>): JSX.Element
  asyncFn(): Promise<T>
}

export function Async<T>({ asyncFn, children }: AsyncProps<T>): JSX.Element {
  const { value: data, error, loading: isLoading } = useAsync(asyncFn)

  if (error) {
    // tslint:disable-next-line:no-console
    console.trace(error.message)
  }

  return children({ data, error, isLoading })
}

export const delay: <T>(delay: number, f: () => T) => Promise<T> = async (
  milliseconds,
  f = nop,
) => new Promise(resolve => setTimeout(() => resolve(f()), milliseconds))

export const interval: <T>(interval: number, f: () => T) => Promise<T> = async (
  milliseconds,
  f = nop,
) => new Promise(resolve => setInterval(() => resolve(f()), milliseconds))
