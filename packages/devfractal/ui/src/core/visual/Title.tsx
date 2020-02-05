import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type TitleSize = '1' | '2' | '3' | '4' | '5' | '6'

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Helpers {
  /**
   * Resize the title element
   */
  readonly size?: TitleSize
  /**
   * You can maintain the normal spacing between titles and subtitles if you use the is-spaced modifier on the first element
   */
  readonly spaced?: boolean
}

export const Title: React.FC<TitleProps> = ({
  size,
  spaced,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'title', {
    [`is-${size}`]: size,
    'is-spaced': spaced,
  })

  return (
    <El as="h1" {...props} className={classes}>
      {children}
    </El>
  )
}
