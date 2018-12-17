import * as React from 'react'
import { Notification } from '../elements/Notification'
import { Delete } from '../elements/Delete'

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
