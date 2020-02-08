import { FSDate, fsRest } from 'stp-devfractal'
import { boolean, req, string, TypeOf } from 'stp-utils'
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
