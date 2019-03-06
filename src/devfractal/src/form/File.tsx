import { faUpload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { classNamesHelper, Helpers, Icon } from '../lib'

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

export interface FileProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly variant?: FileVariant
  readonly size?: FileSize
  readonly alignment?: FileAlignment
  readonly boxed?: boolean
  readonly fullWidth?: boolean
  readonly fileLabel?: string
  readonly fileName?: boolean
}

export const File: React.FC<FileProps> = ({
  variant,
  size,
  alignment,
  fullWidth,
  boxed,
  children,
  fileLabel,
  fileName,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'file', {
    [`is-${variant}`]: variant,
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    'is-fullwidth': fullWidth,
    'is-boxed': boxed,
    'has-name': fileName,
  })
  return (
    <div {...props} className={classes}>
      <label className="file-label">
        <input className="file-input" type="file" />
        <span className="file-cta">
          <span className="file-icon">
            <Icon icon={faUpload} />
          </span>
          <span className="file-label">{fileLabel}</span>
        </span>
        {fileName && <span className="file-name">{children}</span>}
      </label>
    </div>
  )
}
