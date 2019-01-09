import React from 'react'
import { Redirect, Route } from 'react-router'
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Field,
  Level,
  LevelItem,
  RoutedTabs,
  RoutedTabsItem,
  Section,
  Title,
} from '../devfractal'

const DropDownExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Dropdown</Title>
      <Dropdown modifier="active" label="Dropdown button">
        <DropdownItem>Dropdown item</DropdownItem>
        <DropdownItem as="a" active>
          Active Dropdown item
        </DropdownItem>
        <DropdownItem>Dropdown item</DropdownItem>
        <DropdownItem>Dropdown item</DropdownItem>
        <DropdownDivider />
        <DropdownItem>With a divider</DropdownItem>
      </Dropdown>
    </Section>
  </>
)

const DropDownContentExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">DropDown Content</Title>
      <Dropdown modifier="hoverable" label="Content">
        <DropdownItem>
          <p>
            You can insert <strong>any type of content</strong> within the
            dropdown menu.
          </p>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <p>
            You simply need to use a <code>&lt;div&gt;</code> instead.
          </p>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>This is a link</DropdownItem>
      </Dropdown>
    </Section>
  </>
)
const HoverableDropdownExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Hoverable </Title>

      <Dropdown modifier="hoverable" label="Hover me">
        <DropdownItem>
          You can insert any type of content within the dropdown menu.
        </DropdownItem>
      </Dropdown>
    </Section>
  </>
)

const RightAlignableDropdownExampleTab: React.SFC = () => (
  <div>
    <Section>
      <Level>
        <Title size="4">Right aligned</Title>
        <LevelItem levelItemType="right">
          <Dropdown modifier="active" rightAligned label="Right aligned">
            <DropdownItem>
              <p>
                Add the <code>is-right</code> modifier for a{' '}
                <strong>right-aligned</strong> dropdown.
              </p>
            </DropdownItem>
          </Dropdown>
        </LevelItem>
      </Level>
    </Section>
  </div>
)

const LeftAlignableDropdownExampleTab: React.SFC = () => (
  <>
    <Level>
      <LevelItem levelItemType="left">
        <Section>
          <Field>
            <Title size="4">Left aligned</Title>
            <Dropdown modifier="active" label="Left aligned">
              <DropdownItem>
                <p>
                  Add the <code>is-left</code> modifier for a{' '}
                  <strong>left-aligned</strong> dropdown.
                </p>
              </DropdownItem>
            </Dropdown>
          </Field>
        </Section>
      </LevelItem>
    </Level>
  </>
)

const DropUpExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Dropup</Title>
      <Dropdown dropUp modifier="hoverable" label="Dropup button">
        <DropdownItem>
          <p>
            You can add the <code>is-up</code> modifier to have a dropdown menu
            that appears above the dropdown button.
          </p>
        </DropdownItem>
      </Dropdown>
    </Section>
  </>
)

export const DropdownExamplesTab: React.SFC = () => (
  <RoutedTabs to="/components/dropdown" size="medium">
    <RoutedTabsItem value="dropdown">Dropdown</RoutedTabsItem>
    <RoutedTabsItem value="content">Content</RoutedTabsItem>
    <RoutedTabsItem value="hoverable">Hoverable </RoutedTabsItem>
    <RoutedTabsItem value="right">Right aligned</RoutedTabsItem>
    <RoutedTabsItem value="left">Left aligned</RoutedTabsItem>
    <RoutedTabsItem value="dropup">DropUp</RoutedTabsItem>
  </RoutedTabs>
)

export const DropDownExample: React.SFC = () => <DropdownExamplesTab />

export const DropDownExampleRoutes: React.SFC = () => (
  <>
    <Route
      exact
      path="/components/dropdown"
      render={() => <Redirect to="/components/dropdown/dropdown" />}
    />
    <Route path="/components/dropdown" component={DropdownExamplesTab} />
    <Route
      path="/components/dropdown/dropdown"
      exact
      component={DropDownExampleTab}
    />
    <Route
      path="/components/dropdown/content"
      exact
      component={DropDownContentExampleTab}
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
