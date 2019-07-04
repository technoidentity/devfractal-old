import * as t from 'io-ts'
import React from 'react'
import { Message, MessageBody, Text } from 'technoidentity-devfractal'
import { jsonStringify, req, typeInvariant } from 'technoidentity-utils'
import { useRouter } from './RouterUtils'

const SingleError = req({ error: t.string })
const Errors = req({ errors: t.readonlyArray(t.string) })
const ErrorObject = req({ errors: t.record(t.string, t.any) })

export const ServerError = t.union([t.string, SingleError, Errors, ErrorObject])

export type ServerError = t.TypeOf<typeof ServerError>

export interface ServerErrorViewProps {
  readonly error?: ServerError
}

// @TODO: may be returning string | string[] is a better idea than using join?
function serverError(error: ServerError): string {
  typeInvariant(ServerError, error)

  if (t.string.is(error)) {
    return error
  }

  if (SingleError.is(error)) {
    return error.error
  }

  if (Errors.is(error)) {
    return error.errors.join('\n')
  }

  if (ErrorObject.is(error)) {
    return Object.entries(error)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
  }

  throw new Error(`Unknown error: ${jsonStringify(error)}`)
}

export const ServerErrorView: React.FC<ServerErrorViewProps> = ({ error }) => (
  <>
    {error && (
      <Message variant="danger">
        <MessageBody>{serverError(error)}</MessageBody>
      </Message>
    )}
  </>
)

export const Loading: React.FC = () => (
  <Text textSize="1" textColor="info">
    Loading....
  </Text>
)

export interface ErrorViewProps {
  readonly error: Error | ServerError
}

// @TODO: This must use server error, if error.response.data is not undefined.
export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => {
  const err: any = error

  if (err.response && err.response.data) {
    return <ServerErrorView error={err.response.data} />
  }

  if (err.message) {
    return (
      <Text textSize="1" textColor="danger">
        {err.message}
      </Text>
    )
  }

  throw new Error(`Unknown error: ${jsonStringify(err)}`)
}

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return (
    <Text
      textSize="1"
      color="danger"
    >{`path ${location.pathname} did not match any route`}</Text>
  )
}
