import React from 'react'
import { Title } from 'srtp-ui'

export const HeadTitle: React.FC = ({ children }) => (
  <Title size="4" textColor="info">
    {children}
  </Title>
)
