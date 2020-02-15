import React from 'react'
import { FSCrudRoutes } from 'technoidentity-devfractal'
import { fsTodoAPI } from '../common'
import { FSTodoForm } from './FSTodoForm'
import { FSTodoList } from './FSTodoList'

export const FSTodoApp: React.FC = () => (
  <FSCrudRoutes api={fsTodoAPI} list={FSTodoList} form={FSTodoForm} />
)
