import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { evAPI, paths } from '../common'
import { EVSList, RaiseRequestForm } from '../views'

const { create, edit, list } = paths('evs')

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
