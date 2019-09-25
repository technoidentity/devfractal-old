import { cast, ObjC, Props, TypeOf } from 'technoidentity-utils'
import { db } from './firestore'

// tslint:disable typedef

export interface FirstoreAPI<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly idKey: ID
  readonly spec: ObjC<Opt, Req>
  readonly resource: string
  many(): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>
  one(id: TypeOf<ObjC<Opt, Req>>[ID]): Promise<TypeOf<ObjC<Opt, Req>>>
  create(obj: Omit<TypeOf<ObjC<Opt, Req>>, ID>): Promise<TypeOf<ObjC<Opt, Req>>>
  replace(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    obj: TypeOf<ObjC<Opt, Req>>,
  ): Promise<TypeOf<ObjC<Opt, Req>>>
  del(id: TypeOf<ObjC<Opt, Req>>[ID]): Promise<void>
}

export function fsRest<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>(
  spec: ObjC<Opt, Req>,
  idKey: ID,
  resource: string,
  // toQuery: (spec: Spec, query: APIQuery<TypeOf<Spec>>) => string = toQueryFn,
): FirstoreAPI<Opt, Req, ID> {
  const res = db.collection(resource)

  const createModel = (
    doc: firebase.firestore.DocumentSnapshot,
  ): TypeOf<ObjC<Opt, Req>> => {
    const data = doc.data()
    if (data === undefined) {
      throw new Error(`${resource} not found`)
    }

    return cast(spec, { ...doc.data(), [idKey]: doc.id })
  }

  const many: () => Promise<
    ReadonlyArray<TypeOf<ObjC<Opt, Req>>>
  > = async () => {
    const snapshot = await res.get()
    return snapshot.docs.map(createModel)
  }

  const one: (
    id: TypeOf<ObjC<Opt, Req>>[ID],
  ) => Promise<TypeOf<ObjC<Opt, Req>>> = async id => {
    const doc = await db
      .collection(resource)
      .doc(id)
      .get()

    return createModel(doc)
  }

  const create: (
    obj: Omit<TypeOf<ObjC<Opt, Req>>, ID>,
  ) => Promise<TypeOf<ObjC<Opt, Req>>> = async obj => {
    const ref = await res.add(obj)
    const doc = await ref.get()
    return createModel(doc)
  }

  const replace: (
    id: TypeOf<ObjC<Opt, Req>>[ID],
    obj: TypeOf<ObjC<Opt, Req>>,
  ) => Promise<TypeOf<ObjC<Opt, Req>>> = async (id, obj) => {
    console.log(obj)
    const ref = res.doc(id)
    await ref.set(obj)
    const doc = await ref.get()
    return createModel(doc)
  }

  const del: (id: TypeOf<ObjC<Opt, Req>>[ID]) => Promise<void> = async id =>
    db
      .collection(resource)
      .doc(id)
      .delete()

  return { many, one, create, replace, del, spec, idKey, resource }
}
