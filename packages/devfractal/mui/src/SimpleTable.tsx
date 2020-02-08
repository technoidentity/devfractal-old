import Paper from '@material-ui/core/Paper'
import Table, { TableProps } from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { format } from 'date-fns'
import React from 'react'
import { Get } from 'technoidentity-crud'
import { CheckBox, Text } from 'technoidentity-ui'
import * as t from 'technoidentity-utils'
import { camelCaseToPhrase, date } from 'technoidentity-utils'

function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'dd/MM/yyyy')
}

export interface SimpleTableHeaderProps {
  readonly headers: readonly string[]
}

export const SimpleTableHeader: React.FC<SimpleTableHeaderProps> = ({
  headers,
}) => (
  <TableHead>
    <TableRow>
      {headers.map(h => (
        <TableCell key={h} align="right">
          {h}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)

export interface RowsProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T
> extends Omit<SimpleTableViewProps<T, EK, Select>, 'override'> {
  readonly select: readonly Select[]
  render?(keyOrHeader: string, value: T): React.ReactNode
}

function TableRows<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T
>(props: RowsProps<T, EK, Select>): JSX.Element {
  const { data, select, extra, render, onRowClicked } = props

  return (
    <>
      {data.map((value, i) => (
        <TableRow
          key={i}
          onClick={() => onRowClicked && onRowClicked({ value: data[i] })}
        >
          {select.map(h => (
            <TableCell align="right" key={h as string}>
              {date.is(value[h]) ? (
                <>{formatDate(value[h])}</>
              ) : t.boolean.is(value[h]) ? (
                <CheckBox readOnly checked={value[h]} />
              ) : value[h] !== undefined ? (
                value[h]
              ) : (
                render && render(h as string, value)
              )}
            </TableCell>
          ))}
          {extra &&
            extra.map(
              e => render && <TableCell key={e}>{render(e, value)}</TableCell>,
            )}
        </TableRow>
      ))}
    </>
  )
}

export interface SimpleTableViewProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
> extends SimpleTableProps<T, EK, Select> {
  readonly data: readonly T[]
}

function TableView<
  T extends Record<string, any>,
  Select extends keyof T,
  EK extends string
>(args: SimpleTableViewProps<T, EK, Select>): JSX.Element {
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
    ...keys.map(s =>
      override && s in override
        ? override[s as string]
        : camelCaseToPhrase(s as string),
    ),
    ...(extra || []),
  ]

  return (
    <TableContainer component={Paper}>
      <Table {...props}>
        <SimpleTableHeader headers={labels} />

        <TableBody>
          <TableRows
            data={data}
            select={keys}
            extra={extra}
            onRowClicked={onRowClicked}
            render={children}
          />
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export interface RowClickEvent<T extends Record<string, any>> {
  readonly value: T
}

export interface SimpleTableProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
> extends TableProps {
  readonly select?: readonly Select[]
  readonly override?: Partial<Record<Select, string>>
  readonly extra?: readonly EK[]
  readonly data: readonly T[] | (() => Promise<readonly T[]>)
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
