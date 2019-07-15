import * as t from 'io-ts'
import React from 'react'
import { cast, keys } from 'technoidentity-utils'
import { useRouter } from '../lib'

// tslint:disable typedef
const SingleError = t.string
const Errors = t.readonlyArray(t.string)

interface ValidationErrors
  extends Record<
    string,
    t.TypeOf<typeof SingleError> | t.TypeOf<typeof Errors> | ValidationErrors
  > {}

const ValidationErrors: t.Type<ValidationErrors> = t.recursion(
  'ValidationErrors',
  () => t.record(t.string, t.union([SingleError, Errors, ValidationErrors])),
)

const ServerError = t.union([t.string, SingleError, Errors, ValidationErrors])
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
    return error
  }

  if (Errors.is(error)) {
    return error.join('\n')
  }
  if (ValidationErrors.is(error)) {
    return keys(error.validationErrors)
      .map(k => `${k}: ${serverError(error.validationErrors[k])}`)
      .join('\n')
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
