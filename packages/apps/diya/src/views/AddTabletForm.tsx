import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import { Column, Columns, Section } from 'devfractal-ui-core'
import React, { useState } from 'react'
import { length } from 'technoidentity-devfractal'
import { TabletData, VehicleResponse } from '../common'
import { HeadTitle } from '../components'
import { getVehicleList } from '../pages'

export const TabletForm = formComponent(TabletData, ({ initial, onSubmit }) => {
  const [vehicleList, setVehicleList] = useState<
    VehicleResponse['data']['rows']
  >([])
  React.useMemo(async () => {
    const vehicleList = await getVehicleList()
    setVehicleList(vehicleList)
  }, [vehicleList])
  return (
    <>
      <Section>
        <HeadTitle>Add Tablet</HeadTitle>
      </Section>
      <Section>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <Simple.Text name="androidDeviceId" validations={[length(16)]} />
              <Simple.Select name="vehicleId" required fullWidth>
                <option value="">Select Vehicle</option>
                {vehicleList &&
                  vehicleList.map(vehicleList => (
                    <option key={vehicleList.id} value={vehicleList.id}>
                      {vehicleList.vehicleName}
                    </option>
                  ))}
              </Simple.Select>
            </Column>
          </Columns>
          <Simple.FormButtons submit={'Save'} />
        </Simple.Form>
      </Section>
    </>
  )
})
