import React from 'react'
import { Icon } from '../visual'
import { controlClasses, ControlHelpers } from './controlHelpers'

export interface ControlWrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    ControlHelpers {}

export const ControlWrapper: React.FC<ControlWrapperProps> = ({
  noControl,
  children,
  ...props
}) =>
  noControl ? (
    <>{children}</>
  ) : (
    <div className={controlClasses(props)}>
      {children}
      {props.leftIcon && <Icon icon={props.leftIcon} direction="left" />}
      {props.rightIcon && <Icon icon={props.rightIcon} direction="right" />}
    </div>
  )
