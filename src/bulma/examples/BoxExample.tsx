import * as React from 'react'

import { Box } from '../elements/Box'
import { Media, MediaLeft, MediaContent } from '../layout/Media'
import { Content } from '../elements/Content'

export const BoxExample: React.SFC = () => (
  <Box shadowLess>
    <Media>
      <MediaLeft>
        <figure className="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Image"
          />
        </figure>
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
)
