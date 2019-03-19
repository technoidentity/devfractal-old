import React from 'react'
import { Box, Content, Ol, Section, Text, Title } from '../devfractal'

export const BasicContentExample: React.FC = () => (
  <Section>
    <Title>Example</Title>
    <Content>
      <Box>
        <Ol modifier="lower-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </Ol>
        <Ol modifier="lower-roman">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </Ol>
        <Ol modifier="upper-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </Ol>
        <Ol modifier="upper-roman">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </Ol>
      </Box>
    </Content>
  </Section>
)

export const ContentSizeExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Text textWeight="bold">Medium</Text>
    <Box>
      <Text textSize="2" textWeight="bold">
        Hello World
      </Text>
      <Content size="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
        justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
        sollicitudin vel erat vel, interdum mattis neque.
      </Content>
      <Text as="p" textSize="3" textWeight="bold">
        Second level
      </Text>
      <Content size="medium">
        Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque
        condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
        urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus
        lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
        <Ol>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus</li>
        </Ol>
      </Content>
    </Box>
    <Text textWeight="bold">Large</Text>
    <Box>
      <Text textSize="2" textWeight="bold">
        Hello World
      </Text>
      <Content size="large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
        justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
        sollicitudin vel erat vel, interdum mattis neque.
      </Content>
      <Text as="p" textSize="3" textWeight="bold">
        Second level
      </Text>
      <Content size="large">
        Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque
        condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
        urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus
        lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
        <Ol>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus</li>
        </Ol>
      </Content>
    </Box>
    <Text textWeight="bold">Small</Text>
    <Box>
      <Text textSize="2" textWeight="bold">
        Hello World
      </Text>
      <Content size="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
        justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
        sollicitudin vel erat vel, interdum mattis neque.
      </Content>
      <Text as="p" textSize="3" textWeight="bold">
        Second level
      </Text>
      <Content size="small">
        Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque
        condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
        urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus
        lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
        <Ol>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus</li>
        </Ol>
      </Content>
    </Box>
  </Section>
)

export const ContentExample: React.FC = () => (
  <>
    <BasicContentExample />
    <ContentSizeExample />
  </>
)
