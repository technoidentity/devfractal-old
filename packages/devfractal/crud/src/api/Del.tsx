import React from 'react'
import { useDel } from 'technoidentity-core'
import { useAPIComponents } from 'technoidentity-core'

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
  const { Toast } = useAPIComponents()

  return (
    <>
      {serverError && <Toast>{serverError}</Toast>}
      <button {...props} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
