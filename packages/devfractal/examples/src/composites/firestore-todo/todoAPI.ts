import { boolean, cast, req, string, TypeOf } from 'technoidentity-utils'
import { db } from './firestoreNew'

// tslint:disable typedef

export interface FSAPI {
  many(): Promise<ReadonlyArray<FSTodo>>
  one(id: string): Promise<FSTodo>
  create(todo: Omit<FSTodo, 'id'>): Promise<FSTodo>
  replace(todo: FSTodo): Promise<FSTodo>
  del(id: string): Promise<void>
}

export const FSTodo = req({
  id: string,
  title: string,
  done: boolean,
})

export type FSTodo = TypeOf<typeof FSTodo>

export function fsRest(
  // spec: Spec,
  // idKey: ID /* = 'id' as any */,
  resource: string,
): // toQuery: (spec: Spec, query: APIQuery<TypeOf<Spec>>) => string = toQueryFn,
FSAPI {
  const res = db.collection(resource)

  const createTodo = (doc: firebase.firestore.DocumentSnapshot): FSTodo => {
    const data = doc.data()
    if (data === undefined) {
      throw new Error('todo not found')
    }
    return cast(FSTodo, { id: doc.id, title: data.title, done: data.done })
  }

  const many: () => Promise<ReadonlyArray<FSTodo>> = async () => {
    const snapshot = await res.get()
    return snapshot.docs.map(createTodo)
  }

  const one: (id: string) => Promise<FSTodo> = async id => {
    const doc = await db
      .collection('todos')
      .doc(id)
      .get()

    return createTodo(doc)
  }

  const create: (todo: Omit<FSTodo, 'id'>) => Promise<FSTodo> = async todo => {
    const ref = await res.add(todo)
    const doc = await ref.get()
    return createTodo(doc)
  }

  const replace: (todo: FSTodo) => Promise<FSTodo> = async ({
    id,
    title,
    done,
  }) => {
    const ref = res.doc(id)

    await ref.set({ title, done })
    const doc = await ref.get()
    return createTodo(doc)
  }

  const del: (id: string) => Promise<void> = async id =>
    db
      .collection('todos')
      .doc(id)
      .delete()

  return { many, one, create, replace, del }
}

export const fsTodoAPI = fsRest('todos')
