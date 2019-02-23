import React, { useEffect } from 'react'
import { withRouter } from 'react-router'

export const ScrollToTop: React.ComponentClass = withRouter(
  ({ children, location }): JSX.Element => {
    useEffect(() => window.scrollTo(0, 0), [location.pathname])

    return <>{children}</>
  },
)
