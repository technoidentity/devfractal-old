import React from 'react'
import { Content, Image, Section, SubTitle, Tile, Title } from '../devfractal'

export const SimpleTilesExample: React.FC = () => (
  <Section>
    <Title>Example</Title>
    <Tile tileType="ancestor">
      <Tile vertical size="8">
        <Tile>
          <Tile tileType="parent" vertical>
            <Tile tileType="child" notification variant="primary">
              <Title>Vertical...</Title>
              <SubTitle>Top tile</SubTitle>
            </Tile>
            <Tile tileType="child" notification variant="warning">
              <Title>...tiles</Title>
              <SubTitle>Bottom tile</SubTitle>
            </Tile>
          </Tile>
          <Tile tileType="parent">
            <Tile tileType="child" notification variant="info">
              <Title>Middle tile</Title>
              <SubTitle>With an image</SubTitle>
              <Image
                responsiveImageRatio="5by3"
                src="https://bulma.io/images/placeholders/640x480.png"
              />
            </Tile>
          </Tile>
        </Tile>
        <Tile tileType="parent">
          <Tile tileType="child" notification variant="danger">
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
        <Tile tileType="child" notification variant="success">
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
  </Section>
)

export const TileModifiersExample: React.FC = () => (
  <Section>
    <Title>Modifiers</Title>
    <Tile tileType="ancestor">
      <Tile size="4" vertical tileType="parent">
        <Tile tileType="child" box>
          <Title>One</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Tile>
        <Tile tileType="child" box>
          <Title>Two</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Tile>
      </Tile>
      <Tile tileType="parent">
        <Tile tileType="child" box>
          <Title>Three</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi
            maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis
            semper odio felis ut quam.
          </p>
          <p>
            Suspendisse varius ligula in molestie lacinia. Maecenas varius eget
            ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus,
            augue diam porttitor lorem, et sollicitudin felis neque sit amet
            erat. Maecenas imperdiet felis nisi, fringilla luctus felis
            hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim
            turpis. Sed eget varius ligula, at volutpat tortor.
          </p>
          <p>
            Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus
            erat, vitae congue lectus dolor consequat libero. Donec leo ligula,
            maximus et pellentesque sed, gravida a metus. Cras ullamcorper a
            nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero.
            Quisque non semper leo.
          </p>
        </Tile>
      </Tile>
    </Tile>
  </Section>
)

export const NestedTilesExample: React.FC = () => (
  <Section>
    <Title>Nesting requirements</Title>
    <Tile className="is-ancestor">
      <Tile vertical size="8">
        <Tile>
          <Tile tileType="parent" vertical>
            <Tile tileType="child" box>
              <Title>Vertical tiles</Title>
              <SubTitle>Top box</SubTitle>
            </Tile>
            <Tile tileType="child" box>
              <Title>Vertical tiles</Title>
              <SubTitle>Bottom box</SubTitle>
            </Tile>
          </Tile>
          <Tile tileType="parent">
            <Tile tileType="child" box>
              <Title>Middle box</Title>
              <SubTitle>With an image</SubTitle>
              <Image
                responsiveImageRatio="5by3"
                src="https://bulma.io/images/placeholders/640x480.png"
              />
            </Tile>
          </Tile>
        </Tile>
        <Tile tileType="parent">
          <Tile tileType="child" box>
            <Title>Wide Column</Title>
            <SubTitle>Aligned with the right Column</SubTitle>
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
        <Tile tileType="child" box>
          <Content>
            <Title>Tall Column</Title>
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
  </Section>
)

export const TileExample: React.FC = () => (
  <>
    <SimpleTilesExample />
    <TileModifiersExample />
    <NestedTilesExample />
  </>
)
