import {
  faBan,
  faCheck,
  faExclamationTriangle,
  faHome,
  faInfoCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Icon as IconComponent, Section, Title } from '@stp/ui'
import React from 'react'

const BasicIconExample: React.FC = () => (
  <Section>
    <Title>Normal Icon</Title>
    <IconComponent icon={faHome} />
  </Section>
)

const IconColorExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <IconComponent icon={faCheck} textColor="success" />
    <IconComponent icon={faExclamationTriangle} textColor="warning" />
    <IconComponent icon={faBan} textColor="danger" />
    <IconComponent icon={faInfoCircle} textColor="info" />
  </Section>
)

const IconSizeExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <IconComponent icon={faUser} size="sm" />
    <IconComponent icon={faUser} size="lg" />
    <IconComponent icon={faUser} size="xs" />
    <IconComponent icon={faUser} size="1x" />
    <IconComponent icon={faUser} size="2x" />
    <Section>
      <IconComponent icon={faUser} size="3x" />
    </Section>
    <Section>
      <IconComponent icon={faUser} size="4x" />
    </Section>
    <Section>
      <IconComponent icon={faUser} size="5x" />
    </Section>
    <Section>
      <IconComponent icon={faUser} size="6x" />
    </Section>
    <Section>
      <IconComponent icon={faUser} size="7x" />
    </Section>
    <Section>
      <IconComponent icon={faUser} size="8x" />
    </Section>
    <Section>
      <IconComponent icon={faUser} size="9x" />
    </Section>
  </Section>
)

const FixedWidthIconExample: React.FC = () => (
  <Section>
    <Title>Fixed Width Icon</Title>
    <IconComponent icon={faHome} textColor="warning" fixedWidth />
  </Section>
)

const BorderedIconExample: React.FC = () => (
  <Section>
    <Title>Bordered Icon</Title>
    <IconComponent icon={faUser} size="lg" textColor="info" border />
  </Section>
)

const AnimatedIconExample: React.FC = () => (
  <Section>
    <Title>Animated Icon</Title>
    <IconComponent icon={faHome} textColor="danger" spin />
  </Section>
)

const RotatedFlippedIconsExample: React.FC = () => (
  <Section>
    <Title>Rotated & Flipped</Title>
    <IconComponent icon={faHome} textColor="info" transform="rotate-90" />
    <IconComponent icon={faHome} textColor="info" transform="rotate-180" />
    <IconComponent icon={faHome} textColor="info" transform="rotate-270" />
    <IconComponent icon={faHome} textColor="info" transform="flip-h" />
    <IconComponent icon={faHome} textColor="info" transform="flip-v" />
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
