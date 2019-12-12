import { Column, Columns, Section } from 'devfractal-ui-core'
import React from 'react'
import { MonthExpenditure } from './MonthExpenditure'
import { TotalExpenditure } from './TotalExpenditure'
export const TotalAnalysisReport: React.FC = () => {
  return (
    <>
      <Section>
        <Columns>
          <Column>
            <TotalExpenditure />
          </Column>
          <Column>
            <MonthExpenditure />
          </Column>
        </Columns>
      </Section>
    </>
  )
}
