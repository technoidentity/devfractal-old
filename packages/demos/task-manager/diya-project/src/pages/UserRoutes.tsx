import React from 'react'
import { userAPI } from '../common'
import { CrudRoutes } from '../crud'
import { UserForm, UserList } from '../views'

export const UserRoutes = () => (
  <CrudRoutes
    api={userAPI}
    resource="users"
    formComponent={UserForm}
    listComponent={UserList}
  />
)
