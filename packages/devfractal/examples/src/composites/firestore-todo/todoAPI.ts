import { db } from './firestoreNew'

// tslint:disable typedef

const todos = db.collection('todos')
export interface FSTodo {
  readonly id: string
  readonly title: string
  readonly done: boolean
}

const createTodo = (
  doc:
    | firebase.firestore.DocumentSnapshot
    | firebase.firestore.QueryDocumentSnapshot,
) => {
  const data = doc.data()
  if (data === undefined) {
    throw new Error('todo not found')
  }
  return { id: doc.id, title: data.title, done: data.done }
}

export const all: () => Promise<ReadonlyArray<FSTodo>> = async () => {
  const snapshot = await todos.get()
  return snapshot.docs.map(createTodo)
}

export const one: (id: string) => Promise<FSTodo> = async id => {
  const doc = await db
    .collection('todos')
    .doc(id)
    .get()

  return createTodo(doc)
}

export const create: (
  todo: Omit<FSTodo, 'id'>,
) => Promise<FSTodo> = async todo => {
  const ref = await todos.add(todo)
  const doc = await ref.get()
  return createTodo(doc)
}

export const update: (todo: FSTodo) => Promise<FSTodo> = async ({
  id,
  title,
  done,
}) => {
  const ref = todos.doc(id)

  await ref.set({ title, done })
  const doc = await ref.get()
  return createTodo(doc)
}

export const remove: (id: string) => Promise<void> = async id =>
  db
    .collection('todos')
    .doc(id)
    .delete()
