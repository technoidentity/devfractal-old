import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { paths, userAPI } from '../common'
import { UserForm, UserList } from '../views'

const userPaths = paths('users')

const UserRoute: React.FC = () => (
  <SimplePost
    path={userPaths.create}
    api={userAPI}
    redirectPath={userPaths.list}
    component={UserForm}
  />
)

const UserListRoute: React.FC = () => (
  <SimpleGet api={userAPI} path={userPaths.list} component={UserList} />
)

const EditUserRoute = () => (
  <SimplePut
    path={userPaths.edit}
    api={userAPI}
    component={UserForm}
    redirectPath={userPaths.list}
  />
)

export const UserRoutes = () => (
  <>
    <UserListRoute />
    <EditUserRoute />
    <UserRoute />
  </>
)
