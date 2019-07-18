import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { userApi } from '../common'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => (
  <Post redirectPath="/login" onPost={userApi.create} component={SignUpForm} />
)
