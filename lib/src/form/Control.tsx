import { ControlWrapper, ControlWrapperProps } from 'form'
import React from 'react'
import { Omit } from 'utils'

export type ControlProps = Omit<ControlWrapperProps, 'noControl'>

export const Control: React.FC<ControlProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>{children}</ControlWrapper>
)

// tslint:disable-next-line: no-default-export
export default Control
