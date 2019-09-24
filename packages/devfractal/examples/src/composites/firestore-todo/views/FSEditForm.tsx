import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Get, useSubmitRedirect } from 'technoidentity-devfractal'
import { fsTodoAPI } from '../todoAPI'
import { FSTodoForm } from './FSTodoForm'

interface FSEditProps {
  readonly id: string
}

export const FSEdit: React.FC<FSEditProps> = ({ id }) => {
  const { onSubmit } = useSubmitRedirect(fsTodoAPI.replace, '/list')

  return (
    <Get asyncFn={fsTodoAPI.one} deps={[id]}>
      {data => <FSTodoForm initial={data} onSubmit={onSubmit} />}
    </Get>
  )
}

export const FSEditForm: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match }) => {
  return <FSEdit id={match.params.id} />
}
