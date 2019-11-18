import {
  Button,
  ButtonsGroup,
  Delete,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFoot,
  ModalCardHead,
  ModalCardTitle,
  ModalContent,
} from 'devfractal-ui-core'

import React from 'react'

interface DeleteProps {
  readonly state: { readonly id: string; readonly isOpen: boolean }
  readonly url: string
  readonly message: string
  setState(
    value: React.SetStateAction<{
      readonly isOpen: boolean
      readonly id: string
    }>,
  ): void
  deleteAsyncFun(url: string, message: string): Promise<void>
  handleGetList(): Promise<void>
}
export const DeleteConfirmation = ({
  state,
  setState,
  deleteAsyncFun,
  handleGetList,
  url,
  message,
}: DeleteProps) => {
  return (
    <Modal active={state.isOpen} noClose>
      <ModalBackground />
      <ModalCard>
        <ModalCardHead>
          <ModalCardTitle>Delete</ModalCardTitle>
          <Delete onClick={() => setState({ isOpen: false, id: state.id })} />
        </ModalCardHead>
        <ModalCardBody>
          <ModalContent>Are you sure you want to Delete?</ModalContent>
        </ModalCardBody>
        <ModalCardFoot>
          <ButtonsGroup>
            <Button
              variant="info"
              onClick={async () => {
                await deleteAsyncFun(url, message)
                await handleGetList()
              }}
              noControl
            >
              yes
            </Button>{' '}
            <Button
              variant="danger"
              onClick={() => setState({ isOpen: false, id: state.id })}
              noControl
            >
              cancel
            </Button>
          </ButtonsGroup>
        </ModalCardFoot>
      </ModalCard>
    </Modal>
  )
}
