import * as React from 'react'
import { Level, LevelItem } from '../layout/Level'
import { SubTitle, Title } from '../elements/Title'
import { Field } from '../form/Field'
import { Input } from '../elements/Input'
import { Button } from '../form/Button'
import { Section } from '../layout/Section'

export const LevelExample: React.SFC = () => (
  <div>
    <Section>
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
            <Button color="success">New</Button>
          </LevelItem>
        </LevelItem>
      </Level>
    </Section>

    <Section>
      <Level>
        <LevelItem className="has-text-centered">
          <div>
            <p className="heading">Tweets</p>
            <Title>3,456</Title>
          </div>
        </LevelItem>
        <LevelItem className="has-text-centered">
          <div>
            <p className="heading">Following</p>
            <Title>123</Title>
          </div>
        </LevelItem>
        <LevelItem className="has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <Title>456K</Title>
          </div>
        </LevelItem>
        <LevelItem className="has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <Title>789</Title>
          </div>
        </LevelItem>
      </Level>
    </Section>
  </div>
)
