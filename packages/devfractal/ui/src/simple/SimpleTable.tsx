import React from 'react'
import {
  boolean,
  camelCaseToPhrase,
  date,
  formatDate,
} from 'technoidentity-utils'
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
} from '../core'

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
> extends Omit<SimpleTableProps<T, EK, Select>, 'override'> {
  readonly select: readonly Select[]
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
                <>{formatDate(value[h])}</>
              ) : boolean.is(value[h]) ? (
                <CheckBox readOnly checked={value[h]} />
              ) : value[h] !== undefined ? (
                value[h]
              ) : (
                render && render(h as string, value)
              )}
            </Td>
          ))}
          {extra &&
            extra.map(e => render && <Td key={e}>{render(e, value)}</Td>)}
        </Tr>
      ))}
    </>
  )
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
