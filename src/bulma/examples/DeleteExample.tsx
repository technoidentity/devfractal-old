import React from 'react'
import { Message, MessageBody, MessageHeader } from '../components/Message'
import { Delete } from '../elements/Delete'
import { Notification } from '../elements/Notification'
import { Section } from '../layout/Section'
import { logger } from './common'

export const DeleteExample: React.SFC = () => (
  <Section>
    <Notification variant="danger">
      <Delete className="is-large" onClick={() => logger('clicked')} />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor
      sit amet, consectetur adipiscing elit
    </Notification>
    <Message variant="info">
      <MessageHeader>
        Info
        <Delete size="medium" />
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
  </Section>
)
