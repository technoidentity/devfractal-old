import React from 'react'
import { render } from 'react-dom'
import { Section, Title } from 'technoidentity-devfractal'
import { MBool, MDate, MMT, MNumber, MString } from 'technoidentity-meta-core'
import { MetaForm } from './MetaForm'
import { MetaList } from './MetaList'
import { MetaView } from './MetaView'

// tslint:disable typedef

const todoMT = MMT({
  id: MNumber(),
  title: MString(),
  done: MBool(),
  scheduled: MDate(),
})

const todo = {
  id: 1,
  title: 'bring milk',
  done: false,
  scheduled: new Date(),
}

const TodoApp: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Todo Form</Title>
    <MetaForm meta={todoMT} />
    <MetaView meta={todoMT} data={todo} />
    <MetaList meta={todoMT} data={[todo, todo]} />
  </Section>
)

render(<TodoApp />, document.getElementById('root'))
