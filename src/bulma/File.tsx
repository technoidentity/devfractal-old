import * as React from 'react'
import classNames from 'classnames'

type FileColor =
  | 'white'
  | 'black'
  | 'light'
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type FileSize = 'small' | 'medium' | 'large'

type FileAlignment = 'centered' | 'right'

type FileModifier = 'fullWidth' | 'boxed'

interface FileProps {
  readonly color?: FileColor
  readonly size?: FileSize
  readonly alignment?: FileAlignment
  readonly modifier?: FileModifier
}

export const File: React.SFC<FileProps> = ({
  color,
  size,
  alignment,
  modifier,
  children,
}) => {
  const classes: string = classNames('file', {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    [`is-${modifier}`]: modifier,
  })
  return (
    <div className={classes}>
      <label className="file-label">
        <input className="file-input" type="file" name="upload" />
        <span className="file-cta">
          <span className="file-label">{children}</span>
        </span>
      </label>
    </div>
  )
}
