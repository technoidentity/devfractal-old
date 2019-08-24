import { boolean, number, string } from 'io-ts'
import React from 'react'
import {
  All,
  ButtonLink,
  ButtonsGroup,
  ButtonsGroupProps,
  Create,
  CrudTable,
  Edit,
  Editor,
  formComponent,
  links,
  listComponent,
  paths,
  rest,
  Router,
  Section,
  SimpleRedirect,
  Title,
} from 'technoidentity-devfractal'
import { ISODate, props } from 'technoidentity-utils'

const Todo = props(
  { id: number },
  { title: string, scheduled: ISODate, done: boolean },
)

const todoApi = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
})

const ps = paths(todoApi.resource)
const ls = links(todoApi.resource)

const TodoForm = formComponent(Todo, ({ onSubmit, initial, edit }) => (
  <>
    <Title textAlignment="centered">{edit ? 'Create' : 'Edit'} Todo</Title>
    <Editor id="id" data={initial} onSubmit={onSubmit} />
  </>
))

const TodoList = listComponent(Todo, ({ data }) => (
  <>
    <CreateLink createTo={ls.create}>Add</CreateLink>
    <CrudTable
      data={data}
      headers={['title', 'done']}
      editTo={v => ls.edit(v.id)}
    />
  </>
))

const CreateTodoRoute = () => (
  <Create path={ps.create} form={TodoForm} api={todoApi} redirectTo={ls.list} />
)

export const EditTodoRoute = () => (
  <Edit path={ps.edit} api={todoApi} form={TodoForm} redirectTo={ls.list} />
)

interface CreateLinkProps {
  readonly alignment?: ButtonsGroupProps['alignment']
  readonly createTo: string
}

const CreateLink: React.FC<CreateLinkProps> = ({
  alignment = 'centered',
  createTo,
  children,
}) => (
  <ButtonsGroup alignment={alignment}>
    <ButtonLink to={createTo} variant="primary">
      {children}
    </ButtonLink>
  </ButtonsGroup>
)

const TodoListRoute = () => {
  return (
    <>
      <Title textAlignment="centered">Todo List</Title>
      <All path={ps.list} api={todoApi} list={TodoList} />
    </>
  )
}

export const TodoApp = () => (
  <Router>
    <Section>
      <SimpleRedirect from="/" to={ls.list} />
      <EditTodoRoute />
      <TodoListRoute />
      <CreateTodoRoute />
    </Section>
  </Router>
)
