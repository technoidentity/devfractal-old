import React from 'react'
import { SimpleTable, SimpleTableProps } from 'technoidentity-devfractal'
import { Actions } from './Actions'

export interface CrudTableProps<T>
  extends Pick<SimpleTableProps<T>, 'headers' | 'headerLabels'> {
  readonly data: ReadonlyArray<T>
  editURL(value: T): string
}

export function CrudTable<T>({
  data,
  headers,
  editURL,
}: CrudTableProps<T>): JSX.Element {
  return (
    <SimpleTable data={data} headers={[...(headers || []), 'Actions']} striped>
      {(key, value) =>
        key === 'Actions' ? (
          <Actions editURL={editURL(value)} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  )
}
