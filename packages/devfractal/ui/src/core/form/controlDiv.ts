import React from 'react'
import { Helpers, removeHelpers } from '../base'
import { ControlHelpers, removeControlHelpers } from './controlHelpers'
import { IconHelpers, removeIconHelpers } from './iconHelpers'

export interface AllControlHelpers
  extends Helpers,
    ControlHelpers,
    IconHelpers {}

type ControlType =
  | 'button'
  | 'input'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea'
  | 'file'
export interface ControlDivProps
  extends React.AllHTMLAttributes<HTMLElement>,
    AllControlHelpers {
  readonly as?: ControlType
}

export const ControlDiv: React.FC<ControlDivProps> = ({
  as = 'input',
  className,
  children,
  ...props
}) =>
  React.createElement(
    as,
    {
      ...removeIconHelpers(removeControlHelpers(removeHelpers(props))),
      className,
    },
    children,
  )
