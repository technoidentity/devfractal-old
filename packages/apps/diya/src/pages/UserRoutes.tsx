import React from 'react'
import {
  Get,
  paths,
  Post,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  cargosUrl,
  userAPI,
  UserData,
  UserData as UD,
  UserEdit as UE,
  userEditAPI,
  UserListResponse,
  UserResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { UserForm, UserList } from '../views'

const ps = paths(userAPI.resource)

export async function getUserList(): Promise<UserListResponse['data']['rows']> {
  try {
    const users = await cargosUrl().get({ resource: 'users' }, UserListResponse)
    return users.data.rows
  } catch (error) {
    throw Error(error)
  }
}
async function getUser(id: string): Promise<UE['data']> {
  try {
    const users = await cargosUrl().get({ resource: 'users', path: id }, UE)
    return users.data
  } catch (error) {
    throw Error(error)
  }
}

async function putUser(data: UserData): Promise<UE['data']> {
  try {
    const users = await cargosUrl().put({ resource: 'users' }, data, UE)
    toastMessage('User Updated')
    return users.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

async function postUser(data: UD): Promise<UserResponse['data']> {
  try {
    const user = await cargosUrl().post(
      { resource: 'users' },
      data,
      UserResponse,
    )
    toastMessage('User Added')
    return user.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

const UserListRoute = () => <Get asyncFn={getUserList} component={UserList} />
const UserAdd = () => (
  <Post redirectTo="/users" component={UserForm} onPost={postUser} />
)

const UserEdit = () => {
  const { params } = useMatch(type({ [userEditAPI.idKey]: string }))
  return (
    <Put
      id={params[userEditAPI.idKey as string] as any}
      doGet={getUser}
      onPut={(_id, data) => putUser(data)}
      component={UserForm}
      redirectTo="/users"
    />
  )
}

export const UserRoutes = () => (
  <>
    <Route path={ps.create} render={() => <UserAdd />} />
    <Route path={ps.list} render={() => <UserListRoute />} />
    <Route path={ps.edit} render={() => <UserEdit />} />
  </>
)
