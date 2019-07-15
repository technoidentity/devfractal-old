import React from 'react'
import { Post, Section, Title } from 'technoidentity-devfractal'
import { todoApi } from './11.Todo'
import { TodoForm } from './12.TodoForm'

export const CreateTodoRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoApi.create} redirectPath={'/'} />
  </Section>
)
