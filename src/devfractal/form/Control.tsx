import React from 'react'
import { Omit } from '../../types'
import { ControlWrapper, ControlWrapperProps } from './internal'

export type ControlProps = Omit<ControlWrapperProps, 'noControl'>

export const Control: React.SFC<ControlProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>{children}</ControlWrapper>
)
