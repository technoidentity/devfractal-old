import React from 'react'
import { Put, useMatch } from 'technoidentity-devfractal'
import { clientAPI, Params } from '../common'
import { ClientForm } from '../views'

export const EditClientRoute: React.FC = () => {
  const { params } = useMatch(Params)

  return (
    <Put
      id={params.id}
      doGet={clientAPI.get}
      onPut={clientAPI.update}
      component={ClientForm}
      redirectPath="/clients"
    />
  )
}
