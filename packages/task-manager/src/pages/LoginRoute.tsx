import React from 'react'
import { sessionApi } from '../api'
import { Post } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => (
  <Post
    url="/tasks"
    title="Login Form"
    onPost={async data => {
      const result = await sessionApi.create(data)
      localStorage.setItem('loggedIn', JSON.stringify({ loggedIn: true }))
      return result
    }}
    component={LoginForm}
  />
)
