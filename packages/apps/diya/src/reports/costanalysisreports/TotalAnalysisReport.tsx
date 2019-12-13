import { Column, Columns, Section } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { MonthExpenditure } from './MonthExpenditure'
import { TotalExpenditure } from './TotalExpenditure'
export const TotalAnalysisReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Cost Analysis Report > Total Analysis Report')
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
