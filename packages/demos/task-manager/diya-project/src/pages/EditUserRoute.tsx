import { Put } from 'devfractal-api'
import { useMatch } from 'devfractal-router'
import React from 'react'
import { Params, User, userAPI } from '../common'
import { UserForm } from '../views'

export const EditUserRoute: React.FC = () => {
  const { params } = useMatch(Params)
  return (
    <Put<User>
      id={params.id}
      doGet={userAPI.get}
      onPut={userAPI.update}
      component={UserForm}
      redirectPath="/users"
    />
  )
}
