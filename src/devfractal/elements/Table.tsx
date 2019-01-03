import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    Helpers {
  readonly bordered?: boolean
  readonly striped?: boolean
  readonly narrow?: boolean
  readonly hoverable?: boolean
  readonly fullWidth?: boolean
}

export const Table: React.SFC<TableProps> = ({
  children,
  bordered,
  striped,
  narrow,
  hoverable,
  fullWidth,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'table', {
    [`is-bordered`]: bordered,
    [`is-striped`]: striped,
    [`is-narrow`]: narrow,
    [`is-hoverable`]: hoverable,
    [`is-fullwidth`]: fullWidth,
  })
  return (
    <Div as="table" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface TableHeadProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const TableHead: React.SFC<TableHeadProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props)
  return (
    <Div as="thead" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const TableBody: React.SFC<TableBodyProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props)
  return (
    <Div as="tbody" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface TableFootProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const TableFoot: React.SFC<TableFootProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props)
  return (
    <Div as="tfoot" {...props} className={classes}>
      {children}
    </Div>
  )
}
export interface TrProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    Helpers {
  readonly selected?: boolean
}

export const Tr: React.SFC<TrProps> = ({ children, selected, ...props }) => {
  const classes: string = classNamesHelper(props, 'tr', {
    [`is-selected`]: selected,
  })

  return (
    <Div as="tr" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ThProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    Helpers {}

export const Th: React.SFC<ThProps> = ({ children, className, ...props }) => {
  const classes: string = classNamesHelper(props)

  return (
    <Div as="th" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface TdProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement>,
    Helpers {}

export const Td: React.SFC<TdProps> = ({ children, className, ...props }) => {
  const classes: string = classNamesHelper(props)
  return (
    <Div as="td" {...props} className={classes}>
      {children}
    </Div>
  )
}
