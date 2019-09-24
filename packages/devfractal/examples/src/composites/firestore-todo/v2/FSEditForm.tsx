import React from 'react'
import { Get, useParams, useSubmitRedirect } from 'technoidentity-devfractal'
import { req, string } from 'technoidentity-utils'
import { fsTodoAPI } from '../common'
import { FSTodoForm } from './FSTodoForm'

export const FSEditForm: React.FC = () => {
  const { id } = useParams(req({ id: string }))
  const { onSubmit } = useSubmitRedirect(fsTodoAPI.replace, '/todos')
  return (
    <Get asyncFn={fsTodoAPI.one} deps={[id]}>
      {data => <FSTodoForm initial={data} onSubmit={onSubmit} />}
    </Get>
  )
}
