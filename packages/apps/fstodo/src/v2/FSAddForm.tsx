import { useSubmitRedirect } from '@stp/devfractal'
import React from 'react'
import { fsTodoAPI } from '../common'
import { FSTodoForm } from './FSTodoForm'

export const FSAddForm: React.FC = () => {
  const { onSubmit } = useSubmitRedirect(fsTodoAPI.create, '/todos')

  return <FSTodoForm onSubmit={onSubmit} />
}
