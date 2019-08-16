import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { paths } from '../crud'
import { EVSList, RaiseRequestForm } from '../views'

const { create, list } = paths('evs')

const RaiseRequestRoute: React.FC = () => (
  <SimplePost
    path={create}
    api={evAPI}
    redirectPath={list}
    component={RaiseRequestForm}
  />
)

const EVSAssignedRoute = () => (
  <SimpleGet path={list} api={evAPI} component={EVSList} />
)

export const EVSRoutes = () => (
  <>
    <EVSAssignedRoute />
    <RaiseRequestRoute />
  </>
)
