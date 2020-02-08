import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  CardImage,
  Content,
  Icon,
  Image,
  Media,
  MediaContent,
  MediaLeft,
  Section,
  SubTitle,
  Title,
} from 'technoidentity-ui'

export const SimpleCardExample: React.FC = () => (
  <Section>
    <Card>
      <CardHeader>
        <CardHeaderTitle alignment="centered">Card</CardHeaderTitle>
      </CardHeader>
      <CardImage>
        <Image
          responsiveImageRatio="4by3"
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
            <Title size="4">John Smith</Title>
            <SubTitle size="6">@johnsmith</SubTitle>
          </MediaContent>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href="#!">@bulmaio</a>. <a href="#!">#css</a>
          <a href="#!">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan</time>
        </Content>
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <a href="#!">save</a>
        </CardFooterItem>
        <CardFooterItem>
          <a href="#!">edit</a>
        </CardFooterItem>
        <CardFooterItem>
          <a href="#!">delete</a>
        </CardFooterItem>
      </CardFooter>
    </Card>
  </Section>
)

export const CardHeaderIconExample: React.FC = () => (
  <Section>
    <Card>
      <CardHeader>
        <CardHeaderTitle>Component</CardHeaderTitle>
        <CardHeaderIcon>
          <Icon icon={faAngleDown} />
        </CardHeaderIcon>
      </CardHeader>
      <CardContent>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href="#!">@bulmaio</a>. <a href="#!">#css</a>
          <a href="#!">#responsive</a>
          <br />
          <time dateTime="2016-1-1"> 11:09 PM - 1 Jan 2016</time>
        </Content>
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <a href="#!">Save</a>
        </CardFooterItem>
        <CardFooterItem>
          <a href="#!">Edit</a>
        </CardFooterItem>
        <CardFooterItem>
          <a href="#!">Delete</a>
        </CardFooterItem>
      </CardFooter>
    </Card>
  </Section>
)

export const CardContentExample: React.FC = () => (
  <Section>
    <Card>
      <CardContent>
        <Title>
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </Title>
        <SubTitle>Jeff Atwood</SubTitle>
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <span>
            View on <a href="#!"> Twitter</a>
          </span>
        </CardFooterItem>
        <CardFooterItem>
          <span>
            Share on <a href="#!">Facebook</a>
          </span>
        </CardFooterItem>
      </CardFooter>
    </Card>
  </Section>
)

export const CardExample: React.FC = () => (
  <>
    <SimpleCardExample />
    <CardHeaderIconExample />
    <CardContentExample />
  </>
)
