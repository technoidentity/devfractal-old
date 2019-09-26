import { boolean, req, string, TypeOf } from 'technoidentity-utils'
import { fsRest } from './firestoreRest'
import { FSDate } from './fsDate'

// tslint:disable typedef
export const FSTodo = req({
  id: string,
  title: string,
  done: boolean,
  completed: FSDate,
})

export type FSTodo = TypeOf<typeof FSTodo>

export const fsTodoAPI = fsRest(FSTodo, 'id', 'todos')
