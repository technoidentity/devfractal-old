import * as React from 'react'

interface BoxProps {
  readonly children: React.ReactNode
}

export const Box: React.SFC<BoxProps> = ({ children }) => (
  <div className="box">{children}</div>
)
