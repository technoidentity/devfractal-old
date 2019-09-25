// tslint:disable typedef
import { CrudTable, links } from 'devfractal-crud'
import { component } from 'devfractal-ui-core'
import React from 'react'
import { readonlyArray, req } from 'technoidentity-utils'
import { FSTodo } from '../common'

const todoLinks = links('todos')

const FSTodoListProps = req({
  data: readonlyArray(FSTodo),
})

export const FSTodoList = component(FSTodoListProps, ({ data: fsTodoList }) => (
  <CrudTable
    data={fsTodoList}
    headers={['title', 'done']}
    editTo={v => todoLinks.edit(v.id)}
  />
))
