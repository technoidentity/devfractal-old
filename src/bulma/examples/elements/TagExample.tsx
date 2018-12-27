import React from 'react'
import { Tag } from '../../elements/Tag'
import { Tags } from '../../elements/Tags'
import { logger } from '../common'

export const TagExample: React.SFC = () => (
  <Tags>
    <Tag>all</Tag>
    <Tag>medium</Tag>
    <Tag>size</Tag>
    <Tag
      variant="primary"
      onClick={() => {
        logger('TagExample onClick')
      }}
    >
      all
    </Tag>
    <Tag variant="info">medium</Tag>
    <Tag variant="link">size</Tag>
  </Tags>
)
