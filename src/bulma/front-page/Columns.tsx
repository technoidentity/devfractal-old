import React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Columns: React.SFC = () => (
  <Tabs to="/columns" size="medium">
    <TabsItem value="basics">Basics</TabsItem>
    <TabsItem value="size">Size</TabsItem>
    <TabsItem value="responsive">Responsive</TabsItem>
    <TabsItem value="nesting">Nesting</TabsItem>
    <TabsItem value="gap">Gap</TabsItem>
    <TabsItem value="options">Options</TabsItem>
  </Tabs>
)
