import { History } from 'history'
import React from 'react'
import { Route, useHistory } from 'technoidentity-devfractal'
import { PerformanceReport } from './batteryreports/PerformanceReport'
import { TotalAnalysisReport } from './costanalysisreports/TotalAnalysisReport'
import { ReportsScreen } from './ReportsScreen'

export const ReportsRoute = () => {
  const history: History = useHistory()
  const handleBatteryPerformance = () => {
    history.push('/reports/batteryperformance')
  }
  const handleTotalAnalysisReports = () => {
    history.push('/reports/totalanalysisreports')
  }
  return (
    <>
      <Route
        path="/reports"
        render={() => (
          <ReportsScreen
            handleBatteryPerformance={handleBatteryPerformance}
            handleTotalAnalysisReports={handleTotalAnalysisReports}
          />
        )}
      />
      <Route
        path="/reports/batteryperformance"
        render={() => <PerformanceReport />}
      />
      <Route
        path="/reports/totalanalysisreports"
        render={() => <TotalAnalysisReport />}
      />
    </>
  )
}
