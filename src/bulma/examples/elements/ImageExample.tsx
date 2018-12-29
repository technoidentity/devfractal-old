import React from 'react'
import { Image, Title } from '../../elements'
import { Section } from '../../layout'

export const ImageExample: React.SFC = () => (
  <>
    <Section>
      <Title>Normal Image</Title>
      <Image
        size="128x128"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
    <Section>
      <Title>Fixed square images</Title>
      <Section>
        <Image
          size="16x16"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Section>
      <Section>
        <Image
          size="24x24"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Section>
      <Section>
        <Image
          size="32x32"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Section>
      <Section>
        <Image
          size="48x48"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Section>
      <Section>
        <Image
          size="64x64"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Section>
      <Section>
        <Image
          size="128x128"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Section>
    </Section>
    <Section>
      <Title>Rounded image</Title>
      <Image
        rounded
        size="96x96"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
  </>
)
