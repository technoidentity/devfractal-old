import { Route, SimpleRedirect } from 'devfractal-router'
import {
  DropDown,
  DropDownDivider,
  DropDownItem,
  RoutedTabs,
  RoutedTabsItem,
} from 'devfractal-ui'
import { Field, Level, LevelItem, Section, Title } from 'devfractal-ui-core'
import React from 'react'

const DropdownExampleTab: React.FC = () => (
  <>
    <Section>
      <Title size="4">Dropdown</Title>
      <DropDown label="Dropdown button">
        <DropDownItem>Dropdown item</DropDownItem>
        <DropDownItem as="a" active>
          Active Dropdown item
        </DropDownItem>
        <DropDownItem>Dropdown item</DropDownItem>
        <DropDownItem>Dropdown item</DropDownItem>
        <DropDownDivider />
        <DropDownItem>With a divider</DropDownItem>
      </DropDown>
    </Section>
  </>
)

const DropdownContentExampleTab: React.FC = () => (
  <>
    <Section>
      <Title size="4">DropDown Content</Title>
      <DropDown modifier="hoverable" label="Content">
        <DropDownItem>
          <p>
            You can insert <strong>any type of content</strong> within the
            dropdown menu.
          </p>
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem>
          <p>
            You simply need to use a <code>&lt;div&gt;</code> instead.
          </p>
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem>This is a link</DropDownItem>
      </DropDown>
    </Section>
  </>
)

const HoverableDropdownExampleTab: React.FC = () => (
  <>
    <Section>
      <Title size="4">Hoverable </Title>

      <DropDown modifier="hoverable" label="Hover me">
        <DropDownItem>
          You can insert any type of content within the dropdown menu.
        </DropDownItem>
      </DropDown>
    </Section>
  </>
)

const RightAlignableDropdownExampleTab: React.FC = () => (
  <div>
    <Section>
      <Level>
        <Title size="4">Right aligned</Title>
        <LevelItem direction="right">
          <DropDown modifier="active" rightAligned label="Right aligned">
            <DropDownItem>
              <p>
                Add the <code>is-right</code> modifier for a{' '}
                <strong>right-aligned</strong> dropdown.
              </p>
            </DropDownItem>
          </DropDown>
        </LevelItem>
      </Level>
    </Section>
  </div>
)

const LeftAlignableDropdownExampleTab: React.FC = () => (
  <>
    <Level>
      <LevelItem direction="left">
        <Section>
          <Field>
            <Title size="4">Left aligned</Title>
            <DropDown modifier="active" label="Left aligned">
              <DropDownItem>
                <p>
                  Add the <code>is-left</code> modifier for a{' '}
                  <strong>left-aligned</strong> dropdown.
                </p>
              </DropDownItem>
            </DropDown>
          </Field>
        </Section>
      </LevelItem>
    </Level>
  </>
)

const DropUpExampleTab: React.FC = () => (
  <>
    <Section>
      <Title size="4">Dropup</Title>
      <DropDown dropUp modifier="hoverable" label="Dropup button">
        <DropDownItem>
          <p>
            You can add the <code>is-up</code> modifier to have a dropdown menu
            that appears above the dropdown button.
          </p>
        </DropDownItem>
      </DropDown>
    </Section>
  </>
)

export const DropdownExamplesTab: React.FC = () => (
  <RoutedTabs to="/components/dropdown" size="medium">
    <RoutedTabsItem value="dropdown">DropDown</RoutedTabsItem>
    <RoutedTabsItem value="content">Content</RoutedTabsItem>
    <RoutedTabsItem value="hoverable">Hoverable </RoutedTabsItem>
    <RoutedTabsItem value="right">Right aligned</RoutedTabsItem>
    <RoutedTabsItem value="left">Left aligned</RoutedTabsItem>
    <RoutedTabsItem value="dropup">DropUp</RoutedTabsItem>
  </RoutedTabs>
)

export const DropdownExample: React.FC = () => <DropdownExamplesTab />

export const DropdownExampleRoutes: React.FC = () => (
  <>
    <SimpleRedirect
      from="/components/dropdown"
      to="/components/dropdown/dropdown"
    />
    } />
    <Route path="/components/dropdown" component={DropdownExamplesTab} />
    <Route
      path="/components/dropdown/dropdown"
      exact
      component={DropdownExampleTab}
    />
    <Route
      path="/components/dropdown/content"
      exact
      component={DropdownContentExampleTab}
    />
    <Route
      path="/components/dropdown/hoverable"
      exact
      component={HoverableDropdownExampleTab}
    />
    <Route
      path="/components/dropdown/right"
      exact
      component={RightAlignableDropdownExampleTab}
    />
    <Route
      path="/components/dropdown/left"
      exact
      component={LeftAlignableDropdownExampleTab}
    />
    <Route
      path="/components/dropdown/dropup"
      exact
      component={DropUpExampleTab}
    />
  </>
)
