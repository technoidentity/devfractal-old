import React from 'react'
import { verify } from 'technoidentity-utils'

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

export interface APIComponentsProvider {
  readonly Loading: React.FC
  readonly NotFound: React.FC
  readonly ErrorView: React.FC<ErrorViewProps>
  readonly ServerErrorsView: React.FC<ServerErrorViewProps>
  readonly Toast: React.FC<ToastProps>
}

export const APIComponentsProvider = React.createContext<
  APIComponentsProvider | undefined
>(undefined)

export function useAPIComponents(): APIComponentsProvider {
  const provider = React.useContext(APIComponentsProvider)
  verify(provider)

  return provider
}
