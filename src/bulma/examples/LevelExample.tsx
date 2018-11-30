import * as React from 'react'
import { Level, LevelItem } from '../Level'
import { SubTitle } from '../Title'
import { Field } from '../Field'
import { Input } from '../Input'
import { Button } from '../Button'

export const LevelExample: React.SFC = () => (
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
)
