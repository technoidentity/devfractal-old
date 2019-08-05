import { Put } from 'devfractal-api'
import { useMatch } from 'devfractal-router'
import { Section } from 'devfractal-ui-core'
import { string } from 'io-ts'
import React from 'react'
import { req } from 'technoidentity-utils'
import { Battery, batteryAPI, Params } from '../common'
import { BatteryForm } from '../views'

export const EditBatteryRoute: React.FC = () => {
  const { params } = useMatch(Params)
  return (
    <Section>
      <Put<Battery>
        id={params.id}
        doGet={batteryAPI.get}
        onPut={batteryAPI.update}
        component={BatteryForm}
        redirectPath="/batteries"
      />
    </Section>
  )
}
