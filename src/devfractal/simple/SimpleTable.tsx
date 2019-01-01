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

export interface SimpleTableProps extends TableProps {
  readonly headers: ReadonlyArray<string>
  readonly values:
    | ReadonlyArray<{ readonly [index: string]: any }>
    | (() => Promise<{ readonly [index: string]: any }>)
}

export interface RowsProps {
  readonly headers: ReadonlyArray<string>
  readonly values: ReadonlyArray<{ readonly [index: string]: any }>
}

const Rows: React.SFC<RowsProps> = ({ values, headers }) => {
  return (
    <>
      {values.map((value, i) => (
        <Tr key={i}>
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
export const SimpleTable: React.SFC<SimpleTableProps> = ({
  headers,
  values,
  ...props
}) => {
  const header: JSX.Element = (
    <TableHead>
      <Tr>
        {headers.map(h => (
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
                <Rows values={data} headers={headers} />
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
        <Rows values={values} headers={headers} />
      </TableBody>
    </Table>
  )
}
