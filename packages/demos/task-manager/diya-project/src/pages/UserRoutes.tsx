import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { paths, userAPI } from '../common'
import { UserForm, UserList } from '../views'

const { create, edit, list } = paths('users')

const UserRoute: React.FC = () => (
  <SimplePost
    path={create}
    api={userAPI}
    redirectPath={list}
    component={UserForm}
  />
)

const UserListRoute: React.FC = () => (
  <SimpleGet api={userAPI} path={list} component={UserList} />
)

const EditUserRoute = () => (
  <SimplePut
    path={edit}
    api={userAPI}
    component={UserForm}
    redirectPath={list}
  />
)

export const UserRoutes = () => (
  <>
    <UserListRoute />
    <EditUserRoute />
    <UserRoute />
  </>
)
