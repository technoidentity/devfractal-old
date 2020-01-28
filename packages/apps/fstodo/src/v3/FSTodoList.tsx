// tslint:disable typedef
import { CrudTable, links } from '@stp/crud'
import { component } from '@stp/ui-core'
import { readonlyArray, req } from '@stp/utils'
import React from 'react'
import { FSTodo } from '../common'

const todoLinks = links('todos')

const FSTodoListProps = req({
  data: readonlyArray(FSTodo),
})

export const FSTodoList = component(FSTodoListProps, ({ data: fsTodoList }) => (
  <CrudTable
    data={fsTodoList}
    select={['title', 'done', 'completed']}
    editTo={v => todoLinks.edit(v.id)}
  />
))
