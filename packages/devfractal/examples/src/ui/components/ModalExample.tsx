import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons'
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
  ModalCard,
  ModalCardBody,
  ModalCardFoot,
  ModalCardHead,
  ModalCardTitle,
  ModalContent,
  Ol,
  Section,
  Title,
} from '@stp/ui'
import React from 'react'

export const ImageModalExample: React.FC = () => {
  const [modal, setModal] = React.useState(false)
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

export const MediaModalExample: React.FC = () => {
  const [modal, setModal] = React.useState(false)
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
                  <LevelItem direction="left">
                    <Icon icon={faReply} />
                    <Icon icon={faRetweet} />
                    <Icon icon={faHeart} />
                  </LevelItem>
                </Level>
              </MediaContent>
              <MediaRight />
            </Media>
          </Box>
        </ModalContent>
      </Modal>
    </Section>
  )
}

export const ModalCardExample: React.FC = () => {
  const [modal, setModal] = React.useState(false)
  const onModalClose: () => void = () => setModal(false)
  return (
    <Section>
      <Button onClick={() => setModal(true)} variant="primary" size="large">
        Launch Card Modal
      </Button>
      <Modal active={modal} noClose>
        <ModalBackground />
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal title</ModalCardTitle>
            <Delete onClick={onModalClose} />
          </ModalCardHead>
          <ModalCardBody>
            <Content>
              <Title size="1">Hello World</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida, nulla nunc varius
                lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
                dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis
                neque.
              </p>
              <Title size="2">Second level</Title>
              <p>
                Curabitur accumsan turpis pharetra
                <strong>augue tincidunt</strong> blandit. Quisque condimentum
                maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
                vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
                rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
                neque nisl.
              </p>
              <ul>
                <li>
                  In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                  Morbi eu nulla lobortis, lobortis est in, fringilla felis.
                </li>
                <li>
                  Aliquam nec felis in sapien venenatis viverra fermentum nec
                  lectus.
                </li>
                <li>Ut non enim metus.</li>
              </ul>
              <Title size="3">Third level</Title>
              <p>
                Quisque ante lacus, malesuada ac auctor vitae, congue
                <a href="#!">non ante</a>. Phasellus lacus ex, semper ac tortor
                nec, fringilla condimentum orci. Fusce eu rutrum tellus.
              </p>
              <Ol>
                <li>Donec blandit a lorem id convallis.</li>
                <li>Cras gravida arcu at diam gravida gravida.</li>
                <li>Integer in volutpat libero.</li>
                <li>Donec a diam tellus.</li>
                <li>Aenean nec tortor orci.</li>
                <li>
                  Quisque aliquam cursus urna, non bibendum massa viverra eget.
                </li>
                <li>Vivamus maximus ultricies pulvinar.</li>
              </Ol>
              <blockquote>
                Ut venenatis, nisl scelerisque sollicitudin fermentum, quam
                libero hendrerit ipsum, ut blandit est tellus sit amet turpis.
              </blockquote>
              <p>
                Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl etc
                <em>justo sodales</em> elementum. Maecenas ultrices lacus quis
                neque consectetur, et lobortis nisi molestie.
              </p>
              <p>
                Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi.
                Donec mattis vulputate risus in luctus. Maecenas vestibulum
                interdum commodo.
              </p>
              <p>
                Suspendisse egestas sapien non felis placerat elementum. Morbi
                tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
                Nulla facilisi. Nullam ac erat ante.
              </p>
              <Title size="4">Fourth level</Title>
              <p>
                Nulla efficitur eleifend nisi, sit amet bibendum sapien
                fringilla ac. Mauris euismod metus a tellus laoreet, at
                elementum ex efficitur.
              </p>
              <p>
                Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue
                cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est
                maximus est porta condimentum in eu justo. Nulla id iaculis
                sapien.
              </p>
              <p>
                Phasellus porttitor enim id metus volutpat ultricies. Ut nisi
                nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
                lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula
                sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
                mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac
                posuere est. Nunc ultricies nunc neque, vitae ultricies ex
                sodales quis. Aliquam eu nibh in libero accumsan pulvinar.
                Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
                Proin tempor cursus nisl vel condimentum. Nam pharetra varius
                metus non pellentesque.
              </p>
              <Title size="5">Fifth level</Title>
              <p>
                Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed
                tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
                ligula mi, in luctus elit volutpat porta. Phasellus molestie
                diam vel nisi sodales, a eleifend augue laoreet. Sed nec
                eleifend justo. Nam et sollicitudin odio.
              </p>
              <Title size="6">Sixth level</Title>
              <p>
                Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec
                pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
                Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus
                nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
                Nunc vitae maximus purus, nec consectetur dui. Suspendisse
                euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed
                varius sapien odio vitae est. Etiam at cursus metus.
              </p>
            </Content>
          </ModalCardBody>
          <ModalCardFoot>
            <Button variant="primary" noControl>
              Save changes
            </Button>
            <Button noControl>Cancel</Button>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    </Section>
  )
}

export const ModalExample: React.FC = () => (
  <>
    <MediaModalExample />
    <ImageModalExample />
    <ModalCardExample />
  </>
)
