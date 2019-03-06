import React from 'react'
import { Box, Delete, Notification, Section, Title } from '../devfractal'

export const BasicNotificationExample: React.FC = () => (
  <Section>
    <Title>Default Notification</Title>
    <Box>
      <Notification>
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
      </Notification>
    </Box>
  </Section>
)

export const NotificationColorExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <Box>
      <Notification variant="primary">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="success">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="warning">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="danger">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="white">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="black">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="dark">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
      <Notification variant="light">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </Notification>
    </Box>
  </Section>
)

export const NotificationExample: React.FC = () => (
  <>
    <BasicNotificationExample />
    <NotificationColorExample />
  </>
)
