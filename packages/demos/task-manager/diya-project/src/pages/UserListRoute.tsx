import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { userAPI } from '../common'
import { UserList } from '../views'

export const UserListRoute: React.FC = () => (
  <Get asyncFn={() => userAPI.many()}>
    {data => <UserList userList={data} />}
  </Get>
)
