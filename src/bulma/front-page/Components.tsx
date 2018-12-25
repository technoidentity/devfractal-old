import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Components: React.SFC = () => (
  <Tabs to="/components" size="medium">
    <TabsItem name="breadcrumb" active>
      Breadcrumb
    </TabsItem>
    <TabsItem name="card">Card</TabsItem>
    <TabsItem name="dropdown">Dropdown</TabsItem>
    <TabsItem name="menu">Menu</TabsItem>
    <TabsItem name="message">Message</TabsItem>
    <TabsItem name="modal">Modal</TabsItem>
    <TabsItem name="navbar">Navbar</TabsItem>
    <TabsItem name="pagination">Pagination</TabsItem>
    <TabsItem name="panel">Panel</TabsItem>
    <TabsItem name="tabs">Tabs</TabsItem>
  </Tabs>
)
