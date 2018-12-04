import * as React from 'react'

import { Tile } from '../Tile'
import { Title, SubTitle } from '../Title'
import { Content } from '../Content'
import { Image } from '../Image'
import { Container } from '../Container'

export const TileExample: React.SFC = () => (
  <Container>
    <Tile className="is-ancestor">
      <Tile vertical size="8">
        <Tile>
          <Tile tileType="parent" vertical>
            <Tile tileType="child" notification className="is-primary">
              <Title>Vertical...</Title>
              <SubTitle>Top tile</SubTitle>
            </Tile>
            <Tile tileType="child" notification color="warning">
              <Title>...tiles</Title>
              <SubTitle>Bottom tile</SubTitle>
            </Tile>
          </Tile>

          <Tile tileType="parent">
            <Tile tileType="child" notification color="info">
              <Title>Middle tile</Title>
              <SubTitle>With an image</SubTitle>
              <Image responsiveImageRatio="5by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </Image>
            </Tile>
          </Tile>
        </Tile>

        <Tile tileType="parent">
          <Tile tileType="child" notification color="danger">
            <Title>Wide tile</Title>
            <SubTitle>Aligned with the right tile</SubTitle>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile tileType="parent">
        <Tile tileType="child" notification color="success">
          <Content>
            <Title>Tall tile</Title>
            <SubTitle>With even more content</SubTitle>
            <Content>
              <p>
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Etiam semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </Content>
          </Content>
        </Tile>
      </Tile>
    </Tile>
  </Container>
)
