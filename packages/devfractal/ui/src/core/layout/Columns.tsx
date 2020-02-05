import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type ColumnsResponsive =
  | 'mobile'
  | 'desktop'
  | 'tablet'
  | 'widescreen'
  | 'fullhd'

export interface ColumnsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  /**
   * Display columns based on each viewport size
   */
  readonly responsiveness?: ColumnsResponsive
  /**
   * To remove space between the columns
   */
  readonly gapLess?: boolean
  /**
   * To align columns vertically
   */
  readonly verticallyCentered?: boolean
  /**
   * To add more column elements than would fit in a single row
   */
  readonly multiline?: boolean
  /**
   * To create horizontal space around column elements
   */
  readonly columnCentered?: boolean
}

export const Columns: React.FC<ColumnsProps> = ({
  children,
  responsiveness,
  gapLess: gapless,
  multiline,
  verticallyCentered,
  columnCentered,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'columns', {
    [`is-${responsiveness}`]: responsiveness,
    'is-gapless': gapless,
    'is-vcentered': verticallyCentered,
    'is-multiline': multiline,
    'is-centered': columnCentered,
  })

  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
