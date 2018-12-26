import * as React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Modifiers: React.SFC = () => (
  <Tabs to="modifiers" size="medium">
    <TabsItem name="syntax" active>
      Syntax
    </TabsItem>
    <TabsItem name="helpers">Helpers</TabsItem>
    <TabsItem name="helpers">Responsive Helpers</TabsItem>
    <TabsItem name="colors">Color Helpers</TabsItem>
    <TabsItem name="typography">Typography helpers</TabsItem>
  </Tabs>
)
