import * as React from 'react'
import { TabsItem, Tabs } from '../components/Tabs'

export const TabsExample: React.SFC = () => (
  <Tabs>
    <TabsItem active>Pictures</TabsItem>
    <TabsItem>Music</TabsItem>
    <TabsItem>Videos</TabsItem>
    <TabsItem>Documents</TabsItem>
  </Tabs>
)
