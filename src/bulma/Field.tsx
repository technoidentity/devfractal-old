import * as React from 'react'

export interface FieldProps {
  readonly children: React.ReactChild
}
export const Field: React.SFC<FieldProps> = ({ children }) => (
  <div className="field">{children}</div>
)
