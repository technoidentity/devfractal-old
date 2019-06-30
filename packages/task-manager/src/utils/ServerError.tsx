import React from 'react'

export const ServerError: React.FC<{
  readonly serverError?: string
}> = ({ serverError }) => (
  <>
    {serverError && (
      <article className="message is-danger">
        <div className="message-body">{serverError}</div>
      </article>
    )}
  </>
)
