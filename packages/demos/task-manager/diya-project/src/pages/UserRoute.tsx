import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { User, userAPI } from '../common'
import { UserForm } from '../views'

export const UserRoute: React.FC = () => (
  <Post
    onPost={values => userAPI.create(values)}
    redirectPath="/users"
    component={UserForm}
  />
)
