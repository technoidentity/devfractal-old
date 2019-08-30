import React from 'react'
import * as t from 'technoidentity-spec'
import { cast, keys } from 'technoidentity-utils'

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

const ServerErrors = t.union([t.string, SingleError, Errors, ValidationErrors])
type ServerErrors = t.TypeOf<typeof ServerErrors>

export interface ServerErrorViewProps {
  readonly error?: ServerErrors
}

function serverError(error: ServerErrors): string {
  cast(ServerErrors, error)

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

export const ServerError: React.FC<ServerErrorViewProps> = ({ error }) => (
  <>
    {error && (
      <article className="message is-danger">
        <div className="message-body">{serverError(error)}</div>
      </article>
    )}
  </>
)
