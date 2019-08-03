import * as t from 'io-ts'
import { req } from 'technoidentity-utils'
// tslint:disable typedef

export const todo = req({ id: t.number, title: t.string, done: t.boolean })
