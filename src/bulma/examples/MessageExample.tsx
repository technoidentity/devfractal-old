import * as React from 'react'
import { Message, MessageHeader, MessageBody } from '../components/Message'
export const MessageExample: React.SFC = () => (
  <Message className="is-primary" size="large">
    <MessageHeader>Hello World</MessageHeader>
    <MessageBody>
      To check if x is assignable to y, we first look at the parameter list.
      Each parameter in x must have a corresponding parameter in y with a
      compatible type. Note that the names of the parameters are not considered,
      only their types. In this case, every parameter of x has a corresponding
      compatible parameter in y, so the assignment is allowed.
    </MessageBody>
  </Message>
)
