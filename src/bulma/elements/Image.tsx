import classNames from 'classnames'
import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

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

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Helpers {
  readonly size?: FixedSquaredImageSize
  readonly responsiveImageRatio?: ResponsiveImageRatio
  readonly rounded?: boolean
}

export const Image: React.SFC<ImageProps> = ({
  size,
  children,
  responsiveImageRatio,
  rounded,
  ...props
}) => {
  const classes: string = classNames('image', {
    [`is-${size}`]: size,
    [`is-${responsiveImageRatio}`]: responsiveImageRatio,
  })

  const imgClasses: string = classNamesHelper(props, {
    [`is-rounded`]: rounded,
  })

  return (
    <figure className={classes}>
      <Div as="img" {...props} className={imgClasses} />
    </figure>
  )
}
