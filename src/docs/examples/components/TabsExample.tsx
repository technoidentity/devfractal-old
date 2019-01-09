import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faFileAlt,
  faFilm,
  faImage,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { State } from '../../../utils'
import { Box, Icon, Section, Tabs, TabsItem, Title } from '../devfractal'

export const TabsExamples: React.SFC = () => (
  <>
    <Section>
      <Tabs name="basicTab" selectedTab="pictures">
        <TabsItem value="pictures">Pictures</TabsItem>
        <TabsItem value="music">Music</TabsItem>
        <TabsItem value="videos">Videos</TabsItem>
        <TabsItem value="documents">Documents</TabsItem>
      </Tabs>
    </Section>
  </>
)

export const AlignmentTab: React.SFC = () => (
  <>
    <Title size="6">Centered</Title>
    <Tabs name="basicTab" selectedTab="pictures" alignment="centered">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
    <Title size="6">Right</Title>
    <Tabs name="basicTab" selectedTab="pictures" alignment="right">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
  </>
)

export const IconsTab: React.SFC = () => (
  <>
    <Tabs name="basicTab" selectedTab="pictures" alignment="centered">
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
  </>
)

export const SizesTab: React.SFC = () => (
  <>
    <Tabs name="basicTab" selectedTab="pictures" size="small">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
    <Tabs name="basicTab" selectedTab="pictures" size="medium">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
    <Tabs name="basicTab" selectedTab="pictures" size="large">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
  </>
)

export const StyleTabs: React.SFC = () => (
  <>
    <Title size="6">Boxed</Title>
    <Tabs name="basicTab" selectedTab="pictures" tabsStyle="boxed">
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Title size="6">Toggle</Title>
    <Tabs name="basicTab" selectedTab="pictures" tabsStyle="toggle">
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Title size="6">Toggle-Rounded</Title>
    <Tabs name="basicTab" selectedTab="pictures" tabsStyle="toggle-rounded">
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Title size="6">Fullwidth</Title>
    <Tabs name="basicTab" fullWidth>
      <TabsItem value="left">
        <Icon icon={faAngleLeft} />
        <span>Left</span>
      </TabsItem>
      <TabsItem value="up">
        <Icon icon={faAngleUp} />
        <span>Up</span>
      </TabsItem>
      <TabsItem value="right">
        <Icon icon={faAngleRight} />
        <span>Right</span>
      </TabsItem>
    </Tabs>
  </>
)

export const CombiningTabs: React.SFC = () => (
  <>
    <Tabs
      name="basicTab"
      selectedTab="pictures"
      tabsStyle="boxed"
      alignment="centered"
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Tabs name="basicTab" selectedTab="pictures" tabsStyle="toggle" fullWidth>
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Tabs
      name="basicTab"
      selectedTab="pictures"
      tabsStyle="boxed"
      alignment="centered"
      size="medium"
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Tabs
      name="basicTab"
      selectedTab="pictures"
      tabsStyle="toggle"
      fullWidth
      size="large"
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
  </>
)

export const TabsExample: React.SFC = () => (
  <div>
    <Section>
      <Title textAlignment="centered">Dynamic Tabs</Title>
      <Box>
        <Title size="4">Uncontrolled Tab</Title>
        <Tabs name="secondTab" defaultValue="documents" size="medium">
          <TabsItem value="pictures">Pictures</TabsItem>
          <TabsItem value="music">Music</TabsItem>
          <TabsItem value="videos">Videos</TabsItem>
          <TabsItem value="documents">Documents</TabsItem>
        </Tabs>
      </Box>

      <Box>
        <Title size="4">
          'selectedTab' is provided, but not 'onTabChange' Tabs will be readonly
        </Title>
        <Tabs selectedTab="music" name="secondTab" size="medium" readOnly>
          <TabsItem value="pictures">Pictures</TabsItem>
          <TabsItem value="music">Music</TabsItem>
          <TabsItem value="videos">Videos</TabsItem>
          <TabsItem value="documents">Documents</TabsItem>
        </Tabs>
      </Box>

      <State
        initial={'music'}
        render={({ value, set }) => (
          <>
            <Box>
              <Title size="4">Controlled Tab({value})</Title>
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
            </Box>
          </>
        )}
      />
      <Section>
        <Title textAlignment="centered">Static Tabs</Title>
        <Box>
          <Title size="4">Basic Tab</Title>
          <TabsExamples />
        </Box>
        <Box>
          <Title size="4">Alignment</Title>
          <AlignmentTab />
        </Box>
        <Box>
          <Title size="4">Icons</Title>
          <IconsTab />
        </Box>
        <Box>
          <Title size="4">Sizes</Title>
          <SizesTab />
        </Box>
        <Box>
          <Title size="4">Styles</Title>
          <StyleTabs />
        </Box>
        <Box>
          <Title size="4">Combining</Title>
          <CombiningTabs />
        </Box>
      </Section>
    </Section>
  </div>
)
