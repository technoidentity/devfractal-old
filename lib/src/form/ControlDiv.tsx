import React from 'react'
import { Helpers, removeHelpers } from '..'
import {
  ControlHelpers,
  IconHelpers,
  removeControlHelpers,
  removeIconHelpers,
} from './internal'

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
