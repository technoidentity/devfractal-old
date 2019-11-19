import { Route, useMatch } from 'devfractal-router'
import React from 'react'
import { Get, paths, Post, Put } from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  cargosUrl,
  tabletAPI,
  TabletData,
  tabletEditAPI,
  TabletListResponse,
  TabletResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { TabletForm } from '../views/AddTabletForm'
import { TabletList } from '../views/TabletList'
const ps = paths(tabletAPI.resource)

export async function getTabletList(): Promise<
  TabletListResponse['data']['rows']
> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'tablets' },
      TabletListResponse,
    )
    return drivers.data.rows
  } catch (error) {
    throw Error(error)
  }
}

export async function getTablet(id: string): Promise<TabletResponse['data']> {
  try {
    const tablets = await cargosUrl().get(
      { resource: 'tablets', path: id },
      TabletResponse,
    )
    return tablets.data
  } catch (error) {
    throw Error(error)
  }
}

async function putTablet(data: TabletData): Promise<TabletResponse['data']> {
  try {
    const tablets = await cargosUrl().put(
      { resource: 'tablets' },
      data,
      TabletResponse,
    )
    toastMessage('Tablet Updated')
    return tablets.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

async function postTablet(data: TabletData): Promise<TabletResponse['data']> {
  try {
    const tablet = await cargosUrl().post(
      { resource: 'tablets' },
      data,
      TabletResponse,
    )
    toastMessage('Tablet Added')
    return tablet.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

const TabletListRoute = () => (
  <Get asyncFn={getTabletList} component={TabletList} />
)

const TabletAdd = () => (
  <Post redirectTo={ps.list} component={TabletForm} onPost={postTablet} />
)

const TabletEdit = () => {
  const { params } = useMatch(type({ [tabletEditAPI.idKey]: string }))
  return (
    <Put
      id={params[tabletEditAPI.idKey as string] as any}
      doGet={getTablet}
      onPut={(_id, data) => putTablet(data)}
      component={TabletForm}
      redirectTo={ps.list}
    />
  )
}

export const TabletFormRoute = () => (
  <>
    <Route path={ps.create} render={() => <TabletAdd />} />
    <Route path={ps.list} render={() => <TabletListRoute />} />
    <Route path={ps.edit} render={() => <TabletEdit />} />
  </>
)
