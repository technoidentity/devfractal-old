import { Get } from 'devfractal-ui-api'
import { Table, TableBody, TableHead, Th, Tr } from 'devfractal-ui-core'
import React from 'react'
import { FSTodoItem } from './FSTodoItem'
import { del, FSTodo, many } from './todoAPI'

// tslint:disable typedef

export interface FSTodoListProps {
  readonly todoList: ReadonlyArray<FSTodo>
  onDeleteTodo(id: string): void
}

export const FSTodoListView: React.FC<FSTodoListProps> = ({
  todoList,
  onDeleteTodo,
}) => {
  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Done</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {todoList.map(todo => (
          <FSTodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </TableBody>
    </Table>
  )
}

const useUpdate = () => {
  const [toggle, set] = React.useState(false)
  const update = () => {
    set(!toggle)
  }
  return update
}

export const FSTodoList: React.FC = () => {
  const update = useUpdate()
  const handleDelete = async (id: string) => {
    await del(id)
    console.log('handleDelete')
    update()
  }

  console.log('render')
  return (
    // tslint:disable-next-line: no-unnecessary-callback-wrapper
    <Get asyncFn={many}>
      {data => <FSTodoListView todoList={data} onDeleteTodo={handleDelete} />}
    </Get>
  )
}
