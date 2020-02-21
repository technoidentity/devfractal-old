import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import { APIComponents, SafeRoute, SafeRouter } from 'technoidentity-core'
import 'typeface-roboto'
import { MuiComponents } from './APIComponents'

const { ErrorView, Spinner, NotFound, ServerErrorsView } = MuiComponents

const CheckingComponents: React.FC = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <APIComponents.Provider value={MuiComponents}>
      <Spinner size={70} />
      <ErrorView error={new Error('error occurred')} />
      <NotFound />
      <ServerErrorsView>error occurred</ServerErrorsView>
    </APIComponents.Provider>
  </MuiPickersUtilsProvider>
)

const App: React.FC = () => {
  return (
    <SafeRouter variant="browser">
      <SafeRoute path="/" component={CheckingComponents} />
    </SafeRouter>
  )
}

render(<App />, document.getElementById('root'))
