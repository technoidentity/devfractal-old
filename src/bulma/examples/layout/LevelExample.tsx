import React from 'react'
import { SubTitle, Title } from '../../elements/Title'
import { Button, Field, Input } from '../../form'
import { Level, LevelItem } from '../../layout/Level'
import { Section } from '../../layout/Section'
import { Text } from '../../modifiers/Text'

export const LevelExample: React.SFC = () => (
  <>
    <Section>
      <Title>Level left</Title>
      <Level>
        <LevelItem levelItemType="left">
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
      </Level>
    </Section>
    <Section>
      <Title>Level Right</Title>
      <Level>
        <LevelItem levelItemType="right">
          <LevelItem>
            <strong>All</strong>
          </LevelItem>
          <LevelItem>
            <a>Published</a>
          </LevelItem>
          <LevelItem>
            <a>Drafts</a>
          </LevelItem>
          <LevelItem>
            <a>Deleted</a>
          </LevelItem>
          <LevelItem>
            <Button variant="success">New</Button>
          </LevelItem>
        </LevelItem>
      </Level>
    </Section>
    <Section>
      <Title>Centered level</Title>
      <Level>
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
      </Level>
      <Level>
        <LevelItem>
          <Section>
            <Text textAlignment="centered" textColor="info">
              <a>Home</a>
            </Text>
          </Section>
        </LevelItem>
        <LevelItem>
          <Section>
            <Text textAlignment="centered" textColor="info">
              <a>Menu</a>
            </Text>
          </Section>
        </LevelItem>
        <LevelItem>
          <Section>
            <Text textAlignment="centered">
              {/* @TODO: change this to Image */}
              <img src="https://bulma.io/images/bulma-type.png" />
            </Text>
          </Section>
        </LevelItem>
        <LevelItem>
          <Section>
            <Text textAlignment="centered" textColor="info">
              <a>Reservations</a>
            </Text>
          </Section>
        </LevelItem>
        <LevelItem>
          <Section>
            <Text textAlignment="centered" textColor="info">
              <a>Contact</a>
            </Text>
          </Section>
        </LevelItem>
      </Level>
    </Section>
    <Section>
      <Title>Mobile level</Title>
      <Level className="is-mobile">
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
      </Level>
    </Section>
  </>
)
