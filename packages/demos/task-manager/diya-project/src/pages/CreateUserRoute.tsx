import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { User, userAPI } from '../common'
import { UserForm } from '../views'

export const CreateUserRoute: React.FC = () => (
  <>
    <Post<User>
      onPost={values => userAPI.create(values)}
      redirectPath="/users"
      component={UserForm}
    />
  </>
)
