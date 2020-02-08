import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  CheckBox,
  Content,
  Delete,
  Field,
  Icon,
  Image,
  Level,
  LevelItem,
  Media as MediaComponent,
  MediaContent,
  MediaLeft,
  MediaRight,
  Section,
  TextArea,
  Title,
} from 'stp-ui'
import React from 'react'

const SimpleMediaObjectExample: React.FC = () => (
  <Section>
    <Title>Simple Media Object</Title>
    <MediaComponent>
      <MediaLeft>
        <Image
          size="64x64"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </MediaLeft>
      <MediaContent>
        <Field>
          <TextArea placeholder="Add a comment..." />
        </Field>
        <Level>
          <LevelItem direction="left">
            <Button variant="info">Submit</Button>
          </LevelItem>
          <LevelItem direction="right">
            <CheckBox>Press enter to submit</CheckBox>
          </LevelItem>
        </Level>
      </MediaContent>
    </MediaComponent>
  </Section>
)

const NestedMediaObjectExample: React.FC = () => (
  <Section>
    <Title>Nesting</Title>
    <MediaComponent>
      <MediaLeft>
        <Image
          size="64x64"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </MediaLeft>
      <MediaContent>
        <Content>
          <strong>Barbara Middleton</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
          eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
          mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
          <small>
            <a href="#!">Like</a> · <a href="#!">Reply</a> · 3 hrs
          </small>
        </Content>
        <MediaComponent>
          <MediaLeft>
            <Image
              size="32x32"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </MediaLeft>
          <MediaContent>
            <Content size="medium">
              <strong>Sean Brown</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a href="#!">Like</a> · <a href="#!">Reply</a> · 2 hrs
              </small>
            </Content>
            <MediaComponent>
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
              lorem cursus ullamcorper sit amet nec massa.
            </MediaComponent>
            <MediaComponent>
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
              Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
              tincidunt iaculis diam non, porta aliquet tortor.
            </MediaComponent>
            <MediaComponent>
              <MediaLeft>
                <Image
                  size="64x64"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <strong>Kayli Eunice</strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a href="#!">Like</a> · <a href="#!">Reply</a> · 2 hrs
                  </small>
                </Content>
              </MediaContent>
            </MediaComponent>
            <MediaComponent>
              <MediaLeft>
                <Image
                  size="48x48"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </MediaLeft>
              <MediaContent>
                <Field>
                  <TextArea />
                </Field>
                <Field>
                  <Button>Post comment</Button>
                </Field>
              </MediaContent>
            </MediaComponent>
          </MediaContent>
        </MediaComponent>
      </MediaContent>
    </MediaComponent>
  </Section>
)

const ComplexMediaObjectExample: React.FC = () => (
  <Section>
    <Title>Media Object</Title>
    <MediaComponent>
      <MediaLeft>
        <Image
          size="64x64"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>{' '}
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
        <Level className="is-mobile">
          <LevelItem direction="left">
            <Icon icon={faReply} />
            <Icon icon={faRetweet} />
            <Icon icon={faHeart} />
          </LevelItem>
        </Level>
      </MediaContent>
      <MediaRight>
        <Delete />
      </MediaRight>
    </MediaComponent>
  </Section>
)

export const MediaObject: React.FC = () => (
  <>
    <SimpleMediaObjectExample />
    <ComplexMediaObjectExample />
    <NestedMediaObjectExample />
  </>
)
