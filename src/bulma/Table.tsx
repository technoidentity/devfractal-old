import * as React from 'react'

import classNames from 'classnames'
import {
  Helpers,
  HelpersRemoved,
  removeHelpers,
  helpersClasses,
} from './helpers'

interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    Helpers {
  readonly bordered?: boolean
  readonly striped?: boolean
  readonly narrow?: boolean
  readonly hoverable?: boolean
  readonly fullwidth?: boolean
}

export const Table: React.SFC<TableProps> = ({
  children,
  bordered,
  striped,
  narrow,
  hoverable,
  fullwidth,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'table',
    {
      [`is-bordered`]: bordered,
      [`is-striped`]: striped,
      [`is-narrow`]: narrow,
      [`is-hoverable`]: hoverable,
      [`is-fullwidth`]: fullwidth,
    },
    className,
    helpersClasses(props),
  )
  return (
    <table {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </table>
  )
}

interface TableHeadProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const TableHead: React.SFC<TableHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(className, helpersClasses(props))
  return (
    <thead {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </thead>
  )
}

interface TableBodyProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const TableBody: React.SFC<TableBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(className, helpersClasses(props))
  return (
    <tbody {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </tbody>
  )
}

interface TableFootProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const TableFoot: React.SFC<TableFootProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(className, helpersClasses(props))
  return (
    <tfoot {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </tfoot>
  )
}
interface TrProps extends React.HTMLAttributes<HTMLTableRowElement>, Helpers {
  readonly selected?: boolean
}

export const Tr: React.SFC<TrProps> = ({
  children,
  selected,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'tr',
    {
      [`is-selected`]: selected,
    },
    className,
    helpersClasses(props),
  )

  return (
    <tr {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </tr>
  )
}

interface ThProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    Helpers {}

export const Th: React.SFC<ThProps> = ({ children, className, ...props }) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(className, helpersClasses(props))

  return (
    <th {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </th>
  )
}

interface TdProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement>,
    Helpers {}

export const Td: React.SFC<TdProps> = ({ children, className, ...props }) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(className, helpersClasses(props))
  return (
    <td {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </td>
  )
}
