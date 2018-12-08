import * as React from 'react'
import classNames from 'classnames'
import {
  Helpers,
  helpersClasses,
  HelpersRemoved,
  removeHelpers,
} from './helpers'

type ColumnsResponsive =
  | 'mobile'
  | 'desktop'
  | 'tablet'
  | 'widescreen'
  | 'fullhd'

interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
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
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'columns',
    {
      [`is-${responsiveness}`]: responsiveness,
      [`is-gapless`]: gapless,
      [`is-multiline`]: multiline,
      [`is-centered`]: columnCentered,
    },
    className,
    helpersClasses(props),
  )

  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}
