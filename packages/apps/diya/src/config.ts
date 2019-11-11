export const hostname: string = process.env.HOST_NAME
  ? process.env.HOST_NAME
  : 'localhost'

export const fakeBaseURL: string = `http://${hostname}:9999`

export const baseURL: string = 'http://localhost:3000/v1'

export const googleMapApiKey: string = 'AIzaSyBJu6P9EdyC5YfmwzLJzCuDL_26l5Syqx0'

// tslint:disable-next-line:readonly-array
export const libraries: string[] = ['geometry', 'drawing', 'places']
