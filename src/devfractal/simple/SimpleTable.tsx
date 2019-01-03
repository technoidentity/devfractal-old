import React from 'react'
import { Boolean, Function } from 'tcomb'
import { Async, camelCaseToPhrase } from '../../utils'
import {
  Table,
  TableBody,
  TableHead,
  TableProps,
  Td,
  Th,
  Tr,
} from '../elements'
import { CheckBox } from '../form'

export interface RowClickEvent<T> {
  readonly value: T
}

export interface SimpleTableProps<T> extends TableProps {
  readonly headers?: ReadonlyArray<string>
  readonly values: ReadonlyArray<T> | (() => Promise<T>)
  onRowClicked?(value: RowClickEvent<T>): void
}

export interface RowsProps<T> {
  readonly headers: ReadonlyArray<string>
  readonly values: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
}

function Rows<T>(props: RowsProps<T>): JSX.Element {
  const { values, headers, onRowClicked } = props
  return (
    <>
      {values.map((value, i) => (
        <Tr
          key={i}
          onClick={() => onRowClicked && onRowClicked({ value: values[i] })}
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
  readonly values: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
}
function TableView<T>(args: TableViewProps<T>): JSX.Element {
  const { headers, values, onRowClicked, ...props } = args
  const allHeaders: ReadonlyArray<string> =
    headers || Object.keys(values[0] || {})
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
          values={values}
          headers={allHeaders}
          onRowClicked={onRowClicked}
        />
      </TableBody>
    </Table>
  )
}
export function SimpleTable<T>(args: SimpleTableProps<T>): JSX.Element {
  const { values, ...props } = args

  if (Function.is(values)) {
    return (
      <Async asyncFn={values}>
        {({ error, data }) => {
          if (error) {
            return <div>Error</div>
          } else if (data) {
            return <TableView {...props} values={data} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  } else {
    return <TableView values={values} {...props} />
  }
}
