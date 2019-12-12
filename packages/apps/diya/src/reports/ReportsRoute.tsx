import { History } from 'history'
import React from 'react'
import { Route, useHistory } from 'technoidentity-devfractal'
import { PerformanceReport } from './batteryreports/PerformanceReport'
import { TotalAnalysisReport } from './costanalysisreports/TotalAnalysisReport'
import { DriverDataReport } from './driverreports/DriverDataReports'
import { DriverTripReport } from './driverreports/DriverTripReports.'
import { ReportsScreen } from './ReportsScreen'

export const ReportsRoute = () => {
  const history: History = useHistory()
  const handleBatteryPerformance = () => {
    history.push('/reports/batteryperformance')
  }
  const handleTotalAnalysisReports = () => {
    history.push('/reports/totalanalysisreports')
  }

  const handleDriverDataReport = () => {
    history.push('/reports/driverDataReport')
  }
  const handleDriverTripReport = () => {
    history.push('/reports/driverTripReport')
  }

  const handleDriverBehaviourReport = () => {
    history.push('/reports/driverBehaviourReport')
  }
  return (
    <>
      <Route
        path="/reports"
        render={() => (
          <ReportsScreen
            handleBatteryPerformance={handleBatteryPerformance}
            handleTotalAnalysisReports={handleTotalAnalysisReports}
            handleDriverDataReport={handleDriverDataReport}
            handleDriverTripReport={handleDriverTripReport}
            handleDriverBehaviourReport={handleDriverBehaviourReport}
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
      <Route
        path="/reports/driverDataReport"
        render={() => <DriverDataReport />}
      />
      <Route
        path="/reports/driverTripReport"
        render={() => <DriverTripReport />}
      />
    </>
  )
}
