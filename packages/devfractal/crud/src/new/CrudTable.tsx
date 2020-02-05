import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@stp/router'
import { Icon } from '@stp/ui'
import React from 'react'
import { SimpleTable, SimpleTableProps } from '../simple'

export interface ActionsProps {
  readonly editTo: string
  onDelete?(): void
}

export const Actions: React.FC<ActionsProps> = ({ editTo, onDelete }) => {
  return (
    <>
      <Link to={editTo}>
        <Icon icon={faEdit} />
      </Link>
      {onDelete && (
        <a
          href="#!"
          onClick={evt => {
            evt.preventDefault()
            onDelete()
          }}
        >
          <Icon icon={faTrash} />
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
      striped
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
