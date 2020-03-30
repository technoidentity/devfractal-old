import React from 'react'
import { CrudRoutes } from 'srtp-crud'
import { userAPI } from '../common'
import { UserForm, UserList } from '../views'

export const UserRoutes = () => (
  <CrudRoutes api={userAPI} form={UserForm} list={UserList} />
)
