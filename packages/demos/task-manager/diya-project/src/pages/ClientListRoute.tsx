import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { clientAPI } from '../common'
import { ClientList } from '../views'

export const ClientListRoute = () => (
  <Get asyncFn={async () => clientAPI.many()}>
    {data => <ClientList clientList={data} />}
  </Get>
)
