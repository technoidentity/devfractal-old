import { Post } from 'devfractal-ui-api'
import React from 'react'
import { sessionAPI } from '../common'
import { useAuth } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => {
  const { login } = useAuth()
  return (
    <Post
      redirectTo="/tasks"
      onPost={async data => {
        const result = await sessionAPI.create(data)
        login()
        return result
      }}
      component={LoginForm}
    />
  )
}
