import { Route, useMatch } from 'devfractal-router'
import React from 'react'
import { Get, paths, Post, Put } from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  sessionExpire,
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

export async function getTabletList({
  setUser,
  logout,
}: any): Promise<TabletListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'tablets' },
      TabletListResponse,
    )
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

export async function getTablet(
  id: string,
  { setUser, logout }: any,
): Promise<TabletResponse['data']> {
  try {
    const tablets = await cargosUrl().get(
      { resource: 'tablets', path: id },
      TabletResponse,
    )
    return tablets.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function putTablet(
  data: TabletData,
  { setUser, logout }: any,
): Promise<TabletResponse['data']> {
  try {
    const tablets = await cargosUrl().put(
      { resource: 'tablets' },
      data,
      TabletResponse,
    )
    toastMessage('success','Tablet Updated')
    return tablets.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail',error.response.data.errors)
    throw Error(error)
  }
}

async function postTablet(
  data: TabletData,
  { setUser, logout }: any,
): Promise<TabletResponse['data']> {
  try {
    const tablet = await cargosUrl().post(
      { resource: 'tablets' },
      data,
      TabletResponse,
    )
    toastMessage('success','Tablet Added')
    return tablet.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail',error.response.data.errors)
    throw Error(error)
  }
}

const TabletListRoute = ({ setUser, logout }: any) => (
  <Get
    asyncFn={() => getTabletList({ setUser, logout })}
    component={TabletList}
  />
)

const TabletAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo={ps.list}
    component={TabletForm}
    onPost={data => postTablet(data, { setUser, logout })}
  />
)

const TabletEdit = ({ setUser, logout }: any) => {
  const { params } = useMatch(type({ [tabletEditAPI.idKey]: string }))
  return (
    <Put
      id={params[tabletEditAPI.idKey as string] as any}
      doGet={id => getTablet(id as string, { setUser, logout })}
      onPut={(_id, data) => putTablet(data, { setUser, logout })}
      component={TabletForm}
      redirectTo={ps.list}
    />
  )
}

export const TabletFormRoute = () => {
  const { logout, setUser } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <TabletAdd setUser={setUser} logout={logout} />}
      />
      <Route
        path={ps.list}
        render={() => <TabletListRoute setUser={setUser} logout={logout} />}
      />
      <Route
        path={ps.edit}
        render={() => <TabletEdit setUser={setUser} logout={logout} />}
      />
    </>
  )
}
