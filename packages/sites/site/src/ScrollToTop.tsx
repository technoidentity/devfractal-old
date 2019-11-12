import React from 'react'
import { withRouter } from 'react-router'

// tslint:disable-next-line: typedef
export const ScrollToTop: React.ComponentClass = withRouter(
  ({ children, location }: any): JSX.Element => {
    React.useEffect(() => window.scrollTo(0, 0), [location.pathname])

    return <>{children}</>
  },
)
