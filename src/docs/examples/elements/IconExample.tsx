import {
  faBan,
  faCheck,
  faExclamationTriangle,
  faHome,
  faInfoCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon, Section, Title } from '../devfractal'

export const IconExample: React.SFC = () => (
  <>
    <Section>
      <Title>Normal Icon</Title>
      <Icon icon={faHome} />
    </Section>
    <Section>
      <Title>Colors</Title>
      <Icon icon={faCheck} textColor="success" />
      <Icon icon={faExclamationTriangle} textColor="warning" />
      <Icon icon={faBan} textColor="danger" />
      <Icon icon={faInfoCircle} textColor="info" />
    </Section>
    <Section>
      <Title>Sizes</Title>
      <Icon icon={faUser} size="sm" />
      <Icon icon={faUser} size="lg" />
      <Icon icon={faUser} size="xs" />
      <Icon icon={faUser} size="1x" />
      <Icon icon={faUser} size="2x" />
      <Section>
        <Icon icon={faUser} size="3x" />
      </Section>
      <Section>
        <Icon icon={faUser} size="4x" />
      </Section>
      <Section>
        <Icon icon={faUser} size="5x" />
      </Section>
      <Section>
        <Icon icon={faUser} size="6x" />
      </Section>
      <Section>
        <Icon icon={faUser} size="7x" />
      </Section>
      <Section>
        <Icon icon={faUser} size="8x" />
      </Section>
      <Section>
        <Icon icon={faUser} size="9x" />
      </Section>
    </Section>
    <Section>
      <Title>Fixed Width Icon</Title>
      <Icon icon={faHome} textColor="warning" fixedWidth />
    </Section>
    <Section>
      <Title>Bordered Icon</Title>
      <Icon icon={faUser} size="lg" textColor="info" border />
    </Section>
    <Section>
      <Title>Animated Icon</Title>
      <Icon icon={faHome} textColor="danger" spin />
    </Section>
    <Section>
      <Title>Rotated & Flipped</Title>
      <Icon icon={faHome} textColor="info" transform="rotate-90" />
      <Icon icon={faHome} textColor="info" transform="rotate-180" />
      <Icon icon={faHome} textColor="info" transform="rotate-270" />
      <Icon icon={faHome} textColor="info" transform="flip-h" />
      <Icon icon={faHome} textColor="info" transform="flip-v" />
    </Section>
  </>
)
