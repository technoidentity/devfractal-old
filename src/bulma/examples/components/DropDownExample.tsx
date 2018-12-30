import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Redirect, Route } from 'react-router'
import {
  DropDown,
  DropDownContent,
  DropDownDivider,
  DropDownItem,
  DropDownMenu,
  DropDownTrigger,
  RoutedTabs,
  RoutedTabsItem,
} from '../../components'
import { Icon, Title } from '../../elements'
import { Button, Field } from '../../form'
import { Level, LevelItem, Section } from '../../layout'

const DropDownExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Dropdown</Title>
      <DropDown modifier="active">
        <DropDownTrigger>
          <Button>
            <span>Dropdown button</span> <Icon icon={faAngleDown} />
          </Button>
        </DropDownTrigger>
        <DropDownMenu id="dropdown-menu" role="menu">
          <DropDownContent>
            <DropDownItem href="#">Dropdown item</DropDownItem>
            <DropDownItem active>Dropdown item</DropDownItem>
            <DropDownItem>Dropdown item</DropDownItem>
            <DropDownItem>Dropdown item</DropDownItem>
            <DropDownDivider />
            <DropDownItem>With a divider</DropDownItem>
          </DropDownContent>
        </DropDownMenu>
      </DropDown>
    </Section>
  </>
)

const DropDownContentExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">DropDown Content</Title>
      <DropDown modifier="hoverable">
        <DropDownTrigger>
          <Button>
            <span>Content</span>
            <Icon icon={faAngleDown} />
          </Button>
        </DropDownTrigger>
        <DropDownMenu id="dropdown-menu2" role="menu">
          <DropDownContent>
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
          </DropDownContent>
        </DropDownMenu>
      </DropDown>
    </Section>
  </>
)
const HoverableDropdownExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Hoverable </Title>

      <DropDown modifier="hoverable">
        <DropDownTrigger>
          <Button>
            {' '}
            <span>Hover me</span>
            <Icon icon={faAngleDown} />
          </Button>
        </DropDownTrigger>
        <DropDownMenu id="dropdown-menu4" role="menu">
          <DropDownContent>
            <DropDownItem>
              You can insert any type of contentwithin the dropdown menu.
            </DropDownItem>
          </DropDownContent>
        </DropDownMenu>
      </DropDown>
    </Section>
  </>
)

const ToggableDropdownExampleTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Toggable</Title>
      <DropDown modifier="active">
        <DropDownTrigger>
          <Button noControl>
            <span>Click me</span>
            <Icon icon={faAngleDown} />
          </Button>
        </DropDownTrigger>
        <DropDownMenu id="dropdown-menu3" role="menu">
          <DropDownContent>
            <DropDownItem>Overview</DropDownItem>
            <DropDownItem>Modifiers</DropDownItem>
            <DropDownItem>Grid</DropDownItem>
            <DropDownItem>Form</DropDownItem>
            <DropDownItem>Elements</DropDownItem>
            <DropDownItem>Components</DropDownItem>
            <DropDownItem>Layout</DropDownItem>
            <DropDownDivider />
            <DropDownItem>More</DropDownItem>
          </DropDownContent>
        </DropDownMenu>
      </DropDown>
    </Section>
  </>
)
const RightAlignableDropdownExampleTab: React.SFC = () => (
  <div>
    <Section>
      <Level>
        <Title size="4">Right aligned</Title>
        <LevelItem levelItemType="right">
          <DropDown modifier="active" alignment="right">
            <DropDownTrigger>
              <Button>
                <span>Right aligned</span>
                <Icon icon={faAngleDown} />
              </Button>
            </DropDownTrigger>
            <DropDownMenu id="dropdown-menu6" role="menu">
              <DropDownContent>
                <DropDownItem>
                  <p>
                    Add the <code>is-right</code> modifier for a{' '}
                    <strong>right-aligned</strong> dropdown.
                  </p>
                </DropDownItem>
              </DropDownContent>
            </DropDownMenu>
          </DropDown>
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
            <DropDown modifier="active">
              <DropDownTrigger>
                <Button>
                  <span>Left aligned</span>
                  <Icon icon={faAngleDown} />
                </Button>
              </DropDownTrigger>
              <DropDownMenu id="dropdown-menu6" role="menu">
                <DropDownContent>
                  <DropDownItem>
                    <p>
                      Add the <code>is-left</code> modifier for a{' '}
                      <strong>left-aligned</strong> dropdown.
                    </p>
                  </DropDownItem>
                </DropDownContent>
              </DropDownMenu>
            </DropDown>
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
      <DropDown dropUp modifier="hoverable">
        <DropDownTrigger>
          <Button>
            <span>Dropup button</span>
            <Icon icon={faAngleUp} />
          </Button>
        </DropDownTrigger>
        <DropDownMenu id="dropdown-menu7" role="menu">
          <DropDownContent>
            <DropDownItem>
              <p>
                You can add the <code>is-up</code> modifier to have a dropdown
                menu that appears above the dropdown button.
              </p>
            </DropDownItem>
          </DropDownContent>
        </DropDownMenu>
      </DropDown>
    </Section>
  </>
)

export const DropdownExamplesTab: React.SFC = () => (
  <RoutedTabs to="/components/dropdown" size="medium">
    <RoutedTabsItem value="dropdown">Dropdown</RoutedTabsItem>
    <RoutedTabsItem value="content">Content</RoutedTabsItem>
    <RoutedTabsItem value="hoverable">Hoverable </RoutedTabsItem>
    <RoutedTabsItem value="toggable">Toggable </RoutedTabsItem>
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
      path="/components/dropdown/toggable"
      exact
      component={ToggableDropdownExampleTab}
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
