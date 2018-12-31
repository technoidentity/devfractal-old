import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Column, Columns } from '../../columns'
import {
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  CardImage,
} from '../../components/Card'
import { Content, Icon, Image, SubTitle, Title } from '../../elements'
import { Media, MediaContent, MediaLeft, Section } from '../../layout'
import { Text } from '../../modifiers'

export const CardExample: React.SFC = () => (
  <Columns columnCentered>
    <Column size="one-third">
      <Section>
        <CardFooter>
          <Card>
            <CardHeader>
              <CardHeaderTitle className="is-large" alignment="centered">
                Card
              </CardHeaderTitle>
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
                  <Title size="1">John Smith</Title>
                  <SubTitle size="6">@johnsmith</SubTitle>
                </MediaContent>
              </Media>
              <Content>
                Bulma is an open source CSS framework based on Flexbox and used
                by more than 100,000 developers.
              </Content>
            </CardContent>
            <CardFooter>
              <CardFooterItem href="#">save</CardFooterItem>
              <CardFooterItem href="#">edit</CardFooterItem>
              <CardFooterItem href="#">delete</CardFooterItem>
            </CardFooter>
          </Card>
        </CardFooter>
      </Section>

      <Section>
        <Card>
          <CardHeader>
            <CardHeaderTitle>Component</CardHeaderTitle>
            <CardHeaderIcon>
              <Icon icon={faAngleDown} />
            </CardHeaderIcon>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
            <a href="#">#responsive</a>
            <span> 11:09 PM - 1 Jan 2016</span>
          </CardContent>
          <CardFooter>
            <CardFooterItem>Save</CardFooterItem>
            <CardFooterItem>Edit</CardFooterItem>
            <CardFooterItem>Delete</CardFooterItem>
          </CardFooter>
        </Card>
      </Section>
      <Section>
        <Card>
          <CardContent>
            <Title>
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </Title>
            <SubTitle>Jeff Atwood</SubTitle>
          </CardContent>
          <CardFooter>
            <CardFooterItem href="https://twitter.com/codinghorror/status/506010907021828096">
              <Text>View on</Text> Twitter
            </CardFooterItem>
            <CardFooterItem href="#">Facebook</CardFooterItem>
          </CardFooter>
        </Card>
      </Section>
    </Column>
  </Columns>
)
