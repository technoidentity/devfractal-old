import * as React from 'react'
import { Text } from '../modifiers/Text'
export const TextExample: React.SFC = () => (
  <div>
    <Text
      className="has-text-success is-size-1"
      transformation="uppercase"
      weight="light"
    >
      helloWorld
    </Text>
  </div>
)
