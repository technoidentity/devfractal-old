import { faUpload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { classNamesHelper, Helpers } from '../base'
import { Icon } from '../visual'

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
  /**
   * You can style the file element by appending color(variant) modifiers
   */
  readonly variant?: FileVariant
  readonly size?: FileSize

  /**
   * To align CTA(call-to-action)
   */
  readonly alignment?: FileAlignment
  /**
   * To have a boxed block
   */
  readonly boxed?: boolean

  /**
   * To expand the name to fill up space
   */
  readonly fullWidth?: boolean

  readonly fileLabel?: string

  /**
   * You can add a placeholder for the selected file name.
   */
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
