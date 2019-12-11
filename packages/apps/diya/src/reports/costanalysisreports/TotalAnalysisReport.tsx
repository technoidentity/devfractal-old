import { Column, Columns, Section } from 'devfractal-ui-core'
import React from 'react'
// import { HeadTitle } from '../../components'
import { MonthExpenditure } from './MonthExpenditure'
import { TotalExpenditure } from './TotalExpenditure'
export const TotalAnalysisReport: React.FC = () => {
  return (
    <>
      {/* <HeadTitle> Cost Analysis Report > Total Analysis Report</HeadTitle> */}
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
