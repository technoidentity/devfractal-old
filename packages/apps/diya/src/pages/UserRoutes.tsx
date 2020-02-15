import React from 'react'
import { CrudRoutes } from 'technoidentity-devfractal'
import { userAPI } from '../common'
import { UserForm, UserList } from '../views'

export const UserRoutes = () => (
  <CrudRoutes api={userAPI} form={UserForm} list={UserList} />
)
