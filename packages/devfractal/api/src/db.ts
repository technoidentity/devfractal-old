import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { todo } from './todo'

// tslint:disable typedef

startFakeJSONServer({ todos: todo }, 9999, 50)
