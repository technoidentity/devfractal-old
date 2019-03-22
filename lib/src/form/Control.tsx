import React from 'react'
import { Omit } from '../utils/types'
import { ControlWrapper, ControlWrapperProps } from './ControlHelpers'

export type ControlProps = Omit<ControlWrapperProps, 'noControl'>

export const Control: React.FC<ControlProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>{children}</ControlWrapper>
)
