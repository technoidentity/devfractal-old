import * as React from 'react'
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  CardContent,
  CardFooter,
  CardFooterItem,
} from '../components/Card'
import { Image } from '../elements/Image'
import { Title, SubTitle } from '../elements/Title'
import { Content } from '../elements/Content'
import { MediaContent, MediaLeft, Media } from '../layout/Media'

export const CardExample: React.SFC = () => (
  <Card>
    <CardHeader>
      <CardHeaderTitle className="is-large" alignment="centered">
        Card
      </CardHeaderTitle>
    </CardHeader>
    <CardImage>
      <Image responsiveImageRatio="2by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </Image>
    </CardImage>
    <CardContent>
      <Media>
        <MediaLeft>
          <Image size="48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </Image>
        </MediaLeft>
        <MediaContent>
          <Title className="is-size-1">John Smith</Title>
          <SubTitle size="6">@johnsmith</SubTitle>
        </MediaContent>
      </Media>
      <Content>
        Bulma is an open source CSS framework based on Flexbox and used by more
        than 100,000 developers.
      </Content>
    </CardContent>
    <CardFooter>
      <CardFooterItem href="#">save</CardFooterItem>
      <CardFooterItem href="#">edit</CardFooterItem>
      <CardFooterItem href="#">delete</CardFooterItem>
    </CardFooter>
  </Card>
)
