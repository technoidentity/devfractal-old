import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { EVSList } from '../views/EVSAssigned'

export const EVSAssignedRoute: React.FC = () => (
  <>
    <Get asyncFn={() => evAPI.many()}>{data => <EVSList evsList={data} />}</Get>
  </>
)
