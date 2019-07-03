import React from 'react'
import { userApi } from '../common'
import { Post } from '../utils'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => (
  <Post redirectURL="/login" onPost={userApi.create} component={SignUpForm} />
)
