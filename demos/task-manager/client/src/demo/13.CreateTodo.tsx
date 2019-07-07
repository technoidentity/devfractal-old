import React from 'react'
import { Post, Section, Title } from 'technoidentity-devfractal'
import { Todo, todoApi } from './11.todo'
import { TodoForm } from './12.TodoForm'

export const CreateTodoRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Todo</Title>
    <Post<Todo>
      component={TodoForm}
      onPost={todoApi.create}
      redirectURL={'/'}
    />
  </Section>
)
