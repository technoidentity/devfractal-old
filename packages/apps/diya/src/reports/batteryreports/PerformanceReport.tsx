import {
  Box,
  Card,
  CardContent,
  Column,
  Columns,
  Content,
  Input,
  Section,
  Select,
} from 'devfractal-ui-core'

import React from 'react'
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
} from 'victory'
import { useAuth } from '../../auth/AuthContext'
export const PerformanceReport = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Battery Reports > Performance')

  return (
    <>
      <Section>
        <Card>
          <Box>
            <Columns>
              <Column>Battery Id - 4546</Column>
              <Column textAlignment="right">
                <Select
                  style={{ border: 'none', backgroundColor: '#f3f3f3' }}
                  noControl
                >
                  <option>Battery Id</option>
                </Select>
              </Column>
              <Column>
                <Input
                  style={{
                    border: 'none',
                    backgroundColor: '#f3f3f3',
                  }}
                  noControl
                  type="date"
                  onChange={e => {
                    console.log(e)
                  }}
                />
              </Column>
            </Columns>
          </Box>

          <CardContent>
            <Content>
              <VictoryChart domain={{ x: [1, 60] }} height={170}>
                <VictoryAxis
                  tickValues={[
                    0,
                    5,
                    10,
                    15,
                    20,
                    25,
                    30,
                    35,
                    40,
                    45,
                    50,
                    55,
                    60,
                  ]}
                  style={{
                    tickLabels: { fontSize: 5 },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                  style={{
                    grid: { strokeWidth: 1, stroke: 'grey' },
                    tickLabels: {
                      fontSize: 5,
                    },
                  }}
                />
                <VictoryGroup
                  data={[
                    { x: 1, y: 10 },
                    { x: 13, y: 30 },
                    { x: 20, y: 25 },
                    { x: 45, y: 40 },
                    { x: 55, y: 57 },
                  ]}
                  color="#60ba46"
                >
                  <VictoryLine style={{ data: { strokeWidth: 1 } }} />
                  <VictoryScatter size={2} symbol="circle" />
                </VictoryGroup>
              </VictoryChart>
            </Content>
          </CardContent>
        </Card>
      </Section>
    </>
  )
}
