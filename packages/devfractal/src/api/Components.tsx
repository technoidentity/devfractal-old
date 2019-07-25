import React from 'react'
import { useRouter } from '../lib'

export const Loading: React.FC = () => (
  <h1 className="is-text is-size-1 is-info">Loading....</h1>
)

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return <h1>{`path ${location.pathname} did not match any route`}</h1>
}

export interface ErrorViewProps {
  readonly error: Error
}

// @TODO: This must use server error, if error.response.data is not undefined.
export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
  <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
)
