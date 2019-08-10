import { Post } from 'devfractal-ui-api'
import React from 'react'
import { userAPI } from '../common'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => (
  <Post redirectPath="/login" onPost={userAPI.create} component={SignUpForm} />
)
