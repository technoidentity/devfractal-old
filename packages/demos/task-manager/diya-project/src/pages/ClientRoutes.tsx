import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { clientAPI } from '../common'
import { ClientForm, ClientList } from '../views'

export const ClientRoutes = () => (
  <v2.CrudRoutes api={clientAPI} form={ClientForm} list={ClientList} />
)
