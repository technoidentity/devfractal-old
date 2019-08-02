import { Post } from 'devfractal-api'
import { Section, Title } from 'devfractal-ui-core'
import React from 'react'
import { todoApi } from './11.todoAPI'
import { TodoForm } from './12.TodoForm'

export const CreateTodoRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoApi.create} redirectPath={'/'} />
  </Section>
)
