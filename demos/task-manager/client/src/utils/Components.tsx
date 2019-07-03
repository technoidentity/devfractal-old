import * as t from 'io-ts'
import React from 'react'
import { Message, MessageBody, Text } from 'technoidentity-devfractal'
import { typeInvariant } from 'technoidentity-utils'
import { useRouter } from './RouterUtils'

const SingleError = t.readonly(t.type({ error: t.string }))
const Errors = t.readonly(t.type({ errors: t.readonlyArray(t.string) }))
const ServerError = t.union([t.string, SingleError, Errors])

type ServerError = t.TypeOf<typeof ServerError>

export interface ServerErrorViewProps {
  readonly error?: ServerError
}

function serverError(error: ServerError): string {
  typeInvariant(ServerError, error)

  if (t.string.is(error)) {
    return error
  }

  if (SingleError.is(error)) {
    return error.error
  }

  return error.errors.join('\n')
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
  readonly error: Error
}

// @TODO: This must use server error, if error.response.data is not undefined.
export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
  <Text textSize="1" textColor="danger">
    {error.message}
  </Text>
)

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return <Text>{`path ${location.pathname} did not match any route`}</Text>
}
