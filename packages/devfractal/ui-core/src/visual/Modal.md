### ModalCard

```jsx
<div>
  <Button onClick={() => setState({ isOpen: true })}>Launch Card Modal</Button>
  <Modal active={state.isOpen} noClose>
    <ModalBackground />
    <ModalCard>
      <ModalCardHead>
        <ModalCardTitle>Modal Title</ModalCardTitle>
        <Delete onClick={() => setState({ isOpen: false })} />
      </ModalCardHead>
      <ModalCardBody>
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </ModalContent>
      </ModalCardBody>
      <ModalCardFoot>
        <Button>Submit</Button>
      </ModalCardFoot>
    </ModalCard>
  </Modal>
</div>
```

### ModalImage

```jsx
<div>
  <Button onClick={() => setState({ isOpen: true })}>Launch Image Modal</Button>
  <Modal
    active={state.isOpen}
    onModalClosed={() => setState({ isOpen: false })}
  >
    <ModalBackground />
    <ModalContent>
      <Image src="https://bulma.io/images/placeholders/1280x960.png" />
    </ModalContent>
  </Modal>
</div>
```
