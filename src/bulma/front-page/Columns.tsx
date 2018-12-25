import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Columns: React.SFC = () => (
  <Tabs to="/columns" size="medium">
    <TabsItem name="basics" active>
      Basics
    </TabsItem>
    <TabsItem name="size">Size</TabsItem>
    <TabsItem name="responsiveness">Responsiveness</TabsItem>
    <TabsItem name="nesting">Nesting</TabsItem>
    <TabsItem name="message">Message</TabsItem>
    <TabsItem name="gap">Gap</TabsItem>
    <TabsItem name="options">Options</TabsItem>
  </Tabs>
)
