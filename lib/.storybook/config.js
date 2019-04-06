import { withInfo } from '@storybook/addon-info'
import { addDecorator, configure } from '@storybook/react'

addDecorator(withInfo)

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  console.log(req.keys)
  req.keys().forEach(req)
}

configure(loadStories, module)
