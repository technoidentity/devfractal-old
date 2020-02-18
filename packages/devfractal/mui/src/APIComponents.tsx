import { CircularProgress, Typography } from '@material-ui/core'
import React from 'react'
import { APIComponents } from 'technoidentity-core'
import { useLocation } from 'technoidentity-router'

// tslint:disable typedef

export const NotFound: React.FC = () => {
  const { pathname } = useLocation()

  return <Typography>{`path ${pathname} did not match any route`}</Typography>
}

export const MuiComponents: APIComponents = {
  Spinner: ({ size }) => <CircularProgress size={size} />,

  ServerErrorsView: ({ children }) => (
    <Typography variant="h4" color="error">
      {children}
    </Typography>
  ),

  ErrorView: ({ error }) => (
    <Typography variant="h4" color="error">
      {error.message}
    </Typography>
  ),

  Toast: ({ children }) => (
    <Typography className="toast">{children}</Typography>
  ),

  NotFound,
}
