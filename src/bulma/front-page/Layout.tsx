import * as React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Layout: React.SFC = () => (
  <Tabs to="/layout" size="medium">
    <TabsItem value="container">Container</TabsItem>
    <TabsItem value="level">Level</TabsItem>
    <TabsItem value="object">Media Object</TabsItem>
    <TabsItem value="hero">Hero</TabsItem>
    <TabsItem value="section">Section</TabsItem>
    <TabsItem value="footer">Footer</TabsItem>
    <TabsItem value="tiles">Tiles</TabsItem>
  </Tabs>
)
