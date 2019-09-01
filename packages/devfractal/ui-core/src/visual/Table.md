### Default Table

```jsx
<Table>
  <TableHead>
    <Tr>
      <Th>id</Th>
      <Th>name</Th>
    </Tr>
  </TableHead>
  <TableBody>
    <Tr>
      <Td>1</Td>
      <Td>foo</Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td>bar</Td>
    </Tr>
    <Tr>
      <Td>3</Td>
      <Td>foobar</Td>
    </Tr>
  </TableBody>
</Table>
```

### Table with all properties

```jsx
<Table
  bordered={true}
  striped={false}
  narrow={false}
  hoverable={false}
  fullWidth={false}
>
  <TableHead>
    <Tr>
      <Th>id</Th>
      <Th>name</Th>
    </Tr>
  </TableHead>
  <TableBody>
    <Tr>
      <Td>1</Td>
      <Td>foo</Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td>bar</Td>
    </Tr>
    <Tr>
      <Td>3</Td>
      <Td>foobar</Td>
    </Tr>
  </TableBody>
</Table>
```

### Table with properties applicable to Td,Th,Tr

```jsx
<Table>
  <TableHead>
    <Tr selected={false}>
      <Th variant="primary" selected={false} narrow={false}>
        id
      </Th>
      <Th>name</Th>
    </Tr>
  </TableHead>
  <TableBody>
    <Tr>
      <Td selected={false} narrow={false}>
        1
      </Td>
      <Td>foo</Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td variant="light">bar</Td>
    </Tr>
  </TableBody>
</Table>
```
