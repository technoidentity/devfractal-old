import * as React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Components: React.SFC = () => (
  <Tabs to="/components" size="medium">
    <TabsItem value="breadcrumb">Breadcrumb</TabsItem>
    <TabsItem value="card">Card</TabsItem>
    <TabsItem value="dropdown">Dropdown</TabsItem>
    <TabsItem value="menu">Menu</TabsItem>
    <TabsItem value="message">Message</TabsItem>
    <TabsItem value="modal">Modal</TabsItem>
    <TabsItem value="navbar">Navbar</TabsItem>
    <TabsItem value="pagination">Pagination</TabsItem>
    <TabsItem value="panel">Panel</TabsItem>
    <TabsItem value="tabs">Tabs</TabsItem>
  </Tabs>
)
