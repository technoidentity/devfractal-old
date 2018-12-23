import * as React from 'react'
import { Helpers, removeHelpers } from '../modifiers'
import { removeControlHelpers, ControlHelpers } from './ControlHelpers'
import { removeIconHelpers, IconHelpers } from './iconHelpers'

interface ControlDivProps
  extends React.AllHTMLAttributes<HTMLElement>,
    Helpers,
    ControlHelpers,
    IconHelpers {
  readonly as?:
    | 'button'
    | 'input'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea'
    | 'file'
}

export const ControlDiv: React.SFC<ControlDivProps> = ({
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
