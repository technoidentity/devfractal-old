import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { userAPI } from '../common'
import { UserForm, UserList } from '../views'

export const UserRoutes = () => (
  <v2.CrudRoutes api={userAPI} form={UserForm} list={UserList} />
)
