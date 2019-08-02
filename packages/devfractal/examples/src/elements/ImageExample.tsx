import {
  Image as ImageComponent,
  Section,
  Title,
} from 'devfractal-ui-core'
import React from 'react'

const BasicImageExample: React.FC = () => (
  <Section>
    <Title>Normal Image</Title>
    <ImageComponent
      size="128x128"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </Section>
)

const FixedSquareImageExample: React.FC = () => (
  <Section>
    <Title>Fixed square images</Title>
    <Section>
      <ImageComponent
        size="16x16"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
    <Section>
      <ImageComponent
        size="24x24"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
    <Section>
      <ImageComponent
        size="32x32"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
    <Section>
      <ImageComponent
        size="48x48"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
    <Section>
      <ImageComponent
        size="64x64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
    <Section>
      <ImageComponent
        size="128x128"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </Section>
  </Section>
)

const RoundedImageExample: React.FC = () => (
  <Section>
    <Title>Rounded image</Title>
    <ImageComponent
      rounded
      size="96x96"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </Section>
)

const RetinaImageExample: React.FC = () => (
  <Section>
    <Title>Retina image</Title>
    <ImageComponent
      size="128x128"
      src="https://bulma.io/images/placeholders/256x256.png"
    />
  </Section>
)

const ResponsiveImagesWithRatiosExample: React.FC = () => (
  <Section>
    <Title>Responsive images with ratios</Title>
    <Section>
      <ImageComponent
        responsiveImageRatio="1by1"
        src="https://bulma.io/images/placeholders/480x480.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="1by2"
        src="https://bulma.io/images/placeholders/320x640.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="1by3"
        src="https://bulma.io/images/placeholders/240x720.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="2by1"
        src="https://bulma.io/images/placeholders/640x320.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="3by1"
        src="https://bulma.io/images/placeholders/720x240.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="3by2"
        src="https://bulma.io/images/placeholders/480x320.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="2by3"
        src="https://bulma.io/images/placeholders/320x480.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="3by4"
        src="https://bulma.io/images/placeholders/480x640.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="3by5"
        src="https://bulma.io/images/placeholders/480x800.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="4by3"
        src="https://bulma.io/images/placeholders/640x480.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="4by5"
        src="https://bulma.io/images/placeholders/480x600.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="square"
        src="https://bulma.io/images/placeholders/480x480.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="5by3"
        src="https://bulma.io/images/placeholders/800x480.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="5by4"
        src="https://bulma.io/images/placeholders/600x480.png"
      />
    </Section>
    <Section>
      <ImageComponent
        responsiveImageRatio="9by16"
        src="https://bulma.io/images/placeholders/360x640.png"
      />
    </Section>
  </Section>
)

export const Image: React.FC = () => (
  <>
    <BasicImageExample />
    <FixedSquareImageExample />
    <RoundedImageExample />
    <RetinaImageExample />
    <ResponsiveImagesWithRatiosExample />
  </>
)
