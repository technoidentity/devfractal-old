import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Form: React.SFC = () => (
  <>
    <Tabs size="medium">
      <TabsItem active>General</TabsItem>
      <TabsItem>Input</TabsItem>
      <TabsItem>Textarea</TabsItem>
      <TabsItem>Select</TabsItem>
      <TabsItem>Checkbox</TabsItem>
      <TabsItem>Radio</TabsItem>
      <TabsItem>File</TabsItem>
    </Tabs>
  </>
)
