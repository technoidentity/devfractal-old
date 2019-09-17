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
import { array, date, string } from 'technoidentity-spec'
import { camelCaseToPhrase } from 'technoidentity-utils'
import { formatDate } from './utils'

export interface RowClickEvent<T extends Record<string, any>> {
  readonly value: T
}

export interface SimpleTableProps<T extends Record<string, any>>
  extends TableProps {
  readonly headers?: ReadonlyArray<keyof T>
  readonly labels?: readonly string[] | Record<keyof T, string>
  readonly data: ReadonlyArray<T> | (() => Promise<ReadonlyArray<T>>)
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: keyof T, value: T): React.ReactNode
}

export interface RowsProps<T extends Record<string, any>, K extends keyof T> {
  readonly headers: readonly K[]
  readonly data: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
  render?(key: K, value: T): React.ReactNode
}

function Rows<T extends Record<string, any>, K extends keyof T>(
  props: RowsProps<T, K>,
): JSX.Element {
  const { data, headers, render, onRowClicked } = props
  return (
    <>
      {data.map((value, i) => (
        <Tr
          key={i}
          onClick={() => onRowClicked && onRowClicked({ value: data[i] })}
        >
          {headers.map(key => (
            <Td key={key as string}>
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

export interface TableViewProps<T extends Record<string, any>>
  extends TableProps {
  readonly headers?: ReadonlyArray<keyof T>
  readonly labels?: readonly string[] | Record<keyof T, string>
  readonly data: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: keyof T, value: T): React.ReactNode
}

interface HeaderProps {
  readonly labels: readonly string[]
}

const Header: React.FC<HeaderProps> = ({ labels }) => (
  <TableHead>
    <Tr>
      {labels.map(h => (
        <Th key={h}>{h}</Th>
      ))}
    </Tr>
  </TableHead>
)

function getLabels<T extends Record<string, any>>(
  headers: ReadonlyArray<keyof T>,
  labels: Record<keyof T, string>,
): readonly string[] {
  return headers.map(h =>
    labels[h] ? labels[h] : camelCaseToPhrase(h as string),
  )
}

function TableView<T extends Record<string, any>>(
  args: TableViewProps<T>,
): JSX.Element {
  const { headers, labels, data, onRowClicked, children, ...props } = args

  const allHeaders: ReadonlyArray<keyof T> =
    headers || Object.keys(data[0] || {})

  const headerLabels: readonly string[] = labels
    ? array(string).is(labels)
      ? labels
      : getLabels(allHeaders, labels as Record<keyof T, string>)
    : allHeaders.map(h => camelCaseToPhrase(h as string))

  return (
    <Table {...props} fullWidth>
      <Header labels={headerLabels} />

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

export function SimpleTable<T extends Record<string, any>>(
  args: SimpleTableProps<T>,
): JSX.Element {
  const { data, ...props } = args

  return typeof data === 'function' ? (
    <Get asyncFn={data}>{data => <TableView {...props} data={data} />}</Get>
  ) : (
    <TableView data={data} {...props} />
  )
}
