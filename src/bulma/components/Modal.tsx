import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly active?: boolean
}

export const Modal: React.SFC<ModalProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'modal',
    {
      [`is-active`]: active,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface ModalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const ModalCard: React.SFC<ModalCardProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'modal-card',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface ModalHeadProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    CommonHelpers {}
export const ModalCardHead: React.SFC<ModalHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'modal-card-head',
    className,
    commonHelpersClasses(props),
  )
  return (
    <header {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </header>
  )
}

interface ModalCardTitleProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const ModalCardTitle: React.SFC<ModalCardTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message-card-title',
    className,
    commonHelpersClasses(props),
  )
  return (
    <p {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </p>
  )
}

interface ModalCardBodyProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const ModalCardBody: React.SFC<ModalCardBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message-card-body',
    className,
    commonHelpersClasses(props),
  )
  return (
    <section {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </section>
  )
}

interface ModalCardFootProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const ModalCardFoot: React.SFC<ModalCardFootProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message-card-foot',
    className,
    commonHelpersClasses(props),
  )
  return (
    <footer {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </footer>
  )
}

interface ModalBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const ModalBackground: React.SFC<ModalBackgroundProps> = ({
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'modal-background',
    className,
    commonHelpersClasses(props),
  )
  return <div {...propsCommonHelpersRemoved} className={classes} />
}

interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const ModalContent: React.SFC<ModalContentProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message-content',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface ModalCloseProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    CommonHelpers {}

export const ModalClose: React.SFC<ModalCloseProps> = ({
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'modal-close',
    className,
    commonHelpersClasses(props),
  )
  return <button {...propsCommonHelpersRemoved} className={classes} />
}
