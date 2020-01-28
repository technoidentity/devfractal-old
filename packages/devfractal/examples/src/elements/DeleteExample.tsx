import {
  Box,
  Delete as DeleteComponent,
  Message,
  MessageBody,
  MessageHeader,
  Notification,
  Section,
  Tag,
  Tags,
  Title,
} from '@stp/ui-core'
import React from 'react'

const DynamicDeleteExample: React.FC = () => {
  const [click, setDeleted] = React.useState('click Me!')

  return (
    <Section>
      <Title>Dynamic Delete({click})</Title>
      <DeleteComponent onClick={() => setDeleted('Deleted')} />
    </Section>
  )
}

const DefaultDeleteExample: React.FC = () => (
  <Section>
    <Title>Default Delete</Title>
    <DeleteComponent />
  </Section>
)

const DeleteSizeExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <DeleteComponent size="small" />
      <DeleteComponent />
      <DeleteComponent size="medium" />
      <DeleteComponent size="large" />
    </Box>
  </Section>
)

const DeleteCombinationsExample: React.FC = () => (
  <Section>
    <Title>Combinations</Title>
    <Box>
      <Tags addons>
        <Tag variant="success">
          Hello World
          <DeleteComponent />
        </Tag>
      </Tags>
      <Notification variant="danger">
        <DeleteComponent
          className="is-large"
          onClick={() => {
            console.log('DeleteExample onClick')
          }}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </Notification>
      <Message variant="info">
        <MessageHeader>
          Info
          <DeleteComponent size="medium" />
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

export const Delete: React.FC = () => (
  <>
    <DynamicDeleteExample />
    <DefaultDeleteExample />
    <DeleteSizeExample />
    <DeleteCombinationsExample />
  </>
)
