import React from 'react'
import { useRouter } from './RouterUtils'

export interface ServerErrorProps {
  readonly error?: string
}

export const ServerError: React.FC<ServerErrorProps> = ({ error }) => (
  <>
    {error && (
      <article className="message is-danger">
        <div className="message-body">{error}</div>
      </article>
    )}
  </>
)

export const Loading: React.FC = () => (
  <h1 className="is-text is-size-1 is-info">Loading....</h1>
)

export interface ErrorViewProps {
  readonly error: Error
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
  <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
)

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return <h1>{`path ${location.pathname} did not match any route`}</h1>
}
