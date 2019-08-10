import React from 'react'

export interface DelResult {
  readonly serverError: string | undefined
  onClick(): Promise<void>
}

export function useDel(
  asyncFn: () => Promise<void>,
  onSuccess: () => void,
  onFailure?: (err: any) => void,
): DelResult {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )

  async function onClick(): Promise<void> {
    return asyncFn()
      .then(onSuccess)
      .catch(err => {
        if (err && err.response && err.response.data) {
          setServerError(err.response.data.error)
          if (onFailure) {
            onFailure(err)
          }
        } else if (onFailure) {
          onFailure(err)
        } else {
          throw err
        }
      })
  }

  return { serverError, onClick }
}

export interface DelProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onDel(): Promise<void>
  onSuccess(): void
}

export function Del({
  onDel,
  onSuccess,
  children,
  ...props
}: DelProps): JSX.Element {
  const { serverError, onClick } = useDel(onDel, onSuccess)

  return (
    <>
      <div className="toast">{serverError}</div>
      <button {...props} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
