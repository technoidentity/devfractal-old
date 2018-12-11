import * as React from 'react'
import classNames from 'classnames'
import { Label } from './Label'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

type FieldGroupModifier = 'grouped-centered' | 'grouped-right'

type FieldAddonModifier = 'addons' | 'addons-centered' | 'addons-right'

type FieldSize = 'narrow' | 'expanded'

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly grouped?: boolean
  readonly horizontal?: boolean
  readonly groupedMultiline?: boolean
  readonly fieldSize?: FieldSize
  readonly groupModifier?: FieldGroupModifier
  readonly addonsModifier?: FieldAddonModifier
}

export const Field: React.SFC<FieldProps> = ({
  children,
  grouped,
  horizontal,
  groupedMultiline,
  groupModifier,
  fieldSize,
  addonsModifier,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'field',
    {
      [`is-grouped`]:
        grouped || horizontal || groupedMultiline || groupModifier,
      [`is-horizontal`]: horizontal,
      [`is-${fieldSize}`]: fieldSize,
      [`is-grouped-multiline`]: groupedMultiline,
      [`is-${groupModifier}`]: groupModifier,
      [`has-${addonsModifier}`]: addonsModifier,
    },
    className,
    commonHelpersClasses(props),
  )

  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}

type FieldLabelSize = 'small' | 'normal' | 'medium' | 'large'

export interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly fieldLabelSize?: FieldLabelSize
}

export const FieldLabel: React.SFC<FieldLabelProps> = ({
  children,
  fieldLabelSize,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'field-label',
    [`is-${fieldLabelSize}`],
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      <Label>{children}</Label>
    </div>
  )
}

export interface FieldBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const FieldBody: React.SFC<FieldBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'field-body',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      <div className="field">
        <div className="control">{children}</div>
      </div>
    </div>
  )
}

export interface FieldSetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    CommonHelpers {}

export const FieldSet: React.SFC<FieldSetProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(className, commonHelpersClasses(props))
  return (
    <fieldset {...propsHelpersRemoved} {...props} className={classes}>
      <div className="field">{children}</div>
    </fieldset>
  )
}
