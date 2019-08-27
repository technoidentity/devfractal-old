import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink } from 'devfractal-crud'
import { SimpleTable, SimpleTableProps } from 'devfractal-simple'
import { Icon } from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'

export interface DiyaActionsProps {
  readonly editTo: string
  onDelete?(): void
  readonly assignTo: string
}

export const DiyaActions: React.FC<DiyaActionsProps> = ({
  editTo,
  onDelete,
  assignTo,
}) => {
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

      <ButtonLink to={assignTo}>Assign</ButtonLink>
    </>
  )
}

export interface DiyaTableProps<T>
  extends Pick<SimpleTableProps<T>, 'headers' | 'headerLabels'> {
  readonly data: ReadonlyArray<T>
  editTo(value: T): string
  onDelete?(value: T): void
  assignTo(value: T): string
}

export function DiyaTable<T>({
  data,
  headers,
  editTo,
  onDelete,
  assignTo,
}: DiyaTableProps<T>): JSX.Element {
  return (
    <SimpleTable data={data} headers={[...(headers || []), 'Actions']} striped>
      {(key, value) =>
        key === 'Actions' ? (
          <DiyaActions
            editTo={editTo(value)}
            assignTo={assignTo(value)}
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
