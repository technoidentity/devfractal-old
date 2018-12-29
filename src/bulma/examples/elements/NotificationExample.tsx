import React from 'react'
import { Box, Delete, Notification, Title } from '../../elements'
import { Section } from '../../layout'

export const NotificationExample: React.SFC = () => (
  <>
    <Section>
      <Title>Default Notification</Title>
      <Box>
        <Notification>
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
        </Notification>
      </Box>
    </Section>
    <Section>
      <Title>Colors</Title>
      <Box>
        <Notification variant="primary">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="success">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="warning">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="danger">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="white">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="black">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="dark">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
        <Notification variant="light">
          Bold notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something Bold
          notification blocks, to alert your users of something
          <Delete />
        </Notification>
      </Box>
    </Section>
  </>
)
