import React from 'react'
import { Get, Post, Put, useMatch } from 'technoidentity-devfractal'
import { clientAPI, Params } from '../common'
import { ClientForm, ClientList } from '../views'

export const ClientRoute = () => (
  <Post
    onPost={clientAPI.create}
    redirectPath="/clients"
    component={ClientForm}
  />
)

export const ClientListRoute = () => (
  <Get asyncFn={async () => clientAPI.many()}>
    {data => <ClientList clientList={data} />}
  </Get>
)

export const EditClientRoute = () => {
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
