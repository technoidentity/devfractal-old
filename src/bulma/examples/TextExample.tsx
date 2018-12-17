import * as React from 'react'
import { Text } from '../modifiers/Text'
export const TextExample: React.SFC = () => (
  <div>
    <Text
      className="has-text-success is-size-1"
      textTransformation="uppercase"
      textWeight="light"
    >
      helloWorld
    </Text>
  </div>
)
