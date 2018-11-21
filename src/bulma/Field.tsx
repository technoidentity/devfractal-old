import * as React from 'react'

export interface FieldProps {
  readonly children: React.ReactNode
}

export const Field: React.SFC<FieldProps> = ({ children }) => (
  <div className="field">{children}</div>
)
