import React from 'react'
import {
  FaBan,
  FaCheck,
  FaExclamationTriangle,
  FaHome,
  FaInfoCircle,
  FaUser,
} from 'react-icons/fa'
import { Section, Title } from 'technoidentity-devfractal'

const BasicIconExample: React.FC = () => (
  <Section>
    <Title>Normal Icon</Title>
    <FaHome />
  </Section>
)

const IconColorExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <FaCheck color="success" />
    <FaExclamationTriangle color="warning" />
    <FaBan color="danger" />
    <FaInfoCircle color="info" />
  </Section>
)

const IconSizeExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <FaUser size="sm" />
    <FaUser size="lg" />
    <FaUser size="xs" />
    <FaUser size="1x" />
    <FaUser size="2x" />
    <Section>
      <FaUser size="3x" />
    </Section>
    <Section>
      <FaUser size="4x" />
    </Section>
    <Section>
      <FaUser size="5x" />
    </Section>
    <Section>
      <FaUser size="6x" />
    </Section>
    <Section>
      <FaUser size="7x" />
    </Section>
    <Section>
      <FaUser size="8x" />
    </Section>
    <Section>
      <FaUser size="9x" />
    </Section>
  </Section>
)

const FixedWidthIconExample: React.FC = () => (
  <Section>
    <Title>Fixed Width Icon</Title>
    {/* TODO: fixed */}
    {/* <FaHome color="warning" fixedWidth /> */}
  </Section>
)

const BorderedIconExample: React.FC = () => (
  <Section>
    <Title>Bordered Icon</Title>
    {/* TODO: border */}
    {/* <FaUser size="lg" color="info" border /> */}
  </Section>
)

const AnimatedIconExample: React.FC = () => (
  <Section>
    <Title>Animated Icon</Title>
    {/* TODO: simple */}
    {/* <FaHome color="danger" spin /> */}
  </Section>
)

const RotatedFlippedIconsExample: React.FC = () => (
  <Section>
    <Title>Rotated & Flipped</Title>
    <FaHome color="info" transform="rotate-90" />
    <FaHome color="info" transform="rotate-180" />
    <FaHome color="info" transform="rotate-270" />
    <FaHome color="info" transform="flip-h" />
    <FaHome color="info" transform="flip-v" />
  </Section>
)

export const Icon: React.FC = () => (
  <>
    <BasicIconExample />
    <IconColorExample />
    <IconSizeExample />
    <FixedWidthIconExample />
    <BorderedIconExample />
    <AnimatedIconExample />
    <RotatedFlippedIconsExample />
  </>
)
