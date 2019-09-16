import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { SimpleTable, SimpleTableProps } from 'devfractal-simple'
import { Icon } from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'

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

export interface CrudTableProps<T extends Record<string, any>>
  extends Pick<SimpleTableProps<T>, 'headers' | 'labels' | 'onRowClicked'> {
  readonly data: ReadonlyArray<T>
  editTo(value: T): string
  onDelete?(value: T): void
}

export function CrudTable<T extends Record<string, any>>({
  data,
  headers,
  labels,
  editTo,
  onDelete,
  onRowClicked,
}: CrudTableProps<T>): JSX.Element {
  return (
    <SimpleTable
      data={data}
      headers={[...(headers || []), 'Actions']}
      labels={labels}
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
