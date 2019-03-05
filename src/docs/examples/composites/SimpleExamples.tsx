import React from 'react'
import { logger } from '../common'
import { Section, SimpleRoutedTabs, SimpleTabs, Text } from '../devfractal'

const SimpleTabsExample: React.FunctionComponent = () => (
  <SimpleTabs
    name="simpleTab"
    values={['pictures', 'movies', 'music', 'documents']}
    onTabChange={({ name, value }) => logger(`${name} : ${value}`)}
  />
)

const SimpleRoutesTabsExample: React.FunctionComponent = () => (
  <SimpleRoutedTabs
    to="/composites/simple"
    values={['pictures', 'movies', 'music', 'documents']}
  />
)

export const SimpleExamples: React.FunctionComponent = () => (
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
