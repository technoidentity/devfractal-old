import { faCircle } from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Card,
  CardContent,
  Column,
  Columns,
  Content,
  Icon,
} from 'devfractal-ui-core'
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from 'victory'
export const TotalExpenditure: React.FC = () => {
  const yTickValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
  return (
    <Card>
      <Box>
        <Columns>
          <Column>Total Expenditure 27,35,840.00</Column>
          <Column textAlignment="right">
            <Icon icon={faCircle} color="#71cce0" size="sm" />
            income
            <Icon icon={faCircle} color="#f58e6f" size="sm" /> Expenditure
          </Column>
        </Columns>
      </Box>
      <CardContent>
        <Content>
          <VictoryChart domainPadding={{ x: 20 }}>
            <VictoryAxis
              style={{
                tickLabels: { fontSize: 7 },
                grid: { strokeWidth: 1 },
              }}
            />
            <VictoryAxis
              dependentAxis
              tickValues={yTickValues}
              style={{
                grid: { strokeWidth: 1, stroke: 'grey' },
                tickLabels: {
                  fontSize: 7,
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
                  { x: 'March', y: 45 },
                  { x: 'April', y: 24 },
                  { x: 'May', y: 10 },
                  { x: 'June', y: 45 },
                  { x: 'July', y: 24 },
                  { x: 'Aug', y: 10 },
                  { x: 'Sep', y: 45 },
                  { x: 'Oct', y: 24 },
                  { x: 'Nov', y: 10 },
                  { x: 'Dec', y: 45 },
                ]}
              />
              <VictoryBar
                data={[
                  { x: 'Jan', y: 24 },
                  { x: 'Feb', y: 10 },
                  { x: 'March', y: 45 },
                  { x: 'April', y: 24 },
                  { x: 'May', y: 10 },
                  { x: 'June', y: 45 },
                  { x: 'July', y: 24 },
                  { x: 'Aug', y: 10 },
                  { x: 'Sep', y: 45 },
                  { x: 'Oct', y: 24 },
                  { x: 'Nov', y: 10 },
                  { x: 'Dec', y: 45 },
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </Content>
      </CardContent>
    </Card>
  )
}
