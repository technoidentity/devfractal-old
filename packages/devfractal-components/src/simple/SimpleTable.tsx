import React from 'react'
import { Boolean, Function } from 'tcomb'
import { camelCaseToPhrase } from 'technoidentity-utils'
import {
  Async,
  CheckBox,
  Table,
  TableBody,
  TableHead,
  TableProps,
  Td,
  Th,
  Tr,
} from '../lib'

export interface RowClickEvent<T> {
  readonly value: T
}

export interface SimpleTableProps<T> extends TableProps {
  readonly headers?: ReadonlyArray<string>
  readonly data: ReadonlyArray<T> | (() => Promise<ReadonlyArray<T>>)
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: string, value: T): React.ReactNode
}

export interface RowsProps<T> {
  readonly headers: ReadonlyArray<string>
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
              {Boolean.is(value[key]) ? (
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
  readonly headers?: ReadonlyArray<string>
  readonly data: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: string, value: T): React.ReactNode
}

function TableView<T>(args: TableViewProps<T>): JSX.Element {
  const { headers, data, onRowClicked, children, ...props } = args
  const allHeaders: ReadonlyArray<string> =
    headers || Object.keys(data[0] || {})

  return (
    <Table {...props} fullWidth>
      <TableHead>
        <Tr>
          {allHeaders.map(h => (
            <Th key={h}>{camelCaseToPhrase(h)}</Th>
          ))}
        </Tr>
      </TableHead>

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

  return Function.is(data) ? (
    <Async asyncFn={data}>
      {({ error, data }) => {
        if (error) {
          return <div>{`${error.message}`}</div>
        } else if (data) {
          return <TableView {...props} data={data} />
        } else {
          return <div>Loading...</div>
        }
      }}
    </Async>
  ) : (
    <TableView data={data} {...props} />
  )
}
