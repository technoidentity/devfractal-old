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
    <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
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

      <ButtonLink to={assignTo} size="small" variant="info">
        Assign
      </ButtonLink>
    </div>
  )
}

export interface DiyaTableProps<T extends Record<string, any>>
  extends Pick<SimpleTableProps<T>, 'headers' | 'labels' | 'onRowClicked'> {
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
  onRowClicked,
}: DiyaTableProps<T>): JSX.Element {
  return (
    <SimpleTable
      data={data}
      headers={[...(headers || []), 'Actions'] as any}
      striped
      onRowClicked={onRowClicked}
    >
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
        ) : (
          undefined
        )
      }
    </SimpleTable>
  )
}
