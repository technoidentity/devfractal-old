import React from 'react'
import { userAPI } from '../common'
import { CrudRoutes } from '../components'
import { UserForm, UserList } from '../views'

export const UserRoutes = () => (
  <CrudRoutes
    api={userAPI}
    resource="batteries"
    formComponent={UserForm}
    listComponent={UserList}
  />
)
