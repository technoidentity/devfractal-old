import axios from 'axios'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'

const User = t.type({
  name: t.string,
  password: t.number,
  confirmPassword: t.string,
})

export const getOneUser = async () => {
  const res = await axios.get(
    'http://localhost:9999/users/5cf4c97eeb2b8b11756f8864',
  )

  try {
    const data = await tp.decode(User, res.data)
    console.log(`${data.name} having password of ${data.confirmPassword}`)
  } catch (err) {
    if (tp.isDecodeError(err)) {
      console.log('Request failed due to invalid data.', err)
    } else {
      console.log('Request failed due to network issue.')
    }
  }
}
