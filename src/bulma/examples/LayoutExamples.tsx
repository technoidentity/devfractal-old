import * as React from 'react'
import { Columns } from '../Columns'
import { Column } from '../Column'

export const LayoutExample: React.SFC = () => (
  <div className="section">
    <div className="container">
      <Columns>
        <Column>
          <p className="notification is-info">First column</p>
          <Columns>
            <Column>
              <p className="notification is-info">First nested column</p>
            </Column>
            <Column>
              <p className="notification is-info">Second nested column</p>
            </Column>
          </Columns>
        </Column>
        <Column>
          <p className="notification is-danger">Second column</p>
          <Columns>
            <Column>
              <p className="notification is-danger">50%</p>
            </Column>
            <Column>
              <p className="notification is-danger">Auto</p>
            </Column>
            <Column>
              <p className="notification is-danger">Auto</p>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </div>
  </div>
)
