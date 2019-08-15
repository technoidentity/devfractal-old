import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { clientAPI } from '../common'
import { ClientList } from '../views/ClientList'

export const ClientListRoute: React.FC = () => (
  <Get asyncFn={async () => clientAPI.many()}>
    {data => <ClientList clientList={data} />}
  </Get>
)
