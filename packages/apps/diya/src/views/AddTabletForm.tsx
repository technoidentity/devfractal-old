import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import { Column, Columns, Section } from 'devfractal-ui-core'
import React, { useState } from 'react'
import { CreateLink, length, links } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { TabletData, VehicleResponse } from '../common'
import { getVehicleList } from '../pages'

const tabletLinks = links('tablets')

export const TabletForm = formComponent(
  TabletData,
  ({ initial, edit, onSubmit }) => {
    const { logout, setUser, setHeaderText } = useAuth()
    const [vehicleList, setVehicleList] = useState<
      VehicleResponse['data']['rows']
    >([])
    React.useMemo(async () => {
      const vehicleList = await getVehicleList({
        setUser,
        logout,
        setHeaderText,
      })
      setVehicleList(vehicleList)
      if (edit) {
        setHeaderText('Update Tablet')
      } else {
        setHeaderText('Add Tablet')
      }
    }, [logout, setUser, edit, setHeaderText])
    return (
      <>
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
                  required
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
            <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
