import React from 'react'
import { withRouter } from 'react-router'

export const ScrollToTop: React.ComponentClass = withRouter(
  ({ children, location }): JSX.Element => {
    React.useEffect(() => window.scrollTo(0, 0), [location.pathname])

    return <>{children}</>
  },
)
