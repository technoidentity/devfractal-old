import * as React from 'react'
import { Column, Columns } from '../../columns'
import { Notification } from '../../elements'

export const NestingColumn: React.SFC = () => (
  <div>
    <Columns>
      <Column>
        <Notification variant="info">First column</Notification>
        <Columns>
          <Column>
            <Notification variant="info">First nested column</Notification>
          </Column>
          <Column>
            <Notification variant="info">Second nested column</Notification>
          </Column>
        </Columns>
      </Column>
      <Column>
        <Notification className="is-danger">Second column</Notification>
        <Columns>
          <Column>
            <Notification variant="danger">50%</Notification>
          </Column>
          <Column>
            <Notification variant="danger">Auto</Notification>
          </Column>
          <Column>
            <Notification variant="danger">Auto</Notification>
          </Column>
        </Columns>
      </Column>
    </Columns>
  </div>
)
