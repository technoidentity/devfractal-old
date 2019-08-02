import {
  Box,
  Delete,
  Message,
  MessageBody,
  MessageHeader,
  Section,
  Title,
} from 'devfractal-ui-core'
import React from 'react'

export const SimpleMessageExample: React.FC = () => (
  <Section>
    <Title>Simple Message</Title>
    <Box>
      <Message>
        <MessageHeader>
          Hello World
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
    </Box>
  </Section>
)

export const MessageColorsExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <Box>
      <Message variant="primary">
        <MessageHeader>
          Primary
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="info">
        <MessageHeader>
          Info
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="link">
        <MessageHeader>
          Link
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="danger">
        <MessageHeader>
          Danger
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="warning">
        <MessageHeader>
          Warning
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="black">
        <MessageHeader>
          Black
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="light">
        <MessageHeader>
          Light
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="dark">
        <MessageHeader>
          Dark
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="white">
        <MessageHeader>
          White
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
    </Box>
  </Section>
)

export const MessageBodyExample: React.FC = () => (
  <Section>
    <Title>Message body only</Title>
    <Box>
      <Message variant="dark">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="white">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="primary">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="success">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="info">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="link">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="warning">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="danger">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="light">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message variant="black">
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
    </Box>
  </Section>
)

export const MessageSizesExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <Message size="small">
        <MessageHeader>
          Small message
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message>
        <MessageHeader>
          Normal message
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message size="medium">
        <MessageHeader>
          Medium message
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
      <Message size="large">
        <MessageHeader>
          Large message
          <Delete />
        </MessageHeader>
        <MessageBody>
          To check if x is assignable to y, we first look at the parameter list.
          Each parameter in x must have a corresponding parameter in y with a
          compatible type. Note that the names of the parameters are not
          considered, only their types. In this case, every parameter of x has a
          corresponding compatible parameter in y, so the assignment is allowed
        </MessageBody>
      </Message>
    </Box>
  </Section>
)

export const MessageExample: React.FC = () => (
  <>
    <SimpleMessageExample />
    <MessageColorsExample />
    <MessageBodyExample />
    <MessageSizesExample />
  </>
)
