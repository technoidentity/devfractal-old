import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Content, Delete, Icon, Image, Title } from '../../elements'
import { Button, CheckBox, Field, TextArea } from '../../form'
import {
  Level,
  LevelItem,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Section,
} from '../../layout'

export const MediaObjectExample: React.SFC = () => (
  <>
    <Section>
      <Title>Simple Media Object</Title>
      <Media>
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
            <LevelItem levelItemType="left">
              <Button variant="info">Submit</Button>
            </LevelItem>
            <LevelItem levelItemType="right">
              <CheckBox>Press enter to submit</CheckBox>
            </LevelItem>
          </Level>
        </MediaContent>
      </Media>
    </Section>
    <Section>
      <Title>Media Object</Title>
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
              <strong>John Smith</strong> <small>@johnsmith</small>{' '}
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </Content>
          <Level className="is-mobile">
            <LevelItem levelItemType="left">
              <Icon icon={faReply} />
              <Icon icon={faRetweet} />
              <Icon icon={faHeart} />
            </LevelItem>
          </Level>
        </MediaContent>
        <MediaRight>
          <Delete />
        </MediaRight>
      </Media>
    </Section>
    <Section>
      <Title>Nesting</Title>
      <Media>
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
              <a>Like</a> · <a>Reply</a> · 3 hrs
            </small>
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
                <strong>Sean Brown</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta eros lacus, nec ultricies elit blandit non. Suspendisse
                pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                tempus turpis.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 2 hrs
                </small>
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
                    <strong>Kayli Eunice</strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis
                    vel. Maecenas varius felis sit amet magna vestibulum euismod
                    malesuada cursus libero. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
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
                    <TextArea />
                  </Field>
                  <Field>
                    <Button>Post comment</Button>
                  </Field>
                </MediaContent>
              </Media>
            </MediaContent>
          </Media>
        </MediaContent>
      </Media>
    </Section>
  </>
)
