import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { EVSList } from '../views'

export const EVSAssignedRoute = () => (
  <>
    <Get asyncFn={() => evAPI.many()}>{data => <EVSList evsList={data} />}</Get>
  </>
)
