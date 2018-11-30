import * as React from 'react'

import classNames from 'classnames'

interface TableProps {
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

export const TableHead: React.SFC = ({ children }) => <thead>{children}</thead>

export const TableBody: React.SFC = ({ children }) => <tbody>{children}</tbody>

export const TableFoot: React.SFC = ({ children }) => <tfoot>{children}</tfoot>

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

export const Th: React.SFC = ({ children }) => <th>{children}</th>

export const Td: React.SFC = ({ children }) => <td>{children}</td>
