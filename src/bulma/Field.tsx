import * as React from 'react'

export interface FieldProps {
  readonly children: ReadonlyArray<JSX.Element>
}

export const Field: React.SFC<FieldProps> = ({ children }) => (
  <div className="field">{children}</div>
)
