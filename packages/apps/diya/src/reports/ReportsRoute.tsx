import { History } from 'history'
import React from 'react'
import { Route, useHistory } from 'technoidentity-devfractal'
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
import { ClientWiseTripReport } from './tripreports/ClientWiseTripReport'
import { DayWiseTripReport } from './tripreports/DayWiseTripReport'
import { DriverWiseTripReport } from './tripreports/DriverWiseTripReport'

export const ReportsRoute = () => {
  const history: History = useHistory()
  const handleBatteryPerformance = () => {
    history.push('/reports/batteryPerformance')
  }
  const handleTotalAnalysisReports = () => {
    history.push('/reports/totalAnalysisReport')
  }

  const handleInvoicesReports = () => {
    history.push('/reports/invoicesReport')
  }
  const handleEvsAssignedReports = () => {
    history.push('/reports/assignedEvsReport')
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

  const handleBatteryDayWiseReport = () => {
    history.push('/reports/batteryDayWiseReport')
  }

  const handleBatteryStatusReport = () => {
    history.push('/reports/batteryStatusReport')
  }

  const handleClientWiseTripReport = () => {
    history.push('/reports/clientWiseTripReport')
  }

  const handleDayWiseTripReport = () => {
    history.push('/reports/dayWiseTripReport')
  }

  const handleDriverWiseTripReport = () => {
    history.push('/reports/driverWiseTripReport')
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
            handleClientWiseTripReport={handleClientWiseTripReport}
            handleDayWiseTripReport={handleDayWiseTripReport}
            handleDriverWiseTripReport={handleDriverWiseTripReport}
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
      <Route
        path="/reports/clientWiseTripReport"
        render={() => <ClientWiseTripReport />}
      />
      <Route
        path="/reports/dayWiseTripReport"
        render={() => <DayWiseTripReport />}
      />
      <Route
        path="/reports/driverWiseTripReport"
        render={() => <DriverWiseTripReport />}
      />
    </>
  )
}
