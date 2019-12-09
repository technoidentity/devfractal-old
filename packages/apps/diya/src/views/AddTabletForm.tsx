import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import { Column, Columns, Section } from 'devfractal-ui-core'
import React, { useState } from 'react'
import { CreateLink, links, length } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { TabletData, VehicleResponse } from '../common'
import { HeadTitle } from '../components'
import { getVehicleList } from '../pages'

const tabletLinks = links('tablets')

export const TabletForm = formComponent(TabletData, ({ initial, onSubmit }) => {
  const { logout, setUser } = useAuth()
  const [vehicleList, setVehicleList] = useState<
    VehicleResponse['data']['rows']
  >([])
  React.useMemo(async () => {
    const vehicleList = await getVehicleList({ setUser, logout })
    setVehicleList(vehicleList)
  }, [])
  return (
    <>
      <Section>
        <HeadTitle>Add Tablet</HeadTitle>
      </Section>
      <CreateLink alignment="right" variant="primary" to={tabletLinks.list}>
        Back
      </CreateLink>
      <Section>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <Simple.Text
                label="Android Device ID"
                name="androidDeviceId"
                validations={[length(16)]}
              />
              <Simple.Select
                label="Vehicle Id"
                name="vehicleId"
                required
                fullWidth
              >
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
