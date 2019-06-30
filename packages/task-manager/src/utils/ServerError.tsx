import React from 'react'

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
