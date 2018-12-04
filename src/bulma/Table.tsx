import * as React from 'react'

import classNames from 'classnames'

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
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
  )
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  )
}

interface TableHeadProps extends React.HTMLAttributes<HTMLElement> {}

export const TableHead: React.SFC<TableHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(className)
  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  )
}

interface TableBodyProps extends React.HTMLAttributes<HTMLElement> {}

export const TableBody: React.SFC<TableBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(className)
  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  )
}

interface TableFootProps extends React.HTMLAttributes<HTMLElement> {}

export const TableFoot: React.SFC<TableFootProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(className)
  return (
    <tfoot className={classes} {...props}>
      {children}
    </tfoot>
  )
}
interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  readonly selected?: boolean
}

export const Tr: React.SFC<TrProps> = ({
  children,
  selected,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'tr',
    {
      [`is-selected`]: selected,
    },
    className,
  )

  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  )
}

interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {}

export const Th: React.SFC<ThProps> = ({ children, className, ...props }) => {
  const classes: string = classNames(className)

  return (
    <th className={classes} {...props}>
      {' '}
      {children}
    </th>
  )
}

interface TdProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {}

export const Td: React.SFC<TdProps> = ({ children, className, ...props }) => {
  const classes: string = classNames(className)
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  )
}
