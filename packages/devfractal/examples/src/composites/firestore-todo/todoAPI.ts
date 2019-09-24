import { boolean, req, string, TypeOf } from 'technoidentity-utils'
import { fsRest } from './firestoreRest'

// tslint:disable typedef
export const FSTodo = req({
  id: string,
  title: string,
  done: boolean,
})

export type FSTodo = TypeOf<typeof FSTodo>

export const fsTodoAPI = fsRest(FSTodo, 'id', 'todos')
