import React from 'react'
import { APIComponentsProvider } from 'technoidentity-core'
import { useLocation } from 'technoidentity-router'

// tslint:disable typedef

export const NotFound: React.FC = () => {
  const { pathname } = useLocation()

  return <h1>{`path ${pathname} did not match any route`}</h1>
}

export const MuiComponents: APIComponentsProvider = {
  Loading: () => <h1 className="is-text is-size-1 is-info">Loading....</h1>,

  ServerErrorsView: ({ children }) => (
    <h1 className="is-text is-size-1 is-danger">{children}</h1>
  ),

  ErrorView: ({ error }) => (
    <h1 className="is-text is-size-1 is-danger">{error}</h1>
  ),

  Toast: ({ children }) => <h1 className="toast">{children}</h1>,

  NotFound,
}
