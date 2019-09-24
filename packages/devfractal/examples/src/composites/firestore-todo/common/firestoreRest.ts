import { AnyObj, cast, TypeOf } from 'technoidentity-utils'
import { db } from './firestore'

// tslint:disable typedef

export interface FirstoreAPI<
  Spec extends AnyObj,
  ID extends keyof TypeOf<Spec>
> {
  many(): Promise<ReadonlyArray<TypeOf<Spec>>>
  one(id: TypeOf<Spec>[ID]): Promise<TypeOf<Spec>>
  create(todo: Omit<TypeOf<Spec>, ID>): Promise<TypeOf<Spec>>
  replace(todo: TypeOf<Spec>): Promise<TypeOf<Spec>>
  del(id: TypeOf<Spec>[ID]): Promise<void>
  readonly idKey: ID
  readonly spec: Spec
}

export function fsRest<Spec extends AnyObj, ID extends keyof TypeOf<Spec>>(
  spec: Spec,
  idKey: ID,
  resource: string,
  // toQuery: (spec: Spec, query: APIQuery<TypeOf<Spec>>) => string = toQueryFn,
): FirstoreAPI<Spec, ID> {
  const res = db.collection(resource)

  const createModel = (
    doc: firebase.firestore.DocumentSnapshot,
  ): TypeOf<Spec> => {
    const data = doc.data()
    if (data === undefined) {
      throw new Error(`${resource} not found`)
    }

    return cast(spec, { ...doc.data(), [idKey]: doc.id })
  }

  const many: () => Promise<ReadonlyArray<TypeOf<Spec>>> = async () => {
    const snapshot = await res.get()
    return snapshot.docs.map(createModel)
  }

  const one: (id: TypeOf<Spec>[ID]) => Promise<TypeOf<Spec>> = async id => {
    const doc = await db
      .collection('todos')
      .doc(id)
      .get()

    return createModel(doc)
  }

  const create: (
    todo: Omit<TypeOf<Spec>, ID>,
  ) => Promise<TypeOf<Spec>> = async todo => {
    const ref = await res.add(todo)
    const doc = await ref.get()
    return createModel(doc)
  }

  const replace: (todo: TypeOf<Spec>) => Promise<TypeOf<Spec>> = async ({
    id,
    title,
    done,
  }) => {
    const ref = res.doc(id)

    await ref.set({ title, done })
    const doc = await ref.get()
    return createModel(doc)
  }

  const del: (id: TypeOf<Spec>[ID]) => Promise<void> = async id =>
    db
      .collection('todos')
      .doc(id)
      .delete()

  return { many, one, create, replace, del, spec, idKey }
}
