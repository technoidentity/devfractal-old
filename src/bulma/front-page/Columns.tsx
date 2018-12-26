import * as React from 'react'
import { Tabs, TabsItem } from '../components'

export const Columns: React.SFC = () => (
  <Tabs to="/columns" urlSeparator="-" size="medium">
    <TabsItem name="basics" active>
      Basics
    </TabsItem>
    <TabsItem name="size">Size</TabsItem>
    <TabsItem name="responsiveness">Responsiveness</TabsItem>
    <TabsItem name="nesting">Nesting</TabsItem>
    <TabsItem name="gap">Gap</TabsItem>
    <TabsItem name="options">Options</TabsItem>
  </Tabs>
)
