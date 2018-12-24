import React from 'react'

import { Content } from '../elements/Content'
import { Image } from '../elements/Image'
import { Button } from '../form/Button'
import { Field } from '../form/Field'
import { TextArea } from '../form/TextArea'
import { Media, MediaContent, MediaLeft } from '../layout/Media'

export const MediaObjectExample: React.SFC = () => (
  <Media>
    <MediaLeft>
      <Image
        size="64x64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </MediaLeft>
    <MediaContent>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros
        lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris
        sit amet dolor blandit rutrum. Nunc in tempus turpis.
      </Content>

      <Media>
        <MediaLeft>
          <Image
            size="32x32"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </MediaLeft>
        <MediaContent>
          <Content size="medium">
            <div>Barbara Middleton</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
            eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
            mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          </Content>

          <Media>
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
            lorem cursus ullamcorper sit amet nec massa.
          </Media>

          <Media>
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
            Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
            tincidunt iaculis diam non, porta aliquet tortor.
          </Media>
          <Media>
            <MediaLeft>
              <Image
                size="64x64"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </MediaLeft>
            <MediaContent>
              <Content>
                <div>Barbara Middleton</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta eros lacus, nec ultricies elit blandit non. Suspendisse
                pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                tempus turpis.
              </Content>
            </MediaContent>
          </Media>
          <Media>
            <MediaLeft>
              <Image
                size="48x48"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </MediaLeft>
            <MediaContent>
              <Field>
                <TextArea variant="primary" />
              </Field>
              <Field>
                <Button variant="primary">Post comment</Button>
              </Field>
            </MediaContent>
          </Media>
        </MediaContent>
      </Media>
    </MediaContent>
  </Media>
)
