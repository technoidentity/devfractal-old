export const hostname: string = process.env.HOST_NAME
  ? process.env.HOST_NAME
  : 'localhost'

export const fakeBaseURL: string = `http://${hostname}:9999`

export const baseURL: string = 'http://localhost:3000/v1'
