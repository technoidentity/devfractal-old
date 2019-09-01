import React from 'react'
import { classNamesHelper, El, Helpers, TextHelpers } from '../base'

type HeaderTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TextTags = HeaderTags | 'span' | 'div' | 'p'

export interface TextProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly as?: TextTags

  readonly color?: TextHelpers['textColor']
  readonly backgroundColor?: TextHelpers['textColor']
  readonly alignment?: TextHelpers['textAlignment']
  readonly transformation?: TextHelpers['textTransformation']
  readonly weight?: TextHelpers['textWeight']
  readonly responsiveSize?: TextHelpers['textResponsiveSize']
  readonly responsiveAlignment?: TextHelpers['textResponsiveAlignment']
}

export const Text: React.FC<TextProps> = ({
  as,
  children,
  color,
  backgroundColor,
  alignment,
  transformation,
  weight,
  responsiveSize,
  responsiveAlignment,
  ...props
}) => {
  // tslint:disable-next-line:typedef
  const localProps = {
    textColor: color,
    textBackgroundColor: backgroundColor,
    textAlignment: alignment,
    textTransformation: transformation,
    textWeight: weight,
    textResponsiveSize: responsiveSize,
    textResponsiveAlignment: responsiveAlignment,
    ...props,
  }
  return (
    <El as={as} {...localProps} className={classNamesHelper(localProps)}>
      {children}
    </El>
  )
}
