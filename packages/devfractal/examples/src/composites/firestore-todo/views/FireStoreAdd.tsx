import { Simple } from 'devfractal-simple'
import { useSubmitRedirect } from 'devfractal-ui-api'
import { Section } from 'devfractal-ui-core'
import { FormikActions } from 'formik'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../todoAPI'

interface FSAddFormInnerProps {
  fsAddTodo(todo: FSTodo, actions: FormikActions<Omit<FSTodo, 'id'>>): void
}

const initialValues: Omit<FSTodo, 'id'> = {
  title: '',
  done: false,
}

const FSAddFormInner: React.FC<FSAddFormInnerProps> = ({ fsAddTodo }) => (
  <Section>
    <Simple.Form onSubmit={fsAddTodo} initialValues={initialValues}>
      <Simple.Text name="title" />
      <Simple.Checkbox name="done">Done</Simple.Checkbox>
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)

interface FSAddFormViewProps {
  onCreate(
    todo: Omit<FSTodo, 'id'>,
    actions: FormikActions<Omit<FSTodo, 'id'>>,
  ): void
}

export const FSAddFormView: React.FC<FSAddFormViewProps> = ({ onCreate }) => (
  <FSAddFormInner fsAddTodo={onCreate} />
)

export const FSAddForm: React.FC = () => {
  // tslint:disable-next-line: no-unbound-method
  const { onSubmit } = useSubmitRedirect(fsTodoAPI.create, '/list')
  return <FSAddFormView onCreate={onSubmit} />
}
