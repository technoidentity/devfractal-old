import React from 'react'
import { camelCaseToPhrase } from '../../utils'
import {
  Table,
  TableBody,
  TableHead,
  TableProps,
  Td,
  Th,
  Tr,
} from '../elements'

export interface SimpleTableProps<T> extends TableProps {
  readonly headers: ReadonlyArray<string>
  readonly values: ReadonlyArray<T>
}

export const SimpleTable: <T>(props: SimpleTableProps<T>) => JSX.Element = ({
  headers,
  values,
  ...props
}) => {
  const headerItems: JSX.Element[] = headers.map(h => (
    <Th>{camelCaseToPhrase(h)}</Th>
  ))

  const header: JSX.Element = (
    <TableHead>
      <Tr>{headerItems}</Tr>
    </TableHead>
  )

  const rows: JSX.Element[] = values.map(value => (
    <Tr>
      {headers.map(key => (
        <Td>{value[key]}</Td>
      ))}
    </Tr>
  ))

  const body: JSX.Element = <TableBody>{rows}</TableBody>

  return (
    <Table {...props}>
      {header}
      {body}
    </Table>
  )
}
