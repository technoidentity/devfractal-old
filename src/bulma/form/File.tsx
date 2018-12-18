import * as React from 'react'

import classNames from 'classnames'

type FileVariant =
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

interface FileProps extends React.HTMLAttributes<HTMLElement> {
  readonly variant?: FileVariant
  readonly size?: FileSize
  readonly alignment?: FileAlignment
  readonly modifier?: FileModifier
  readonly name?: boolean
  readonly fileLabel?: string
}

export const File: React.SFC<FileProps> = ({
  variant,
  size,
  alignment,
  modifier,
  children,
  fileLabel,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'file',
    {
      [`is-${variant}`]: variant,
      [`is-${size}`]: size,
      [`is-${alignment}`]: alignment,
      [`is-${modifier}`]: modifier,
      [`has-name`]: name,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      <label className="file-label">
        <input className="file-input" type="file" name="upload" />
        <span className="file-cta">
          <span className="file-label">{fileLabel}</span>
        </span>
        <span className="file-name">{children}</span>
      </label>
    </div>
  )
}
