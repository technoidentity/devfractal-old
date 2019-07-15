import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { sessionApi } from '../common'
import { useAuth } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => {
  const { login } = useAuth()
  return (
    <Post
      redirectPath="/tasks"
      onPost={async data => {
        const result = await sessionApi.create(data)
        login()
        return result
      }}
      component={LoginForm}
    />
  )
}
