import * as React from 'react'
import { Level, LevelItem } from '../Level'

export const LevelExample: React.SFC = () => (
  <Level>
    <LevelItem levelItemType="left">
      <LevelItem>
        <p className="subtitle is-5">
          <strong>123</strong> posts
        </p>
      </LevelItem>
      <LevelItem>
        <div className="field has-addons">
          <p className="control">
            <input className="input" type="text" placeholder="Find a post" />
          </p>
          <p className="control">
            <button className="button">Search</button>
          </p>
        </div>
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
        <a className="button is-success">New</a>
      </LevelItem>
    </LevelItem>
  </Level>
)
