import * as React from 'react'
import { TabsItem, Tabs } from '../components/Tabs'

export const TabsExample: React.SFC = () => (
  <Tabs>
    <TabsItem href="#" active>
      Pictures
    </TabsItem>
    <TabsItem href="#">Music</TabsItem>
    <TabsItem href="#">Videos</TabsItem>
    <TabsItem href="#">Documents</TabsItem>
  </Tabs>
)
