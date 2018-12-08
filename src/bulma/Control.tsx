import classNames from 'classnames'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
}

type ControlClassesArgs = ControlHelpers & {
  readonly size: 'small' | 'medium' | 'large'
}

export const controlClasses: (props: ControlClassesArgs) => string = ({
  loading,
  expanded,
  size,
}) =>
  classNames('control', {
    [`is-loading`]: loading,
    [`is-expanded`]: expanded,
    [`is-${size}`]: size,
  })
