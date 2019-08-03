import * as t from 'io-ts'
import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { req } from 'technoidentity-utils'

// tslint:disable typedef

const todo = req({ id: t.number, title: t.string, done: t.boolean })

startFakeJSONServer({ todos: todo }, 9999, 50)
