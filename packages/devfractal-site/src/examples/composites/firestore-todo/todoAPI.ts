import { db } from './firestore'

// tslint:disable typedef

export interface FSTodo {
  readonly id: string
  readonly title: string
  readonly done: boolean
}

export const all: () => Promise<ReadonlyArray<FSTodo>> = async () => {
  const snapshot = await db.collection('todos').get()
  console.log('all')
  return snapshot.docs.map(doc => ({
    id: doc.id,

    title: doc.data().title,
    done: doc.data().done,
  }))
}

export const one: (id: string) => Promise<FSTodo> = async id => {
  const doc = await db
    .collection('todos')
    .doc(id)
    .get()

  const data = doc.data()
  if (data === undefined) {
    throw new Error(`no document ${id}`)
  }

  return {
    id: doc.id,
    title: data.title,
    done: data.done,
  }
}

export const create: (
  todo: Omit<FSTodo, 'id'>,
) => Promise<firebase.firestore.DocumentReference> = async todo =>
  db.collection('todos').add(todo)

export const update: (todo: FSTodo) => Promise<void> = async ({
  id,
  title,
  done,
}) =>
  db
    .collection('todos')
    .doc(id)
    .set({ title, done })

export const remove: (id: string) => Promise<void> = async id =>
  db
    .collection('todos')
    .doc(id)
    .delete()
