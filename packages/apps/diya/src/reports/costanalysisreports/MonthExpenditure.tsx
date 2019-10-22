import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTitle,
  Content,
  Select,
} from 'devfractal-ui-core'
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from 'victory'
export const MonthExpenditure: React.FC = () => {
  const yTickValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          Expenditure-January 2019{' '}
          <Select placeholder="select month">
            <option>January</option>
          </Select>
        </CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Content>
          <VictoryChart>
            <VictoryAxis
              tickFormat={x => (x === 3 ? 'January 2019' : '')}
              style={{
                tickLabels: { fontSize: 10, stroke: '#3084c4' },
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
            <VictoryGroup colorScale={['#71cce0']} domainPadding={{ x: 20 }}>
              <VictoryBar
                data={[
                  { x: 1, y: 33 },
                  { x: 2, y: 40 },
                  { x: 3, y: 22 },
                  { x: 4, y: 33 },
                  { x: 5, y: 40 },
                  { x: 6, y: 22 },
                ]}
                style={{ data: { width: 30 }, labels: { fontSize: 7 } }}
                labels={[
                  'Charging',
                  'Salary',
                  'Repair/Maintain',
                  'Deprication',
                  'OM Costs',
                  'Bonus',
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </Content>
      </CardContent>
    </Card>
  )
}
