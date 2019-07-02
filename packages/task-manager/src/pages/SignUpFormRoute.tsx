import React from 'react'
import { userApi } from '../api'
import { Post } from '../utils'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => (
  <Post
    title="Sign up form"
    redirectURL="/login"
    onPost={userApi.create}
    component={SignUpForm}
  />
)
