import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import {
  Card,
  Column,
  Columns,
  http as httpAPI,
  Section,
  Text,
} from 'technoidentity-devfractal'
import { readonlyArray } from 'technoidentity-utils'
import { VehicleLocation } from '../common'
import { fakeBaseURL } from '../config'
import { FilterData } from '../reacttable/FilterData'
import { MapView } from './VehicleLocation'

const http = httpAPI({ baseURL: fakeBaseURL })

export const FilterDataEVs = () => {
  const [evs, setEVs] = React.useState<VehicleLocation[]>([])
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await http.get(
        { resource: 'vehicles_location' },
        readonlyArray(VehicleLocation),
      )
      setEVs([...data])
    }
    // tslint:disable-next-line: no-floating-promises
    fetchData()
  }, [])

  return evs.length !== 0 ? (
    <Card>
      <Section>
        <Columns>
          <Column>
            <Card>
              <FilterData
                tableData={evs}
                filterOption={[
                  { columnName: 'description', filterType: 'search' },
                  { columnName: 'client', filterType: 'select' },
                ]}
                component={({ data }) => <MapView data={data} />}
              />
            </Card>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <Card style={{ background: '#EFEFEF', textAlign: 'center' }}>
              <ReactSpeedometer
                segments={4}
                value={95}
                currentValueText={`95% Efficiency`}
                minValue={0}
                maxValue={100}
                segmentColors={['#ec7922', '#f3d711', '#93bf20', '#35a736']}
                needleHeightRatio={0.4}
                needleColor={'#000000'}
                height={180}
                maxSegmentLabels={0}
              />
              <Text textSize="6" style={{ color: '#3089c6' }}>
                Fleet Status
              </Text>
              <Columns>
                <Column>
                  <Text textSize="7">Total Vehicles : 102</Text>
                </Column>
                <Column>
                  <Text textSize="7">On the move : 98</Text>
                </Column>
                <Column>
                  <Text textSize="7">In maintenance : 8</Text>
                </Column>
              </Columns>
            </Card>
          </Column>
          <Column>
            <Card style={{ background: '#EFEFEF', textAlign: 'center' }}>
              <ReactSpeedometer
                segments={4}
                value={98}
                currentValueText={`98% Efficiency`}
                minValue={0}
                maxValue={100}
                segmentColors={['#ec7922', '#f3d711', '#93bf20', '#35a736']}
                needleHeightRatio={0.4}
                needleColor={'#000000'}
                height={180}
                maxSegmentLabels={0}
              />
              <Text textSize="6" style={{ color: '#3089c6' }}>
                Battery Status
              </Text>
              <Columns>
                <Column>
                  <Text textSize="7">Total Batteries : 855</Text>
                </Column>
                <Column>
                  <Text textSize="7">On the move : 800</Text>
                </Column>
                <Column>
                  <Text textSize="7">In maintenance : 55</Text>
                </Column>
              </Columns>
            </Card>
          </Column>
          <Column>
            <Card style={{ background: '#EFEFEF', textAlign: 'center' }}>
              <ReactSpeedometer
                segments={4}
                value={90}
                currentValueText={`90% Efficiency`}
                minValue={0}
                maxValue={100}
                segmentColors={['#ec7922', '#f3d711', '#93bf20', '#35a736']}
                needleHeightRatio={0.4}
                needleColor={'#000000'}
                height={180}
                maxSegmentLabels={0}
              />
              <Text textSize="6" style={{ color: '#3089c6' }}>
                Driver Status
              </Text>
              <Columns>
                <Column>
                  <Text textSize="7">Total Drivers : 75</Text>
                </Column>
                <Column>
                  <Text textSize="7">On the move : 70</Text>
                </Column>
                <Column>
                  <Text textSize="7">On Leave : 5</Text>
                </Column>
              </Columns>
            </Card>
          </Column>
        </Columns>
      </Section>
    </Card>
  ) : (
    <p>No Data</p>
  )
}
