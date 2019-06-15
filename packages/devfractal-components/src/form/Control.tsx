import React from 'react'
import { ControlWrapper, ControlWrapperProps } from '../lib'

export type ControlProps = Omit<ControlWrapperProps, 'noControl'>

export const Control: React.FC<ControlProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>{children}</ControlWrapper>
)

// tslint:disable-next-line: no-default-export
export default Control
