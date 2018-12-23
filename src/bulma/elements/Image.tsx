import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

type FixedSquaredImageSize =
  | '16x16'
  | '24x24'
  | '32x32'
  | '48x48'
  | '64x64'
  | '96x96'
  | '128x128'

type ResponsiveImageRatio =
  | 'square'
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'

interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    CommonHelpers {
  readonly size?: FixedSquaredImageSize
  readonly responsiveImageRatio?: ResponsiveImageRatio
  readonly rounded?: boolean
}

export const Image: React.SFC<ImageProps> = ({
  size,
  children,
  responsiveImageRatio,
  rounded,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)

  const classes: string = classNames('image', {
    [`is-${size}`]: size,
    [`is-${responsiveImageRatio}`]: responsiveImageRatio,
  })

  const imgClasses: string = classNames(
    { [`is-rounded`]: rounded },
    className,
    commonHelpersClasses(props),
  )

  return (
    <figure className={classes}>
      <img {...propsCommonHelpersRemoved} className={imgClasses} />
    </figure>
  )
}
