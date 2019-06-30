import React from 'react'

export interface ErrorViewProps {
  readonly error: Error
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
  <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
)
