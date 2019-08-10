import React from 'react'
import { Put, useMatch } from 'technoidentity-devfractal'
import { Params, userAPI } from '../common'
import { UserForm } from '../views'

export const EditUserRoute: React.FC = () => {
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
