import React from 'react'
import { Delete, Notification } from '../../elements'

export const NotificationExample: React.SFC = () => (
  <div>
    <Notification className="is-info">
      Bold notification blocks, to alert your users of something Bold
      notification blocks, to alert your users of something Bold notification
      blocks, to alert your users of something
      <Delete />
    </Notification>
    <Notification variant="primary">
      Bold notification blocks, to alert your users of something Bold
      notification blocks, to alert your users of something Bold notification
      blocks, to alert your users of something
      <Delete />
    </Notification>
  </div>
)
