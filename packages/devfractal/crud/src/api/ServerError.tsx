import React from 'react'
import { useAPIComponents } from 'srtp-core'
import * as t from 'srtp-utils'
import { cast, keys } from 'srtp-utils'

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

export interface ServerErrorProps {
  readonly error?: ServerErrors
}

export const ServerError: React.FC<ServerErrorProps> = ({ error }) => {
  const { ServerErrorsView } = useAPIComponents()

  return (
    <>{error && <ServerErrorsView>{serverError(error)}</ServerErrorsView>}</>
  )
}
