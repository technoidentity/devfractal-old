import { CardHeader, CardHeaderTitle, Section, Text } from 'devfractal-ui-core'
import React from 'react'
import { MonthExpenditure } from './MonthExpenditure'
import { TotalExpenditure } from './TotalExpenditure'
export const TotalAnalysisReport: React.FC = () => {
  return (
    <div>
      <CardHeader>
        <CardHeaderTitle textBackgroundColor="primary">
          <Text color="white">
            Cost Analysis Report > Total Analysis Report{' '}
          </Text>
        </CardHeaderTitle>
      </CardHeader>
      <Section>
        <TotalExpenditure />
        <br />
        <br />
        <MonthExpenditure />
      </Section>
    </div>
  )
}
