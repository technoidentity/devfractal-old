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
import * as t from 'technoidentity-utils'
import { camelCaseToPhrase, date } from 'technoidentity-utils'
import { formatDate } from './utils'

export interface SimpleTableHeaderProps {
  readonly headers: readonly string[]
}

export const SimpleTableHeader: React.FC<SimpleTableHeaderProps> = ({
  headers,
}) => (
  <TableHead>
    <Tr>
      {headers.map(h => (
        <Th key={h}>{h}</Th>
      ))}
    </Tr>
  </TableHead>
)

export interface RowClickEvent<T extends Record<string, any>> {
  readonly value: T
}

export interface RowsProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T
> extends Omit<TableViewProps<T, EK, Select>, 'override'> {
  readonly select: ReadonlyArray<Select>
  render?(keyOrHeader: string, value: T): React.ReactNode
}

function Rows<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T
>(props: RowsProps<T, EK, Select>): JSX.Element {
  const { data, select, extra, render, onRowClicked } = props

  return (
    <>
      {data.map((value, i) => (
        <Tr
          key={i}
          onClick={() => onRowClicked && onRowClicked({ value: data[i] })}
        >
          {select.map(h => (
            <Td key={h as string}>
              {date.is(value[h]) ? (
                <Text>{formatDate(value[h])}</Text>
              ) : t.boolean.is(value[h]) ? (
                <CheckBox readOnly checked={value[h]} />
              ) : value[h] !== undefined ? (
                value[h]
              ) : (
                render && render(h as string, value)
              )}
            </Td>
          ))}
          {extra && extra.map(e => render && render(e, value))}
        </Tr>
      ))}
    </>
  )
}

export interface TableViewProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
> extends SimpleTableProps<T, EK, Select> {
  readonly data: ReadonlyArray<T>
}

function TableView<
  T extends Record<string, any>,
  Select extends keyof T,
  EK extends string
>(args: TableViewProps<T, EK, Select>): JSX.Element {
  const {
    select,
    override,
    extra,
    data,
    onRowClicked,
    children,
    ...props
  } = args

  if (data.length === 0) {
    return <Text textSize="3">No Values</Text>
  }

  const keys: ReadonlyArray<keyof T> =
    select === undefined ? Object.keys(data[0]) : select

  const labels: readonly string[] = [
    ...keys.map(
      s =>
        override && s in override
          ? override[s as string]
          : camelCaseToPhrase(s as string),
      ...(extra || []),
    ),
  ]

  return (
    <Table {...props} fullWidth>
      <SimpleTableHeader headers={labels} />

      <TableBody>
        <Rows
          data={data}
          select={keys}
          extra={extra}
          onRowClicked={onRowClicked}
          render={children}
        />
      </TableBody>
    </Table>
  )
}

export interface SimpleTableProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
> extends TableProps {
  readonly select?: ReadonlyArray<Select>
  readonly override?: Partial<Record<Select, string>>
  readonly extra?: readonly EK[]
  readonly data: ReadonlyArray<T> | (() => Promise<ReadonlyArray<T>>)
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: keyof T | EK, value: T): React.ReactNode
}

export function SimpleTable<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
>(args: SimpleTableProps<T, EK, Select>): JSX.Element {
  const { data, ...props } = args

  return typeof data === 'function' ? (
    <Get asyncFn={data}>{data => <TableView {...props} data={data} />}</Get>
  ) : (
    <TableView data={data} {...props} />
  )
}
