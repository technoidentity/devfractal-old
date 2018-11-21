import * as React from 'react'

export interface LabelProps {
  readonly children: React.ReactChild
}

export const Label: React.SFC<LabelProps> = ({ children }) => (
  <div className="label">{children}</div>
)
