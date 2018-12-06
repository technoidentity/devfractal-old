import * as React from 'react'
import { Image } from '../Image'

export const ImageExample: React.SFC = () => (
  <Image size="128x128">
    <img
      className="is-rounded"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </Image>
)
