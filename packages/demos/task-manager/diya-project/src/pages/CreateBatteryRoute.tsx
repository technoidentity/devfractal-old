import { omit } from 'lodash-es'
import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Battery, batteryAPI } from '../common'
import { BatteryForm } from '../views'

export const CreateBatteryRoute: React.FC = () => (
  <Section>
    <Post<Battery>
      redirectPath="/batteries"
      onPost={values => batteryAPI.create(omit(values, 'id'))}
      component={BatteryForm}
    />
  </Section>
)
