import React from 'react'
import { Get, Post, Put, useMatch } from 'technoidentity-devfractal'
import { Params, userAPI } from '../common'
import { UserForm, UserList } from '../views'

export const UserRoute: React.FC = () => (
  <Post
    onPost={values => userAPI.create(values)}
    redirectPath="/users"
    component={UserForm}
  />
)

export const UserListRoute: React.FC = () => (
  <Get asyncFn={() => userAPI.many()}>
    {data => <UserList userList={data} />}
  </Get>
)

export const EditUserRoute = () => {
  const { params } = useMatch(Params)

  return (
    <Put
      id={params.id}
      doGet={userAPI.get}
      onPut={userAPI.update}
      component={UserForm}
      redirectPath="/users"
    />
  )
}
