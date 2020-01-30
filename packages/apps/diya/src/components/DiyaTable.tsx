import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink } from '@stp/crud'
import { Link } from '@stp/devfractal'
import { Icon } from '@stp/devfractal'
import { SimpleTable, SimpleTableProps } from '@stp/simple'
import React from 'react'

export interface DiyaActionsProps {
  readonly editTo: string
  readonly assignTo: string
  onDelete?(): void
}

export const DiyaActions: React.FC<DiyaActionsProps> = ({
  editTo,
  onDelete,
  assignTo,
}) => (
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

export interface DiyaTableProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T
>
  extends Pick<
    SimpleTableProps<T, EK, Select>,
    'select' | 'override' | 'extra' | 'onRowClicked'
  > {
  readonly data: readonly T[]
  editTo(value: T): string
  onDelete?(value: T): void
  assignTo(value: T): string
}

export function DiyaTable<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T
>({
  data,
  select,
  extra,
  override,
  editTo,
  onDelete,
  assignTo,
  onRowClicked,
}: DiyaTableProps<T, EK, Select>): JSX.Element {
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
