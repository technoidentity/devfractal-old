import * as React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Modifiers: React.SFC = () => (
  <Tabs to="modifiers" size="medium">
    <TabsItem value="syntax" active>
      Syntax
    </TabsItem>
    <TabsItem value="helpers">Helpers</TabsItem>
    <TabsItem value="helpers">Responsive Helpers</TabsItem>
    <TabsItem value="colors">Color Helpers</TabsItem>
    <TabsItem value="typography">Typography helpers</TabsItem>
  </Tabs>
)
