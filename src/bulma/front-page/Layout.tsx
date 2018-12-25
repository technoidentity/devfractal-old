import * as React from 'react'
import { Tabs, TabsItem } from '../components'

export const Layout: React.SFC = () => (
  <Tabs to="layout" urlSeparator="-" size="medium">
    <TabsItem name="container" active>
      Container
    </TabsItem>
    <TabsItem name="level">Level</TabsItem>
    <TabsItem name="object">Media Object</TabsItem>
    <TabsItem name="hero">Hero</TabsItem>
    <TabsItem name="section">Section</TabsItem>
    <TabsItem name="footer">Footer</TabsItem>
    <TabsItem name="tiles">Tiles</TabsItem>
  </Tabs>
)
