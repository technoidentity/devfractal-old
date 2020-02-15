import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableProps,
  TableRow,
  Typography,
} from '@material-ui/core'
import { format } from 'date-fns'
import React from 'react'
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
> extends Omit<SimpleTableProps<T, EK, Select>, 'override'> {
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
                <Checkbox readOnly checked={value[h]} />
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
  readonly data: readonly T[]
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: keyof T | EK, value: T): React.ReactNode
}

export function SimpleTable<
  T extends Record<string, any>,
  Select extends keyof T,
  EK extends string
>(args: SimpleTableProps<T, EK, Select>): JSX.Element {
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
    return <Typography variant="h3">No Values</Typography>
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
