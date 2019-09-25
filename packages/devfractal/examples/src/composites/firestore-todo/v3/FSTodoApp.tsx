import React from 'react'
import { fsTodoAPI } from '../common'
import { FSCrudRoutes } from './FSCrudRoutes'
import { FSTodoForm } from './FSTodoForm'
import { FSTodoList } from './FSTodoList'

export const FSTodoApp: React.FC = () => (
  <FSCrudRoutes api={fsTodoAPI} list={FSTodoList} form={FSTodoForm} />
)
