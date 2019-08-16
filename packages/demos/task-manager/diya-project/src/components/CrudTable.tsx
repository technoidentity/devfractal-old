import React from 'react'
import { SimpleTable, SimpleTableProps } from 'technoidentity-devfractal'
import { Actions } from './Actions'

export interface CrudTableProps<T>
  extends Pick<SimpleTableProps<T>, 'headers' | 'headerLabels'> {
  readonly data: ReadonlyArray<T>
  editLink(value: T): string
}

export function CrudTable<T>({
  data,
  headers,
  editLink,
}: CrudTableProps<T>): JSX.Element {
  return (
    <SimpleTable data={data} headers={[...(headers || []), 'Actions']} striped>
      {(key, value) =>
        key === 'Actions' ? (
          <Actions editLink={editLink(value)} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  )
}
