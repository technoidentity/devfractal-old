import { Title } from '@stp/devfractal'
import React from 'react'

export const HeadTitle: React.FC = ({ children }) => (
  <Title size="4" textColor="info">
    {children}
  </Title>
)
