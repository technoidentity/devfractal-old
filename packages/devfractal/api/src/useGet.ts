import React from 'react'

export type AsyncResult<T> = { refresh(): void } & (
  | { readonly state: 'none' | 'loading' }
  | {
      readonly state: 'success'
      readonly data: T
    }
  | {
      readonly state: 'failure'
      readonly error: Error
    })

export function useGet<T extends {}, P extends any[]>(
  asyncFn: (...params: P) => Promise<T>,
  ...deps: P
): AsyncResult<T>
export function useGet<T extends {}>(asyncFn: () => Promise<T>): AsyncResult<T>

// tslint:disable no-object-mutation readonly-array
export function useGet<T extends {}, P extends any[]>(
  asyncFn: (...params: P | []) => Promise<T>,
  ...deps: Parameters<typeof asyncFn>
): AsyncResult<T> {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)
  const [loading, setLoading] = React.useState(false)

  const [fetchAgain, setFetchAgain] = React.useState(0)

  const mounted: React.MutableRefObject<boolean> = React.useRef(false)

  React.useEffect(() => {
    setLoading(true)

    mounted.current = true

    asyncFn(...deps)
      .then(data => {
        if (mounted.current) {
          setLoading(false)
          setData(data)
          setError(undefined)
        }
      })
      .catch(error => {
        if (mounted.current) {
          setLoading(false)
          setError(error)
        }
      })

    return () => {
      mounted.current = false
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [...deps, fetchAgain])

  return {
    refresh: () => setFetchAgain(count => (count + 1) % 100),
    ...(data
      ? { state: 'success', data }
      : error
      ? { state: 'failure', error }
      : { state: loading ? 'loading' : 'none' }),
  }
}
