import * as React from 'react'
import { Delete } from '../Delete'
import { Message, MessageHeader, MessageBody } from '../components/Message'
import { Notification } from '../Notification'

export const DeleteExample: React.SFC = () => (
  <div>
    <Notification color="danger">
      <Delete />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor
      sit amet, consectetur adipiscing elit
    </Notification>
    <Message color="info">
      <MessageHeader>
        Info
        <Delete />
      </MessageHeader>
      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem.
      </MessageBody>
    </Message>
  </div>
)
