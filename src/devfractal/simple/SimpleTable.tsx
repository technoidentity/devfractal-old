import React from 'react'
import { Boolean, Function } from 'tcomb'
import {
  Async,
  camelCaseToPhrase,
  CheckBox,
  Table,
  TableBody,
  TableHead,
  TableProps,
  Td,
  Th,
  Tr,
} from '../internal'

export interface RowClickEvent<T> {
  readonly value: T
}

export interface SimpleTableProps<T> extends TableProps {
  readonly headers?: ReadonlyArray<string>
  readonly data: ReadonlyArray<T> | (() => Promise<ReadonlyArray<T>>)
  onRowClicked?(value: RowClickEvent<T>): void
}

export interface RowsProps<T> {
  readonly headers: ReadonlyArray<string>
  readonly data: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
}

function Rows<T>(props: RowsProps<T>): JSX.Element {
  const { data, headers, onRowClicked } = props
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
              ) : (
                value[key]
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
}
function TableView<T>(args: TableViewProps<T>): JSX.Element {
  const { headers, data, onRowClicked, ...props } = args
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
        <Rows data={data} headers={allHeaders} onRowClicked={onRowClicked} />
      </TableBody>
    </Table>
  )
}
export function SimpleTable<T>(args: SimpleTableProps<T>): JSX.Element {
  const { data, ...props } = args

  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div>Error</div>
          } else if (data) {
            return <TableView {...props} data={data} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  } else {
    return <TableView data={data} {...props} />
  }
}
