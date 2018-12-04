import * as React from 'react'
import { TabsItem, Tabs } from '../components/Tabs'

export const TabsExample: React.SFC = () => (
  <div>
    <Tabs className="is-centered  is-toggle is-toggle-rounded" size="medium">
      <TabsItem>Pictures</TabsItem>
      <TabsItem className="is-active">Music</TabsItem>
      <TabsItem>Videos</TabsItem>
      <TabsItem>Documents</TabsItem>
    </Tabs>
    <Tabs size="medium">
      <TabsItem>Pictures</TabsItem>
      <TabsItem>Music</TabsItem>
      <TabsItem className="is-active">Videos</TabsItem>
      <TabsItem>Documents</TabsItem>
    </Tabs>
  </div>
)
