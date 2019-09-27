import { fsRest, FSDate } from 'technoidentity-devfractal'
import { boolean, req, string, TypeOf } from 'technoidentity-utils'
import { db } from './firestore'
// tslint:disable typedef
export const FSTodo = req({
  id: string,
  title: string,
  done: boolean,
  completed: FSDate,
})

export type FSTodo = TypeOf<typeof FSTodo>

export const fsTodoAPI = fsRest(db, FSTodo, 'id', 'todos')
