import React from 'react'
import { Put, Section, useMatch } from 'technoidentity-devfractal'
import { batteryAPI, Params } from '../common'
import { BatteryForm } from '../views'

export const EditBatteryRoute: React.FC = () => {
  const { params } = useMatch(Params)

  return (
    <Section>
      <Put
        id={params.id}
        doGet={batteryAPI.get}
        onPut={batteryAPI.update}
        component={BatteryForm}
        redirectPath="/batteries"
      />
    </Section>
  )
}
