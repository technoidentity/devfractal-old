import useAsync from 'react-use/lib/useAsync'
import { nop } from '../lib'

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
  const { value: data, error, loading: isLoading } = useAsync(asyncFn, [])

  if (error) {
    // tslint:disable-next-line:no-console
    console.trace(error.message)
  }

  return children({ data, error, isLoading })
}

export async function timeout<T>(delay: number, f: () => T = nop): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(f()), delay))
}

export async function interval<T>(
  interval: number,
  f: () => T = nop,
): Promise<T> {
  return new Promise(resolve => setInterval(() => resolve(f()), interval))
}
