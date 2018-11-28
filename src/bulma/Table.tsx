import * as React from 'react'

import classNames from 'classnames'

interface TableProps {
  readonly children: React.ReactNode
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
}) => {
  const classes: string = classNames('table', {
    [`is-bordered`]: bordered,
    [`is-striped`]: striped,
    [`is-narrow`]: narrow,
    [`is-hoverable`]: hoverable,
    [`is-fullwidth`]: fullwidth,
  })
  return <table className={classes}>{children}</table>
}

interface TableHeadProps {
  readonly children: React.ReactNode
}

export const TableHead: React.SFC<TableHeadProps> = ({ children }) => (
  <thead>{children}</thead>
)

interface TableBodyProps {
  readonly children: React.ReactNode
}

export const TableBody: React.SFC<TableBodyProps> = ({ children }) => (
  <tbody>{children}</tbody>
)

interface TableFootProps {
  readonly children: React.ReactNode
}

export const TableFoot: React.SFC<TableFootProps> = ({ children }) => (
  <tfoot>{children}</tfoot>
)

interface TrProps {
  readonly children: React.ReactNode
  readonly selected?: boolean
}

export const Tr: React.SFC<TrProps> = ({ children, selected }) => {
  const classes: string = classNames('tr', {
    [`is-selected`]: selected,
  })

  return <tr className={classes}>{children}</tr>
}

interface ThProps {
  readonly children: React.ReactNode
}

export const Th: React.SFC<ThProps> = ({ children }) => <th>{children}</th>

interface TdProps {
  readonly children?: React.ReactNode
}

export const Td: React.SFC<TdProps> = ({ children }) => <td>{children}</td>
