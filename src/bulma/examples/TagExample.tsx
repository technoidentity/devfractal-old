import * as React from 'react'
import { Tag } from '../Tag'
import { Section } from '../Section'

export const TagExample: React.SFC = () => (
  <Section>
    <Tag>all</Tag>
    <Tag>medium</Tag>
    <Tag>size</Tag>
    <Tag color="primary">all</Tag>
    <Tag color="info">medium</Tag>
    <Tag color="link">size</Tag>
  </Section>
)
