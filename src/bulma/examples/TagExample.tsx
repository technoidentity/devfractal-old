import * as React from 'react'
import { Tag } from '../elements/Tag'
import { logger } from './common'
import { Tags } from '../elements/Tags'

export const TagExample: React.SFC = () => (
  <Tags>
    <Tag>all</Tag>
    <Tag>medium</Tag>
    <Tag>size</Tag>
    <Tag color="primary" onClick={() => logger('hello from tag')}>
      all
    </Tag>
    <div>Hello</div>
    <Tag color="info">medium</Tag>
    <Tag color="link">size</Tag>
  </Tags>
)
