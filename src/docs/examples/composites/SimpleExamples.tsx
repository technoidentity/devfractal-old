import React from 'react'
import { Section, Text } from '../../../devfractal'
import { SimpleRoutedTabs, SimpleTabs } from '../../../simple'
import { logger } from '../common'

const SimpleTabsExample: React.SFC = () => (
  <SimpleTabs
    name="simpleTab"
    values={['pictures', 'movies', 'music', 'documents']}
    onTabChange={({ name, value }) => logger(`${name} : ${value}`)}
  />
)

const SimpleRoutesTabsExample: React.SFC = () => (
  <SimpleRoutedTabs
    to="/composites/simple"
    values={['pictures', 'movies', 'music', 'documents']}
  />
)

export const SimpleExamples: React.SFC = () => (
  <>
    <Section>
      <Text textSize="3">Tabs</Text>
      <SimpleTabsExample />
    </Section>
    <Section>
      <Text textSize="3">Routed Tabs</Text>
      <SimpleRoutesTabsExample />
    </Section>
  </>
)
