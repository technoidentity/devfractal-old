import React from 'react'
import { Image, Section, Title } from '../devfractal'

export const BasicImageExample: React.SFC = () => (
  <Section>
    <Title>Normal Image</Title>
    <Image
      size="128x128"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </Section>
)

export const FixedSquareImageExample: React.SFC = () => (
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
)

export const RoundedImageExample: React.SFC = () => (
  <Section>
    <Title>Rounded image</Title>
    <Image
      rounded
      size="96x96"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </Section>
)

export const RetinaImageExample: React.SFC = () => (
  <Section>
    <Title>Retina image</Title>
    <Image
      size="128x128"
      src="https://bulma.io/images/placeholders/256x256.png"
    />
  </Section>
)

export const ResponsiveImagesWithRatiosExample: React.SFC = () => (
  <Section>
    <Title>Responsive images with ratios</Title>
    <Section>
      <Image
        responsiveImageRatio="1by1"
        src="https://bulma.io/images/placeholders/480x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="1by2"
        src="https://bulma.io/images/placeholders/320x640.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="1by1"
        src="https://bulma.io/images/placeholders/480x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="1by3"
        src="https://bulma.io/images/placeholders/240x720.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="2by1"
        src="https://bulma.io/images/placeholders/640x320.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="3by1"
        src="https://bulma.io/images/placeholders/720x240.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="3by2"
        src="https://bulma.io/images/placeholders/480x320.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="2by3"
        src="https://bulma.io/images/placeholders/320x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="3by4"
        src="https://bulma.io/images/placeholders/480x640.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="3by5"
        src="https://bulma.io/images/placeholders/480x800.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="4by3"
        src="https://bulma.io/images/placeholders/640x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="4by5"
        src="https://bulma.io/images/placeholders/480x600.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="square"
        src="https://bulma.io/images/placeholders/480x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="5by3"
        src="https://bulma.io/images/placeholders/800x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="5by4"
        src="https://bulma.io/images/placeholders/600x480.png"
      />
    </Section>
    <Section>
      <Image
        responsiveImageRatio="9by16"
        src="https://bulma.io/images/placeholders/360x640.png"
      />
    </Section>
  </Section>
)

export const ImageExample: React.SFC = () => (
  <>
    <BasicImageExample />
    <FixedSquareImageExample />
    <RoundedImageExample />
    <RetinaImageExample />
    <ResponsiveImagesWithRatiosExample />
  </>
)
