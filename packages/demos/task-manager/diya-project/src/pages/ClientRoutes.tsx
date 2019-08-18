import React from 'react'
import { clientAPI } from '../common'
import { CrudRoutes } from '../crud'
import { ClientForm, ClientList } from '../views'

export const ClientRoutes = () => (
  <CrudRoutes
    api={clientAPI}
    resource="clients"
    formComponent={ClientForm}
    listComponent={ClientList}
  />
)
