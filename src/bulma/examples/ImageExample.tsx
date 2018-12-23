import * as React from 'react'
import { Image } from '../elements/Image'

export const ImageExample: React.SFC = () => (
  <>
    <Image
      size="128x128"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
    <Image
      rounded
      size="128x128"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </>
)
