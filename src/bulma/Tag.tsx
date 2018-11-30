import * as React from 'react'
import classNames from 'classnames'

type TagColor =
  | 'black'
  | 'dark'
  | 'light'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'

type TagSize = 'normal' | 'medium' | 'large'

type TagModifier = 'rounded' | 'delete'

interface TagProps {
  readonly size?: TagSize
  readonly color?: TagColor
  readonly modifier?: TagModifier
}

export class Tag extends React.Component<TagProps> {
  render(): JSX.Element {
    const {
      size,
      color,
      modifier,
      children,
      // tslint:disable-next-line:no-this
    } = this.props

    const classes: string = classNames('tag', {
      [`is-${size}`]: size,
      [`is-${modifier}`]: modifier,
      [`is-${color}`]: color,
    })
    return <span className={classes}>{children}</span>
  }
}
