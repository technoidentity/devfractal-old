import React from 'react'
import { Link } from 'react-router-dom'
import { useCrudComponents } from 'technoidentity-core'
import { SimpleTable, SimpleTableProps } from './SimpleTable'

export interface ActionsProps {
  readonly editTo: string
  onDelete?(): void
}

export const Actions: React.FC<ActionsProps> = ({ editTo, onDelete }) => {
  const { TrashIcon } = useCrudComponents()
  return (
    <>
      <Link to={editTo}>
        <TrashIcon />
      </Link>
      {onDelete && (
        <a
          href="#!"
          onClick={evt => {
            evt.preventDefault()
            onDelete()
          }}
        >
          <TrashIcon />
        </a>
      )}
    </>
  )
}

export interface CrudTableProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
>
  extends Pick<
    SimpleTableProps<T, EK, Select>,
    'select' | 'override' | 'extra' | 'onRowClicked'
  > {
  readonly data: readonly T[]
  editTo(value: T): string
  onDelete?(value: T): void
}

export function CrudTable<T extends Record<string, any>, EK extends string>({
  data,
  select,
  override,
  extra,
  editTo,
  onDelete,
  onRowClicked,
}: CrudTableProps<T, EK>): JSX.Element {
  return (
    <SimpleTable
      data={data}
      select={select}
      override={override}
      extra={[...(extra || []), 'Actions']}
      onRowClicked={onRowClicked}
    >
      {(key, value) =>
        key === 'Actions' ? (
          <Actions
            editTo={editTo(value)}
            onDelete={() => {
              if (onDelete) {
                onDelete(value)
              }
            }}
          />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  )
}
