import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderTitle,
  CardImage,
} from '../components/Card'
import { Content, Image, Title } from '../elements'
import { SubTitle } from '../elements/Title'
import { Media, MediaContent, MediaLeft } from '../layout/Media'

export const CardExample: React.SFC = () => (
  <Card>
    <CardHeader>
      <CardHeaderTitle className="is-large" alignment="centered">
        Card
      </CardHeaderTitle>
    </CardHeader>
    <CardImage>
      <Image
        responsiveImageRatio="2by3"
        src="https://bulma.io/images/placeholders/1280x960.png"
      />
    </CardImage>
    <CardContent>
      <Media>
        <MediaLeft>
          <Image
            size="48x48"
            src="https://bulma.io/images/placeholders/96x96.png"
          />
        </MediaLeft>
        <MediaContent>
          <Title size="1">John Smith</Title>
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
