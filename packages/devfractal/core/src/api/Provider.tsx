import React from 'react'
import { verify } from 'srtp-utils'

// tslint:disable: typedef

export interface ErrorViewProps {
  readonly error: Error
}

export interface ServerErrorViewProps {
  readonly children: string
}

export interface ToastProps {
  readonly children: string
}

export interface SpinnerProps {
  readonly size?: number
}

export interface APIComponents {
  readonly Spinner: React.FC<SpinnerProps>
  readonly NotFound: React.FC
  readonly ErrorView: React.FC<ErrorViewProps>
  readonly ServerErrorsView: React.FC<ServerErrorViewProps>
  readonly Toast: React.FC<ToastProps>
}

export const APIComponents = React.createContext<APIComponents | undefined>(
  undefined,
)

export function useAPIComponents(): APIComponents {
  const provider = React.useContext(APIComponents)
  verify(provider)

  return provider
}
