import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type ColumnsResponsive =
  | 'mobile'
  | 'desktop'
  | 'tablet'
  | 'widescreen'
  | 'fullhd'

export interface ColumnsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly responsiveness?: ColumnsResponsive
  readonly gapless?: boolean
  readonly verticallyCentered?: boolean
  readonly multiline?: boolean
  readonly columnCentered?: boolean
}

export const Columns: React.SFC<ColumnsProps> = ({
  children,
  responsiveness,
  gapless,
  multiline,
  verticallyCentered,
  columnCentered,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'columns', {
    [`is-${responsiveness}`]: responsiveness,
    [`is-gapless`]: gapless,
    [`is-vcentered`]: verticallyCentered,
    [`is-multiline`]: multiline,
    [`is-centered`]: columnCentered,
  })

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
