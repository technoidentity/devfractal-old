import * as t from '@stp/utils'
import { date } from '@stp/utils'
import { req } from '@stp/utils'
import { startFakeJSONServer } from './fakeServer'

const User = req({
  id: t.Int,
  name: t.string,
  male: t.boolean,
  dateOfBirth: date,
})

startFakeJSONServer([{ count: 10, name: 'users', spec: User }])
