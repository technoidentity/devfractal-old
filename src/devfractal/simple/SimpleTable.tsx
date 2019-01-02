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
import { Text } from '../modifiers'

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

export function SimpleTable<T>(args: SimpleTableProps<T>): JSX.Element {
  const { headers, values, onRowClicked, ...props } = args
  if (values.length === 0) {
    return <Text textSize="4">Currently, no elements available</Text>
  }
  const allHeaders: ReadonlyArray<string> =
    headers || Object.keys(values[0] || {})

  const header: JSX.Element = (
    <TableHead>
      <Tr>
        {allHeaders.map(h => (
          <Th key={h}>{camelCaseToPhrase(h)}</Th>
        ))}
      </Tr>
    </TableHead>
  )

  return Function.is(values) ? (
    <Async asyncFn={values}>
      {({ error, data }) => {
        if (error) {
          return <div>Error</div>
        } else if (data) {
          return (
            <Table {...props}>
              {header}
              <TableBody>
                <Rows
                  values={data}
                  headers={allHeaders}
                  onRowClicked={onRowClicked}
                />
              </TableBody>
            </Table>
          )
        } else {
          return <div>Loading...</div>
        }
      }}
    </Async>
  ) : (
    <Table {...props}>
      {header}
      <TableBody>
        <Rows values={values} headers={allHeaders} />
      </TableBody>
    </Table>
  )
}
