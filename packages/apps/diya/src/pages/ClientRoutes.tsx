import React from 'react'
import { CrudRoutes } from 'technoidentity-crud'
import { clientAPI } from '../common'
import { ClientForm, ClientList } from '../views'

export const ClientRoutes = () => (
  <CrudRoutes api={clientAPI} form={ClientForm} list={ClientList} />
)
