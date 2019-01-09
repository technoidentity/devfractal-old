import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {
  Box,
  Button,
  Content,
  Delete,
  Icon,
  Image,
  Level,
  LevelItem,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Modal,
  ModalBackground,
  ModalContent,
  Section,
} from '../devfractal'

export const ImageModalExample: React.SFC = () => {
  const [modal, setModal] = useState(false)
  return (
    <Section>
      <Button onClick={() => setModal(true)} variant="primary" size="large">
        Launch Image Modal
      </Button>
      <Modal active={modal} onModalClosed={() => setModal(false)}>
        <ModalBackground />
        <ModalContent>
          <Image
            src="https://bulma.io/images/placeholders/640x480.png"
            size="128x128"
          />
        </ModalContent>
      </Modal>
    </Section>
  )
}

export const MediaModalExample: React.SFC = () => {
  const [modal, setModal] = useState(false)
  return (
    <Section>
      <Button onClick={() => setModal(true)} variant="primary" size="large">
        Launch Media Modal
      </Button>

      <Modal active={modal} onModalClosed={() => setModal(false)}>
        <ModalBackground />
        <ModalContent>
          <Box textBackgroundColor="white">
            <Media>
              <MediaLeft>
                <Image
                  size="64x64"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
                <Level className="is-mobile">
                  <LevelItem levelItemType="left">
                    <Icon icon={faReply} />
                    <Icon icon={faRetweet} />
                    <Icon icon={faHeart} />
                  </LevelItem>
                </Level>
              </MediaContent>
              <MediaRight>
                <Delete />
              </MediaRight>
            </Media>
          </Box>
        </ModalContent>
      </Modal>
    </Section>
  )
}
export const ModalExample: React.SFC = () => (
  <>
    <MediaModalExample />
    <ImageModalExample />
  </>
)
