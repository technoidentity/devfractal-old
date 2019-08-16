import React from 'react'
import { clientAPI } from '../common'
import { CrudRoutes } from '../components'
import { ClientForm, ClientList } from '../views'

export const ClientRoutes = () => (
  <CrudRoutes
    api={clientAPI}
    resource="batteries"
    formComponent={ClientForm}
    listComponent={ClientList}
  />
)
