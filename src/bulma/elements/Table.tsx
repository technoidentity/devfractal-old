import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    CommonHelpers {
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
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
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
    commonHelpersClasses(props),
  )
  return (
    <table {...propsHelpersRemoved} className={classes}>
      {children}
    </table>
  )
}

interface TableHeadProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const TableHead: React.SFC<TableHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(className, commonHelpersClasses(props))
  return (
    <thead {...propsHelpersRemoved} className={classes}>
      {children}
    </thead>
  )
}

interface TableBodyProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const TableBody: React.SFC<TableBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(className, commonHelpersClasses(props))
  return (
    <tbody {...propsHelpersRemoved} className={classes}>
      {children}
    </tbody>
  )
}

interface TableFootProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const TableFoot: React.SFC<TableFootProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(className, commonHelpersClasses(props))
  return (
    <tfoot {...propsHelpersRemoved} className={classes}>
      {children}
    </tfoot>
  )
}
interface TrProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    CommonHelpers {
  readonly selected?: boolean
}

export const Tr: React.SFC<TrProps> = ({
  children,
  selected,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'tr',
    {
      [`is-selected`]: selected,
    },
    className,
    commonHelpersClasses(props),
  )

  return (
    <tr {...propsHelpersRemoved} className={classes}>
      {children}
    </tr>
  )
}

interface ThProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    CommonHelpers {}

export const Th: React.SFC<ThProps> = ({ children, className, ...props }) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(className, commonHelpersClasses(props))

  return (
    <th {...propsHelpersRemoved} className={classes}>
      {children}
    </th>
  )
}

interface TdProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement>,
    CommonHelpers {}

export const Td: React.SFC<TdProps> = ({ children, className, ...props }) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(className, commonHelpersClasses(props))
  return (
    <td {...propsHelpersRemoved} className={classes}>
      {children}
    </td>
  )
}
