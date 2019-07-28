import React from 'react'
import { Post } from 'technoidentity-devfractal-api'
import { Section, Title } from 'technoidentity-devfractal-ui-core'
import { todoAPI } from './11.todoAPI'
import { TodoForm } from './12.TodoForm'

export const CreateTodoRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoAPI.create} redirectPath={'/'} />
  </Section>
)
