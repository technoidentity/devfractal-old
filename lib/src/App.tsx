import { faHome } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { render } from 'react-dom'
import { Icon } from './elements'

const App: React.SFC = () => <Icon icon={faHome} />

render(<App />, document.getElementById('root'))
