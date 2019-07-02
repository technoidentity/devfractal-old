import React from 'react'
import { sessionApi } from '../common'
import { Post, setLoggedIn } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => (
  <Post
    redirectURL="/tasks"
    title="Login Form"
    onPost={async data => {
      const result = await sessionApi.create(data)
      setLoggedIn()
      return result
    }}
    component={LoginForm}
  />
)
