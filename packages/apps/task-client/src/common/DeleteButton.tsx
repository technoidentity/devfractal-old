import React from 'react'
import { Button } from 'technoidentity-ui'

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
