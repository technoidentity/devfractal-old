import * as t from 'io-ts'
import React from 'react'
import { cast } from 'technoidentity-utils'
import { useRouter } from '../lib'

// tslint:disable typedef
const SingleError = t.readonly(t.type({ error: t.string }))
const Errors = t.readonly(t.type({ errors: t.readonlyArray(t.string) }))
const ServerError = t.union([t.string, SingleError, Errors])

type ServerError = t.TypeOf<typeof ServerError>

export interface ServerErrorViewProps {
  readonly error?: ServerError
}

function serverError(error: ServerError): string {
  cast(ServerError, error)

  if (t.string.is(error)) {
    return error
  }

  if (SingleError.is(error)) {
    return error.error
  }

  if (Errors.is(error)) {
    return error.errors.join('\n')
  }

  return 'FATAL: unknown server error'
}

export const ServerErrorView: React.FC<ServerErrorViewProps> = ({ error }) => (
  <>
    {error && (
      <article className="message is-danger">
        <div className="message-body">{serverError(error)}</div>
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

// @TODO: This must use server error, if error.response.data is not undefined.
export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
  <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
)

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return <h1>{`path ${location.pathname} did not match any route`}</h1>
}
