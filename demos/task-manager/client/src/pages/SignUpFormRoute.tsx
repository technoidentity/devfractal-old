import React from 'react'
import { Post } from 'technoidentity-devfractal-api'
import { userAPI } from '../common'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => (
  <Post redirectPath="/login" onPost={userAPI.create} component={SignUpForm} />
)
