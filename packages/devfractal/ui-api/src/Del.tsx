import React from 'react'
import { useDel } from './useDel'

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
      {serverError && <div className="toast">{serverError}</div>}
      <button {...props} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
