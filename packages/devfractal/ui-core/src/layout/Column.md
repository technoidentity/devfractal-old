### Basic Column

```jsx
<Columns>
  <Column>
    <Notification variant="primary">First Column</Notification>
  </Column>
  <Column>
    <Notification variant="primary">Second Column</Notification>
  </Column>
  <Column>
    <Notification variant="primary">Third Column</Notification>
  </Column>
  <Column>
    <Notification variant="primary">Fourth Column</Notification>
  </Column>
</Columns>
```

### Column with all properties

```jsx
<Columns>
  <Column
    size="one-fifth"
    gridSize="8"
    offsetSize="1"
    responsive="desktop"
    narrow={false}
  >
    <Notification variant="primary">First Column</Notification>
  </Column>
  <Column>
    <Notification variant="primary">Second Column</Notification>
  </Column>
  <Column>
    <Notification variant="primary">Third Column</Notification>
  </Column>
  <Column>
    <Notification variant="primary">Fourth Column</Notification>
  </Column>
</Columns>
```
