import React from 'react'
import { Post } from 'technoidentity-crud'
import { Section, Title } from 'technoidentity-ui'
import { todoApi } from './08.todoAPI'
import { TodoForm } from './09.TodoForm'

export const CreateTodoRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoApi.create} redirectTo={'/'} />
  </Section>
)
