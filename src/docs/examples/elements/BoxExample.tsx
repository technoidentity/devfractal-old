import React from 'react'
import {
  Box,
  Content,
  Image,
  Media,
  MediaContent,
  MediaLeft,
  Section,
} from '../devfractal'

export const BoxExample: React.SFC = () => (
  <Section>
    <Box>
      <Media>
        <MediaLeft>
          <Image
            size="64x64"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur sit amet massa fringilla egestas. Nullam condimentum
              luctus turpis.
            </p>
          </Content>
        </MediaContent>
      </Media>
    </Box>
  </Section>
)
