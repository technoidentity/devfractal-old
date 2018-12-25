import React from 'react'
import { Tabs, TabsItem } from '../components/StatefulTabs'

export const TabsExample: React.SFC = () => (
  <div>
    <Tabs
      name="firstTab"
      defaultValue="Pictures"
      className="is-centered  is-toggle is-toggle-rounded"
      size="medium"
    >
      <TabsItem value="Pictures">Pictures</TabsItem>
      <TabsItem value="Music">Music</TabsItem>
      <TabsItem value="Videos">Videos</TabsItem>
      <TabsItem value="Documents">Documents</TabsItem>
    </Tabs>
    <Tabs defaultValue="Pictures" name="secondTab" size="medium">
      <TabsItem value="Pictures">Pictures</TabsItem>
      <TabsItem value="Music">Music</TabsItem>
      <TabsItem value="Videos" active>
        Videos
      </TabsItem>
      <TabsItem value="Documents">Documents</TabsItem>
    </Tabs>
  </div>
)
