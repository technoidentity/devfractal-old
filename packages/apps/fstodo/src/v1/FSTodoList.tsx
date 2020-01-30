import { Table, TableBody, TableHead, Text, Th, Tr } from '@stp/devfractal'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../common'
import { FSTodoItem } from './FSTodoItem'

// tslint:disable typedef

export interface FSTodoListProps {
  readonly todoList: readonly FSTodo[]
  onDeleteTodo(id: string): void
}

export const FSTodoListView: React.FC<FSTodoListProps> = ({
  todoList,
  onDeleteTodo,
}) => (
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

export const FSTodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<readonly FSTodo[]>([])
  const [fetchAgain, setFetchAgain] = React.useState(false)
  const [err, setErr] = React.useState('')

  const handleDelete = async (id: string) => {
    try {
      await fsTodoAPI.del(id)
      setFetchAgain(!fetchAgain)
    } catch (err) {
      setErr(err.message)
    }
  }
  React.useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    fsTodoAPI.many().then(setTodos)
  }, [fetchAgain])

  return (
    <>
      <Text textColor="danger">{err}</Text>
      <FSTodoListView todoList={todos} onDeleteTodo={handleDelete} />
    </>
  )
}
