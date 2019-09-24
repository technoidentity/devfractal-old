import { Table, TableBody, TableHead, Th, Tr } from 'devfractal-ui-core'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../common/todoAPI'
import { FSTodoItem } from './FSTodoItem'

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

export const FSTodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<ReadonlyArray<FSTodo>>([])
  const [fetchAgain, setFetchAgain] = React.useState(0)

  const handleDelete = async (id: string) => {
    await fsTodoAPI.del(id)
    setFetchAgain(fetchAgain + 1)
  }
  React.useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    fsTodoAPI.many().then(setTodos)
  }, [fetchAgain])

  return <FSTodoListView todoList={todos} onDeleteTodo={handleDelete} />
}
