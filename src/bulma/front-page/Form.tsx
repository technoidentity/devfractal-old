import React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Form: React.SFC = () => (
  <Tabs to="/form" size="medium">
    <TabsItem value="general">General</TabsItem>
    <TabsItem value="input">Input</TabsItem>
    <TabsItem value="button">Button</TabsItem>
    <TabsItem value="textarea">Textarea</TabsItem>
    <TabsItem value="select">Select</TabsItem>
    <TabsItem value="checkbox">Checkbox</TabsItem>
    <TabsItem value="radio-button">Radio</TabsItem>
    <TabsItem value="file">File</TabsItem>
  </Tabs>
)
