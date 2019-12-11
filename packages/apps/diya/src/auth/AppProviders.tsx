import { FormikActions } from 'formik'
import React from 'react'
import { http as httpAPI } from 'technoidentity-devfractal'
import { AuthUserInfo } from '../common'
// import { toastMessage } from '../components/Message'
import { baseURL } from '../config'
import { LoginValues } from '../views'
import { AuthProvider } from './AuthContext'

const http = httpAPI({ baseURL })

async function login(
  values: LoginValues,
  actions: FormikActions<LoginValues>,
  // setCount: React.Dispatch<number>,
  // noOfLoginAttempts: number,
): Promise<AuthUserInfo> {
  try {
    const loginData = await http.post(
      { resource: 'session' },
      values,
      AuthUserInfo,
    )
    localStorage.setItem('loginData', JSON.stringify(loginData))
    return loginData
  } catch (error) {
    const { status } = error.response
    actions.setSubmitting(false)
    switch (status) {
      case 500:
        actions.setErrors({ password: 'Server Error' })
        break
      case 401:
        // {
        //   if (noOfLoginAttempts >= 4) {
        actions.setErrors({ password: 'Username or Password is invalid' })
        //     toastMessage(
        //       'fail',
        //       'Your account has been locked. Please check your registered email account to reset your password',
        //     )
        //   } else {
        //     setCount(noOfLoginAttempts + 1)
        //     actions.setErrors({ password: 'Username or Password is invalid' })
        //     toastMessage(
        //       'fail',
        //       `You have ${5 - noOfLoginAttempts - 1} attempts left`,
        //     )
        //   }
        // }
        break
      default:
        actions.setErrors({ password: 'Internal server error' })
    }
    throw Error(error)
  }
}

async function logOut(): Promise<void> {
  localStorage.removeItem('loginData')
}

export const AppProviders: React.FC = ({ children }) => {
  const [user, setUser] = React.useState()
  const [noOfLoginAttempts, setCount] = React.useState(0)
  const [headerText, setHeaderText] = React.useState()

  return (
    <AuthProvider
      user={user}
      setUser={setUser}
      login={login}
      logout={logOut}
      noOfLoginAttempts={noOfLoginAttempts}
      setCount={setCount}
      headerText={headerText}
      setHeaderText={setHeaderText}
    >
      {children}
    </AuthProvider>
  )
}
