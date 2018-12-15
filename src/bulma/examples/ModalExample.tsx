import * as React from 'react'
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
} from '../components/Modal'
import { Image } from '../elements/Image'
import { logger } from './common'
export const ModalExample: React.SFC = () => (
  <Modal active>
    <ModalBackground />
    <ModalContent>
      <Image>
        <img src="https://bulma.io/images/placeholders/1280x960.png" />
      </Image>
    </ModalContent>
    <ModalClose
      className="is-large"
      aria-label="close"
      onClick={() => logger('closed')}
    />
  </Modal>
)
