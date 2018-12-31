import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Modal,
  ModalBackground,
  ModalClose,
  ModalContent,
} from '../../components/Modal'
import { Box, Content, Delete, Icon, Image, Title } from '../../elements'
import {
  Level,
  LevelItem,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Section,
} from '../../layout'

export const ModalExample: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Launch example modal</Title>
      <Modal active>
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
        <ModalClose />
      </Modal>
    </Section>
    {/* <Section>
      <Title size="4">Image modal</Title>
      <Modal active>
        <ModalBackground />
        <ModalContent>
          <Image
            src="https://bulma.io/images/placeholders/1280x960.png"
            size="48x48"
          />
        </ModalContent>
        <ModalClose />
      </Modal>
    </Section> */}

    {/* <Section>
      <Title size="4"> Modal card</Title>
      <Modal>
        <ModalBackground />
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal title</ModalCardTitle>
            <Delete />
          </ModalCardHead>
          <ModalCardBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            eum ratione ipsum itaque cumque, delectus quia perspiciatis nemo
            mollitia ducimus vero praesentium, pariatur reiciendis ullam amet
            numquam! Enim, quia nesciunt
          </ModalCardBody>
          <ModalCardFoot>
            <Button variant="success">Save changes</Button>
            <Button>Cancel</Button>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    </Section> */}
  </>
)
