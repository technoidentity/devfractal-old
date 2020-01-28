import { Get, useParams, useSubmitRedirect } from '@stp/devfractal'
import { req, string } from '@stp/utils'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../common'
import { FSTodoForm } from './FSTodoForm'

export const FSEditForm: React.FC = () => {
  const { id } = useParams(req({ id: string }))
  const { onSubmit } = useSubmitRedirect<FSTodo>(
    values => fsTodoAPI.replace(id, values),
    '/todos',
  )

  return (
    <Get asyncFn={fsTodoAPI.get} deps={[id]}>
      {data => <FSTodoForm initial={data} onSubmit={onSubmit} />}
    </Get>
  )
}
