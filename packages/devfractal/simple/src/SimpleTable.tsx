import { Get } from 'devfractal-ui-api'
import {
  CheckBox,
  Table,
  TableBody,
  TableHead,
  TableProps,
  Td,
  Text,
  Th,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import * as t from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { camelCaseToPhrase, keys } from 'technoidentity-utils'
import { formatDate } from './utils'

export interface RowClickEvent<T> {
  readonly value: T
}

export interface SimpleTableProps<T> extends TableProps {
  readonly headers?: readonly string[]
  readonly headerLabels?: readonly string[]
  readonly data: ReadonlyArray<T> | (() => Promise<ReadonlyArray<T>>)
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: string, value: T): React.ReactNode
}

export interface RowsProps<T> {
  readonly headers: readonly string[]
  readonly data: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
  render?(key: string, value: T): React.ReactNode
}

function Rows<T>(props: RowsProps<T>): JSX.Element {
  const { data, headers, render, onRowClicked } = props
  return (
    <>
      {data.map((value, i) => (
        <Tr
          key={i}
          onClick={() => onRowClicked && onRowClicked({ value: data[i] })}
        >
          {headers.map(key => (
            <Td key={key}>
              {date.is(value[key]) ? (
                <Text>{formatDate(value[key])}</Text>
              ) : t.boolean.is(value[key]) ? (
                <CheckBox readOnly checked={value[key]} />
              ) : value[key] !== undefined ? (
                value[key]
              ) : (
                render && render(key, value)
              )}
            </Td>
          ))}
        </Tr>
      ))}
    </>
  )
}

export interface TableViewProps<T> extends TableProps {
  readonly headers?: readonly string[]
  readonly headerLabels?: readonly string[]
  readonly data: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: string, value: T): React.ReactNode
}

interface HeaderProps {
  readonly headerLabels: readonly string[]
}

const Header: React.FC<HeaderProps> = ({ headerLabels }) => (
  <TableHead>
    <Tr>
      {headerLabels.map(h => (
        <Th key={h}>{h}</Th>
      ))}
    </Tr>
  </TableHead>
)

function TableView<T>(args: TableViewProps<T>): JSX.Element {
  const { headers, headerLabels, data, onRowClicked, children, ...props } = args
  const allHeaders: readonly string[] = headers || keys(data[0] || {})
  const labels: readonly string[] = headerLabels
    ? headerLabels
    : allHeaders.map(camelCaseToPhrase)

  return (
    <Table {...props} fullWidth>
      <Header headerLabels={labels} />

      <TableBody>
        <Rows
          data={data}
          headers={allHeaders}
          onRowClicked={onRowClicked}
          render={children}
        />
      </TableBody>
    </Table>
  )
}

export function SimpleTable<T>(args: SimpleTableProps<T>): JSX.Element {
  const { data, ...props } = args

  return typeof data === 'function' ? (
    <Get asyncFn={data}>{data => <TableView {...props} data={data} />}</Get>
  ) : (
    <TableView data={data} {...props} />
  )
}
