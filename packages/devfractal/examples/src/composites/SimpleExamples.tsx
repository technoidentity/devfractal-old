import { SimpleRoutedTabs, SimpleTabs } from 'devfractal-simple'
import { Section, Text } from 'devfractal-ui-core'
import React from 'react'

const SimpleTabsExample: React.FC = () => (
  <SimpleTabs
    name="simpleTab"
    values={['pictures', 'movies', 'music', 'documents']}
    onChange={({ name, value }) => console.log(`${name} : ${value}`)}
  />
)

const SimpleRoutesTabsExample: React.FC = () => (
  <SimpleRoutedTabs
    to="/composites/simple"
    values={['pictures', 'movies', 'music', 'documents']}
  />
)

export const SimpleExamples: React.FC = () => (
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
