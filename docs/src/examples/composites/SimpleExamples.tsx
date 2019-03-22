import React from 'react'
import {
  Section,
  SimpleRoutedTabs,
  SimpleTabs,
  Text,
} from 'technoidentity-devfractal'
import { logger } from '../common'

const SimpleTabsExample: React.FC = () => (
  <SimpleTabs
    name="simpleTab"
    values={['pictures', 'movies', 'music', 'documents']}
    onChange={({ name, value }) => logger(`${name} : ${value}`)}
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
