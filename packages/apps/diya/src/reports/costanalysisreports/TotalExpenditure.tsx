import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTitle,
  Content,
} from 'devfractal-ui-core'
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from 'victory'
export const TotalExpenditure: React.FC = () => {
  const yTickValues = [
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
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
  ]
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          <span>Total Expenditure 27,35,840.00 income Expenditure</span>
        </CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Content>
          <VictoryChart domainPadding={{ x: 20 }}>
            <VictoryAxis
              style={{
                tickLabels: { fontSize: 5 },
                grid: { strokeWidth: 1 },
              }}
            />
            <VictoryAxis
              dependentAxis
              tickValues={yTickValues}
              style={{
                grid: { strokeWidth: 1, stroke: 'grey' },
                tickLabels: {
                  fontSize: 5,
                },
              }}
            />
            <VictoryGroup
              offset={10}
              colorScale={['#71cce0', '#f58e6f']}
              style={{ data: { width: 10 } }}
            >
              <VictoryBar
                data={[
                  { x: 'Jan', y: 24 },
                  { x: 'Feb', y: 10 },
                  { x: 'March', y: 70 },
                  { x: 'April', y: 24 },
                  { x: 'May', y: 10 },
                  { x: 'June', y: 70 },
                  { x: 'July', y: 24 },
                  { x: 'Aug', y: 10 },
                  { x: 'Sep', y: 70 },
                  { x: 'Oct', y: 24 },
                  { x: 'Nov', y: 10 },
                  { x: 'Dec', y: 70 },
                ]}
              />
              <VictoryBar
                data={[
                  { x: 'Jan', y: 24 },
                  { x: 'Feb', y: 10 },
                  { x: 'March', y: 70 },
                  { x: 'April', y: 24 },
                  { x: 'May', y: 10 },
                  { x: 'June', y: 70 },
                  { x: 'July', y: 24 },
                  { x: 'Aug', y: 10 },
                  { x: 'Sep', y: 70 },
                  { x: 'Oct', y: 24 },
                  { x: 'Nov', y: 10 },
                  { x: 'Dec', y: 70 },
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </Content>
      </CardContent>
    </Card>
  )
}
