import { History } from 'history'
import React from 'react'
import { Route, useHistory } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { PerformanceReport } from './batteryreports/PerformanceReport'
import { BatteryStatusReport } from './batteryreports/StatusReport'
import { BatteryDayWiseReport } from './batteryreports/StockReport'
import { AssignedEVsReport } from './clientreports/AssignedEVsReport'
import { InvoicesReport } from './clientreports/InvoicesReport'
import { TotalAnalysisReport } from './costanalysisreports/TotalAnalysisReport'
import { DriverBehaviourReport } from './driverreports/DriverBehaviourReport'
import { DriverDataReport } from './driverreports/DriverDataReports'
import { DriverTripReport } from './driverreports/DriverTripReports.'
import { ReportsScreen } from './ReportsScreen'

export const ReportsRoute = () => {
  const { setHeaderText } = useAuth()
  const history: History = useHistory()
  const handleBatteryPerformance = () => {
    setHeaderText('Battery Reports > Performance')
    history.push('/reports/batteryPerformance')
  }
  const handleTotalAnalysisReports = () => {
    setHeaderText('Cost Analysis Report > Total Analysis Report')
    history.push('/reports/totalAnalysisReport')
  }

  const handleInvoicesReports = () => {
    setHeaderText('Client Reports > Invoices Report')
    history.push('/reports/invoicesReport')
  }
  const handleEvsAssignedReports = () => {
    setHeaderText('Client Reports > Assigned EVs Report')
    history.push('/reports/assignedEvsReport')
  }

  const handleDriverDataReport = () => {
    setHeaderText('Driver Reports > Data Report')
    history.push('/reports/driverDataReport')
  }
  const handleDriverTripReport = () => {
    setHeaderText('Driver Reports > Trip Report')
    history.push('/reports/driverTripReport')
  }

  const handleDriverBehaviourReport = () => {
    setHeaderText('Driver Reports > Behaviour Report')
    history.push('/reports/driverBehaviourReport')
  }

  const handleBatteryDayWiseReport = () => {
    setHeaderText('Battery Reports > Day wise Report')
    history.push('/reports/batteryDayWiseReport')
  }

  const handleBatteryStatusReport = () => {
    setHeaderText('Battery Reports > Status Report')
    history.push('/reports/batteryStatusReport')
  }

  return (
    <>
      <Route
        path="/reports"
        render={() => (
          <ReportsScreen
            handleBatteryPerformance={handleBatteryPerformance}
            handleTotalAnalysisReports={handleTotalAnalysisReports}
            handleInvoicesReports={handleInvoicesReports}
            handleEvsAssignedReports={handleEvsAssignedReports}
            handleDriverDataReport={handleDriverDataReport}
            handleDriverTripReport={handleDriverTripReport}
            handleDriverBehaviourReport={handleDriverBehaviourReport}
            handleBatteryDayWiseReport={handleBatteryDayWiseReport}
            handleBatteryStatusReport={handleBatteryStatusReport}
          />
        )}
      />
      <Route
        path="/reports/batteryPerformance"
        render={() => <PerformanceReport />}
      />
      <Route
        path="/reports/batteryDayWiseReport"
        render={() => <BatteryDayWiseReport />}
      />
      <Route
        path="/reports/batteryStatusReport"
        render={() => <BatteryStatusReport />}
      />
      <Route
        path="/reports/totalAnalysisReport"
        render={() => <TotalAnalysisReport />}
      />
      <Route path="/reports/invoicesReport" render={() => <InvoicesReport />} />
      <Route
        path="/reports/assignedEvsReport"
        render={() => <AssignedEVsReport />}
      />
      <Route
        path="/reports/driverDataReport"
        render={() => <DriverDataReport />}
      />
      <Route
        path="/reports/driverTripReport"
        render={() => <DriverTripReport />}
      />
      <Route
        path="/reports/driverBehaviourReport"
        render={() => <DriverBehaviourReport />}
      />
    </>
  )
}
