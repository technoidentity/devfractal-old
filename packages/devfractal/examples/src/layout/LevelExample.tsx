import {
  Button,
  Field,
  Input,
  Level as LevelComponent,
  LevelItem,
  Section,
  SubTitle,
  Text,
  Title,
} from 'stp-ui'
import React from 'react'

const LevelLeftExample: React.FC = () => (
  <Section>
    <Title>Level left</Title>
    <LevelComponent>
      <LevelItem direction="left">
        <LevelItem>
          <SubTitle size="5">123 posts</SubTitle>
        </LevelItem>
        <LevelItem>
          <Field addons>
            <Input type="text" placeholder="Find a Post" />
            <Button>Search</Button>
          </Field>
        </LevelItem>
      </LevelItem>
    </LevelComponent>
  </Section>
)

const LevelRightExample: React.FC = () => (
  <Section>
    <Title>Level Right</Title>
    <LevelComponent>
      <LevelItem direction="right">
        <LevelItem>
          <strong>All</strong>
        </LevelItem>
        <LevelItem>
          <a href="#!">Published</a>
        </LevelItem>
        <LevelItem>
          <a href="#!">Drafts</a>
        </LevelItem>
        <LevelItem>
          <a href="#!">Deleted</a>
        </LevelItem>
        <LevelItem>
          <Button variant="success">New</Button>
        </LevelItem>
      </LevelItem>
    </LevelComponent>
  </Section>
)

const CenteredLevelExample: React.FC = () => (
  <Section>
    <Title>Centered level</Title>
    <LevelComponent>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Tweets</Text>
          <Title>3,456</Title>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Following</Text>
          <Title>123</Title>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Followers</Text>
          <Title>456K</Title>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Likes</Text>
          <Title>789</Title>
        </Section>
      </LevelItem>
    </LevelComponent>
    <LevelComponent>
      <LevelItem>
        <Section>
          <Text textAlignment="centered" textColor="info">
            <a href="#!">Home</a>
          </Text>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered" textColor="info">
            <a href="#!">Menu</a>
          </Text>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">
            {/* @TODO: change this to Image and drop style*/}
            <img
              src="https://bulma.io/images/bulma-type.png"
              alt="bulma logo"
              style={{ height: '30px' }}
            />
          </Text>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered" textColor="info">
            <a href="#!">Reservations</a>
          </Text>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered" textColor="info">
            <a href="#!">Contact</a>
          </Text>
        </Section>
      </LevelItem>
    </LevelComponent>
  </Section>
)

const MobileLevelExample: React.FC = () => (
  <Section>
    <Title>Mobile level</Title>
    <LevelComponent className="is-mobile">
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Tweets</Text>
          <Title>3,456</Title>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Following</Text>
          <Title>123</Title>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Followers</Text>
          <Title>456K</Title>
        </Section>
      </LevelItem>
      <LevelItem>
        <Section>
          <Text textAlignment="centered">Likes</Text>
          <Title>789</Title>
        </Section>
      </LevelItem>
    </LevelComponent>
  </Section>
)

export const Level: React.FC = () => (
  <>
    <LevelRightExample />
    <LevelLeftExample />
    <CenteredLevelExample />
    <MobileLevelExample />
  </>
)
