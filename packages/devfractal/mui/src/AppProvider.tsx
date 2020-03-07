import DateFnsUtils from '@date-io/date-fns'
import { MuiThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import {
  APIComponents,
  RouterProps,
  RouterType,
  SafeRouter,
} from 'technoidentity-core'
import 'typeface-roboto'
import { MuiAPIComponents } from './MuiAPIComponents'

export interface AppProviderProps<Theme, RT extends RouterType> {
  readonly theme?: Partial<Theme> | ((outerTheme: Theme) => Theme)
  readonly children: React.ReactNode
  readonly variant?: RouterProps<RT>['variant']
}

function ThemeProvider<Theme, RT extends RouterType>({
  theme,
  children,
}: Pick<AppProviderProps<Theme, RT>, 'theme' | 'children'>): JSX.Element {
  return (
    <>
      {theme ? (
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      ) : (
        children
      )}
    </>
  )
}

export function AppProvider<Theme, RT extends RouterType>({
  variant,
  theme,
  children,
}: AppProviderProps<Theme, RT>): JSX.Element {
  return (
    <SafeRouter variant={variant}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <APIComponents.Provider value={MuiAPIComponents}>
            {/* <CrudComponents.Provider value={CrudC} */}
            {children}
          </APIComponents.Provider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </SafeRouter>
  )
}
