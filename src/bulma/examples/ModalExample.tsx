import React from 'react'
import {
  Modal,
  ModalBackground,
  ModalClose,
  ModalContent,
} from '../components/Modal'
import { Image } from '../elements/Image'
export const ModalExample: React.SFC = () => (
  <Modal active>
    <ModalBackground />
    <ModalContent>
      <Image src="https://bulma.io/images/placeholders/1280x960.png" />
    </ModalContent>
    <ModalClose />
  </Modal>
)
