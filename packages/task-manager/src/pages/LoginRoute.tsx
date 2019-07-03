import React from 'react'
import { sessionApi } from '../common'
import { Post, useAuth } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => {
  const { login } = useAuth()
  return (
    <Post
      redirectURL="/tasks"
      title="Login Form"
      onPost={async data => {
        const result = await sessionApi.create(data)
        login()
        return result
      }}
      component={LoginForm}
    />
  )
}
