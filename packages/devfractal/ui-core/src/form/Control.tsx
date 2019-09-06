import React from 'react'
import { ControlWrapper, ControlWrapperProps } from './ControlWrapper'

export type ControlProps = Omit<ControlWrapperProps, 'noControl'>

export const Control: React.FC<ControlProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>{children}</ControlWrapper>
)
