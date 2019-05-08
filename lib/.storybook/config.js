import { withInfo } from '@storybook/addon-info'
import { addDecorator, configure } from '@storybook/react'

// Temporarily imported here
import 'bulma/css/bulma.css'

addDecorator(withInfo)

const req = require.context('../src/stories', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
