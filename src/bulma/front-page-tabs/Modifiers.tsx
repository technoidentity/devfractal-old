import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Modifiers: React.SFC = () => (
  <>
    <Tabs size="medium">
      <TabsItem active>Syntax</TabsItem>
      <TabsItem>Helpers</TabsItem>
      <TabsItem>Responsive Helpers</TabsItem>
      <TabsItem>Color Helpers</TabsItem>
      <TabsItem>Typography helpers</TabsItem>
    </Tabs>
  </>
)
