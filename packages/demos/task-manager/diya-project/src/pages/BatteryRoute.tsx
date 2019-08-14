import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Battery, batteryAPI } from '../common'
import { BatteryForm } from '../views'

export const BatteryRoute: React.FC = () => (
  <Section>
    <Post<Battery>
      redirectPath="/batteries"
      onPost={batteryAPI.create}
      component={BatteryForm}
    />
  </Section>
)
