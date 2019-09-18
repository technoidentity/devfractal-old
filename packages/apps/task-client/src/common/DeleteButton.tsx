import { Button } from 'devfractal-ui-core'
import React from 'react'

export interface DeleteButtonProps {
  readonly id?: string | number
  onDelete(id: string): Promise<void>
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onDelete }) => {
  return (
    <Button variant="danger" onClick={() => id && onDelete(id.toString())}>
      Delete
    </Button>
  )
}
