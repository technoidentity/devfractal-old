import * as React from 'react'
import { Notification } from '../Notification'
import { Delete } from '../Delete'

export const NotificationExample: React.SFC = () => (
  <div>
    <Notification className="is-info">
      Bold notification blocks, to alert your users of something Bold
      notification blocks, to alert your users of something Bold notification
      blocks, to alert your users of something
      <Delete />
    </Notification>
    <Notification color="primary">
      Bold notification blocks, to alert your users of something Bold
      notification blocks, to alert your users of something Bold notification
      blocks, to alert your users of something
      <Delete />
    </Notification>
  </div>
)
