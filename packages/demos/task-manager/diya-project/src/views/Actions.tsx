import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { TypeOf } from 'io-ts'
import React from 'react'
import { Button, Icon, Section } from 'technoidentity-devfractal'
import { fn, req } from 'technoidentity-utils'

const ActionsProps = req({
  onEdit: fn<() => void>(),
  onDelete: fn<() => void>(),
})

type ActionsProps = TypeOf<typeof ActionsProps>

export const Actions: React.FC<ActionsProps> = ({ onEdit, onDelete }) => (
  <Section>
    <>
      <Button
        onClick={() => {
          onEdit()
        }}
      >
        <Icon icon={faTrashAlt} />
        Delete
      </Button>
      <Button
        onClick={() => {
          onDelete()
        }}
      >
        <Icon icon={faTrashAlt} />
        Delete
      </Button>
    </>
  </Section>
)
