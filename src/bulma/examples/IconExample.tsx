import {
  faBan,
  faCheck,
  faExclamationTriangle,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from '../form/Icon'

export const IconExample: React.SFC = () => (
  <div>
    <Icon icon={faUser} textColor="info" />
    <Icon icon={faCheck} textColor="success" />
    <Icon icon={faExclamationTriangle} textColor="warning" />
    <Icon icon={faBan} textColor="danger" />
    <Icon icon={faUser} textColor="info" size="sm" />
    <Icon icon={faCheck} textColor="success" size="lg" />
    <Icon icon={faExclamationTriangle} textColor="warning" size="xs" />
    <Icon icon={faBan} textColor="danger" />
    <Icon icon={faHome} textColor="warning" fixedWidth />
    <Icon icon={faHome} textColor="danger" spin />
    <Icon icon={faUser} textColor="info" border />
    <Icon icon={faHome} textColor="info" transform="rotate-90" />
    <Icon icon={faHome} textColor="info" transform="rotate-180" />
    <Icon icon={faHome} textColor="info" transform="rotate-270" />
    <Icon icon={faHome} textColor="info" transform="flip-h" />
    <Icon icon={faHome} textColor="info" transform="flip-v" />
    <Icon icon={faCheck} textColor="success" />
  </div>
)
