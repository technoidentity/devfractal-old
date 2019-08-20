import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { Section, Title } from 'technoidentity-devfractal'
import { todoApi } from './11.todoAPI'
import { TodoForm } from './12.TodoForm'

export const CreateTodoRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoApi.create} redirectTo={'/'} />
  </Section>
)
