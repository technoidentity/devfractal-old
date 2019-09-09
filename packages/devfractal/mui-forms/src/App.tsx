import Button from '@material-ui/core/Button'
import { ThreeDRotation } from '@material-ui/icons'
import React from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'

const App: React.FC = () => {
  return (
    <Button variant="contained" color="primary">
      <ThreeDRotation />
    </Button>
  )
}
render(<App />, document.getElementById('root'))
