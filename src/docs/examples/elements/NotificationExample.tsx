import React from 'react'
import {
  Box,
  Delete,
  Notification as NotificationComponent,
  Section,
  Title,
} from '../devfractal'

const BasicNotificationExample: React.FC = () => (
  <Section>
    <Title>Default Notification</Title>
    <Box>
      <NotificationComponent>
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
      </NotificationComponent>
    </Box>
  </Section>
)

const NotificationColorExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <Box>
      <NotificationComponent variant="primary">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="success">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="warning">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="danger">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="white">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="black">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="dark">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
      <NotificationComponent variant="light">
        Bold notification blocks, to alert your users of something Bold
        notification blocks, to alert your users of something Bold notification
        blocks, to alert your users of something
        <Delete />
      </NotificationComponent>
    </Box>
  </Section>
)

export const Notification: React.FC = () => (
  <>
    <BasicNotificationExample />
    <NotificationColorExample />
  </>
)
