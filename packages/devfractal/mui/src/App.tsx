import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import { APIComponents, SafeRoute, SafeRouter } from 'technoidentity-core'
import 'typeface-roboto'
import { MuiComponents } from './APIComponents'

// const { ErrorView, Spinner, NotFound, ServerErrorsView } = MuiComponents

// const todo: any = { id: 1, title: 'open git hub', done: true }

const CheckingComponents: React.FC = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <APIComponents.Provider value={MuiComponents}>
      {/* <Spinner size={70} />
      <ErrorView error={new Error('error occurred')} />
      <NotFound />
      <ServerErrorsView>error occurred</ServerErrorsView> */}
      {/* <EditorView data={todo} /> */}
      {/* <Editor
        data={todo}
        id={'id'}
        onSubmit={(values: any) => console.log(values)}
      /> */}
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
