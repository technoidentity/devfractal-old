import axios from 'axios'
import * as t from 'io-ts'
import * as tpromise from 'io-ts-promise'

const User = t.type({
  name: t.string,
  password: t.number,
  confirmPassword: t.string,
})

export const getOneUser = () => {
  axios
    .get('http://localhost:9999/users/5cf4c97eeb2b8b11756f8864')
    .then(res => tpromise.decode(User, res.data))
    .then(typeSafeData =>
      console.log(
        `${typeSafeData.name} having password of ${typeSafeData.confirmPassword}`,
      ),
    )
    .catch(err => {
      if (tpromise.isDecodeError(err)) {
        console.log('Request failed due to invalid data.', err)
      } else {
        console.log('Request failed due to network issue.')
      }
    })
}
