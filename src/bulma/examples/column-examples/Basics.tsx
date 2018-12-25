import * as React from 'react'
import { Column, Columns } from '../../columns'
import { Notification } from '../../elements'

export const BasicColumn: React.SFC = () => (
  <Columns>
    <Column>
      <Notification variant="primary">First column</Notification>
    </Column>
    <Column>
      <Notification variant="primary">Second column</Notification>
    </Column>
    <Column>
      <Notification variant="primary">Third column</Notification>
    </Column>
    <Column>
      <Notification variant="primary">Fourth column</Notification>
    </Column>
  </Columns>
)
