import * as React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Columns: React.SFC = () => (
  <Tabs to="/columns" urlSeparator="-" size="medium">
    <TabsItem value="basics" active>
      Basics
    </TabsItem>
    <TabsItem value="size">Size</TabsItem>
    <TabsItem value="responsiveness">Responsiveness</TabsItem>
    <TabsItem value="nesting">Nesting</TabsItem>
    <TabsItem value="gap">Gap</TabsItem>
    <TabsItem value="options">Options</TabsItem>
  </Tabs>
)
