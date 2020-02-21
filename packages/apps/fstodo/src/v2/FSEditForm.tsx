import React from 'react'
import {
  Get,
  useParamsSafe,
  useSubmitRedirect,
} from 'technoidentity-devfractal'
import { req, string } from 'technoidentity-utils'
import { FSTodo, fsTodoAPI } from '../common'
import { FSTodoForm } from './FSTodoForm'

export const FSEditForm: React.FC = () => {
  const { id } = useParamsSafe(req({ id: string }))
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
