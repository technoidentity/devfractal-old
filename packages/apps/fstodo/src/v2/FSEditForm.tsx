import React from 'react'
import { useParamsSafe, useSubmitRedirect } from 'srtp-core'
import { Get } from 'srtp-crud'
import { req, string } from 'srtp-utils'
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
