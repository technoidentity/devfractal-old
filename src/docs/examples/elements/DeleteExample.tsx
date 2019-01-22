import React, { useState } from 'react'
import { logger } from '../common'
import {
  Box,
  Delete,
  Message,
  MessageBody,
  MessageHeader,
  Notification,
  Section,
  Tag,
  Tags,
  Title,
} from '../devfractal'

export const DynamicDeleteExample: React.SFC = () => {
  const [click, setDeleted] = useState('click Me!')

  return (
    <Section>
      <Title>Dynamic Delete({click})</Title>
      <Delete onClick={() => setDeleted('Deleted')} />
    </Section>
  )
}

export const DefaultDeleteExample: React.SFC = () => (
  <Section>
    <Title>Default Delete</Title>
    <Delete />
  </Section>
)

export const DeleteSizeExample: React.SFC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <Delete size="small" />
      <Delete />
      <Delete size="medium" />
      <Delete size="large" />
    </Box>
  </Section>
)

export const DeleteCombinationsExample: React.SFC = () => (
  <Section>
    <Title>Combinations</Title>
    <Box>
      <Tags addons>
        <Tag variant="success">
          Hello World
          <Delete />
        </Tag>
      </Tags>
      <Notification variant="danger">
        <Delete
          className="is-large"
          onClick={() => {
            logger('DeleteExample onClick')
          }}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
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
    </Box>
  </Section>
)

export const DeleteExample: React.SFC = () => (
  <>
    <DynamicDeleteExample />
    <DefaultDeleteExample />
    <DeleteSizeExample />
    <DeleteCombinationsExample />
  </>
)
