import React from 'react'
import { Post } from 'technoidentity-crud'
import { userAPI } from '../common'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => (
  <Post redirectTo="/login" onPost={userAPI.create} component={SignUpForm} />
)
