import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, SimpleTable, SimpleTableProps } from 'technoidentity-devfractal'

export interface ActionsProps {
  readonly editLink: string
  onDelete?(): void
}

export const Actions: React.FC<ActionsProps> = ({ editLink, onDelete }) => {
  return (
    <>
      <Link to={editLink}>
        <Icon icon={faEdit} />
      </Link>
      {onDelete && (
        <a
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

export interface CrudTableProps<T>
  extends Pick<SimpleTableProps<T>, 'headers' | 'headerLabels'> {
  readonly data: ReadonlyArray<T>
  editLink(value: T): string
  onDelete?(value: T): void
}

export function CrudTable<T>({
  data,
  headers,
  editLink,
  onDelete,
}: CrudTableProps<T>): JSX.Element {
  return (
    <SimpleTable data={data} headers={[...(headers || []), 'Actions']} striped>
      {(key, value) =>
        key === 'Actions' ? (
          <Actions
            editLink={editLink(value)}
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
