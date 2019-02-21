import * as t from 'io-ts'
import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'
import { optionalProps, warnProps } from '../utils'

// tslint:disable-next-line: typedef
const LabelSize = t.keyof({
  small: true,
  medium: true,
  large: true,
})

export type LabelSize = t.TypeOf<typeof LabelSize>

// tslint:disable-next-line: typedef
const SLabelProps = optionalProps({ size: LabelSize })

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers,
    t.TypeOf<typeof SLabelProps> {}

export const Label: React.SFC<LabelProps> = args => {
  const { size, children, ...props } = warnProps(SLabelProps, args)

  const classes: string = classNamesHelper(props, 'label', {
    [`is-${size}`]: size,
  })

  return (
    <Div as="label" {...props} className={classes}>
      {children}
    </Div>
  )
}
