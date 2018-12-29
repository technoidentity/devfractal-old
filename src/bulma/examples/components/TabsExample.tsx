import React from 'react'
import { Value } from 'react-powerplug'
import { Tabs, TabsItem } from '../../components/Tabs'
import { Text } from '../../modifiers/Text'

export const TabsExample: React.SFC = () => (
  <div>
    {/* <Tabs
      name="firstTab"
      selectedTab="videos"
      className="is-centered is-toggle is-toggle-rounded"
      size="medium"
    >
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs> */}
    <Text textSize="3">Uncontrolled Tab components</Text>
    <Tabs name="secondTab" defaultValue="documents" size="medium">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>

    <Text textSize="3">no Change, value only Tab</Text>
    <Tabs selectedTab="music" name="secondTab" size="medium">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>

    <Text textSize="3">controlled Tab</Text>
    <Value
      initial={'music'}
      render={({ value, set }) => (
        <Tabs
          selectedTab={value}
          onTabChange={({ value }) => {
            set(value || 'music')
          }}
          name="secondTab"
          size="medium"
        >
          <TabsItem value="pictures">Pictures</TabsItem>
          <TabsItem value="music">Music</TabsItem>
          <TabsItem value="videos">Videos</TabsItem>
          <TabsItem value="documents">Documents</TabsItem>
        </Tabs>
      )}
    />
  </div>
)
