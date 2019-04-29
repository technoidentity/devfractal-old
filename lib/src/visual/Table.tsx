import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    Helpers {
  /**
   * Add borders to all the cells
   */
  readonly bordered?: boolean
  /**
   * Add stripes to the table
   */
  readonly striped?: boolean
  /**
   * Makes the cells narrower
   */
  readonly narrow?: boolean
  /**
   * Add hover effect on each row
   */
  readonly hoverable?: boolean
  /**
   * For Fullwidth table
   */
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
  /**
   * To style the Th element by appending color(variant)
   */
  readonly variant?: ThVariant
  /**
   * To select the cell
   */
  readonly selected?: boolean
  /**
   * Makes the cell narrower
   */
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
  /**
   * To style the Th element by appending color(variant)
   */
  readonly variant?: TdVariant
  /**
   * To select the cell
   */
  readonly selected?: boolean
  /**
   * Makes the cell narrower
   */
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

// tslint:disable-next-line: no-default-export
export default TableHead
