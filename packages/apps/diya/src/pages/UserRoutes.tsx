import { CrudRoutes } from '@stp/devfractal'
import React from 'react'
import { userAPI } from '../common'
import { UserForm, UserList } from '../views'

export const UserRoutes = () => (
  <CrudRoutes api={userAPI} form={UserForm} list={UserList} />
)
