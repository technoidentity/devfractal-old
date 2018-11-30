import * as React from 'react'
import classNames from 'classnames'

type ColumnsResponsive =
  | 'mobile'
  | 'desktop'
  | 'tablet'
  | 'widescreen'
  | 'fullhd'

interface ColumnsProps {
  readonly responsiveness?: ColumnsResponsive
  readonly gapless?: boolean
  readonly multiline?: boolean
  readonly columnCentered?: boolean
}

export const Columns: React.SFC<ColumnsProps> = ({
  children,
  responsiveness,
  gapless,
  multiline,
  columnCentered,
}) => {
  const classes: string = classNames('columns', {
    [`is-${responsiveness}`]: responsiveness,
    [`is-gapless`]: gapless,
    [`is-multiline`]: multiline,
    [`is-centered`]: columnCentered,
  })

  return <div className={classes}>{children}</div>
}
