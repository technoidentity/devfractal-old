import React from 'react'
import { Title } from 'technoidentity-devfractal'

export const HeadTitle: React.FC = ({ children }) => (
  <Title size="4" textColor="info">
    {children}
  </Title>
)
