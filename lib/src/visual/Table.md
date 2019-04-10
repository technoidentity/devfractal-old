### Default Table

```jsx
import { Table, TableBody, Tr, Td, Th } from './Table'
;<Table>
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
import { Table, TableBody, Tr, Th, Td } from './Table'
;<Table
  bordered={true}
  striped={false}
  narrow={false}
  hovered={false}
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
import { Table, TableBody, Tr, Th, Td } from './Table'
;<Table>
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
