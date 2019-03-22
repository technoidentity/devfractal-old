import React from 'react'
import { classNamesHelper, Div, Helpers } from '..'

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    Helpers {
  readonly bordered?: boolean
  readonly striped?: boolean
  readonly narrow?: boolean
  readonly hoverable?: boolean
  readonly fullWidth?: boolean
}

export const Table: React.FC<TableProps> = ({
  children,
  bordered,
  striped,
  narrow,
  hoverable,
  fullWidth,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'table', {
    'is-bordered': bordered,
    'is-striped': striped,
    'is-narrow': narrow,
    'is-hoverable': hoverable,
    'is-fullwidth': fullWidth,
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

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
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

export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
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

export const TableFoot: React.FC<TableFootProps> = ({ children, ...props }) => {
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

export const Tr: React.FC<TrProps> = ({ selected, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'tr', {
    'is-selected': selected,
  })

  return (
    <Div as="tr" {...props} className={classes}>
      {children}
    </Div>
  )
}

type ThVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'dark'
  | 'light'
export interface ThProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    Helpers {
  readonly variant?: ThVariant
  readonly selected?: boolean
  readonly narrow?: boolean
}

export const Th: React.FC<ThProps> = ({
  variant,
  selected,
  narrow,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-${variant}`]: variant,
    'is-selected': selected,
    'is-narrow': narrow,
  })

  return (
    <Div as="th" {...props} className={classes}>
      {children}
    </Div>
  )
}

type TdVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'dark'
  | 'light'
export interface TdProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement>,
    Helpers {
  readonly variant?: TdVariant
  readonly selected?: boolean
  readonly narrow?: boolean
}

export const Td: React.FC<TdProps> = ({
  variant,
  selected,
  narrow,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-${variant}`]: variant,
    'is-selected': selected,
    'is-narrow': narrow,
  })
  return (
    <Div as="td" {...props} className={classes}>
      {children}
    </Div>
  )
}
