import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Layout: React.SFC = () => (
  <Tabs size="medium">
    <TabsItem active>Container</TabsItem>
    <TabsItem>Level</TabsItem>
    <TabsItem>Media Object</TabsItem>
    <TabsItem>Hero</TabsItem>
    <TabsItem>Section</TabsItem>
    <TabsItem>Footer</TabsItem>
    <TabsItem>Tiles</TabsItem>
  </Tabs>
)
