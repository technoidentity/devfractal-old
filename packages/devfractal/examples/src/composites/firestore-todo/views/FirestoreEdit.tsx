import { FormikActions } from 'formik'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Get, Simple, useSubmitRedirect } from 'technoidentity-devfractal'
import { FSTodo, fsTodoAPI } from '../todoAPI'

export interface FSEditViewProps {
  readonly todo: FSTodo
  onEdit(todo: FSTodo, actions: FormikActions<typeof todo>): void
}

export const FSEditView: React.FC<FSEditViewProps> = ({ todo, onEdit }) => (
  <Simple.Form initialValues={{ ...todo }} onSubmit={onEdit}>
    <Simple.Text name="title" placeholder="title" />

    <Simple.Checkbox name="done"> Done</Simple.Checkbox>
    <Simple.FormButtons />
  </Simple.Form>
)

interface FSEditProps {
  readonly id: string
}

export const FSEdit: React.FC<FSEditProps> = ({ id }) => {
  const handleEdit: (todo: FSTodo) => Promise<FSTodo> = fsTodoAPI.replace
  const { onSubmit } = useSubmitRedirect(handleEdit, '/list')

  return (
    <Get asyncFn={fsTodoAPI.one} deps={[id]}>
      {data => <FSEditView todo={data} onEdit={onSubmit} />}
    </Get>
  )
}

export const FSEditForm: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match }) => {
  return <FSEdit id={match.params.id} />
}
