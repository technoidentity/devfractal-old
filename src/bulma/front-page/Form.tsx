import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Form: React.SFC = () => (
  <Tabs to="/form" urlSeparator="-" size="medium">
    <TabsItem name="general" active>
      General
    </TabsItem>
    <TabsItem name="input">Input</TabsItem>
    <TabsItem name="button">Button</TabsItem>
    <TabsItem name="textarea">Textarea</TabsItem>
    <TabsItem name="select">Select</TabsItem>
    <TabsItem name="checkbox">Checkbox</TabsItem>
    <TabsItem name="radio-button">Radio</TabsItem>
    <TabsItem name="file">File</TabsItem>
  </Tabs>
)
