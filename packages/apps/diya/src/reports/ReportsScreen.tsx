import {
  faBatteryFull,
  faChevronRight,
  faMoneyCheck,
  faSearch,
  faSitemap,
  faUserCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTitle,
  Icon,
  Input,
  Section,
  Text,
} from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../auth/AuthContext'
export const ReportsScreen = ({
  handleBatteryPerformance,
  handleTotalAnalysisReports,
  handleInvoicesReports,
  handleEvsAssignedReports,
  handleDriverDataReport,
  handleDriverTripReport,
  handleDriverBehaviourReport,
  handleBatteryDayWiseReport,
  handleBatteryStatusReport,
  handleDriverWiseTripReport,
  handleDayWiseTripReport,
  handleClientWiseTripReport,
}: any) => {
  const { setHeaderText } = useAuth()
  setHeaderText('Reports')
  return (
    <>
      <Section>
        <Card>
          <CardHeader>
            <CardHeaderTitle alignment="centered">
              <Input
                fullWidth={true}
                type="text"
                placeholder="search reports"
                rightIcon={faSearch}
              />
            </CardHeaderTitle>
          </CardHeader>
          <CardContent>
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification ">
                  <Text>
                    <Icon color="#209cee" icon={faSitemap} />
                    Trip Reports
                  </Text>
                  <br />
                  <Text color="info" onClick={handleDayWiseTripReport}>
                    <Icon color="black" icon={faChevronRight} />
                    Day wise trip Reports
                  </Text>
                  <br />
                  <Text color="info" onClick={handleClientWiseTripReport}>
                    <Icon color="black" icon={faChevronRight} />
                    Client wise trip Reports
                  </Text>
                  <br />
                  <Text color="info" onClick={handleDriverWiseTripReport}>
                    <Icon color="black" icon={faChevronRight} />
                    Driver wise trip Reports
                  </Text>
                </article>
                <article className="tile is-child notification ">
                  <Text>
                    <Icon color="#209cee" icon={faUsers} />
                    Client Reports
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleInvoicesReports}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Invoice Month, Year
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleEvsAssignedReports}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Vehicals Assigned
                  </Text>
                  <br />
                  <br />
                  <br />
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification ">
                  <Text>
                    <Icon color="#209cee" icon={faBatteryFull} />
                    Battery Reports
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleBatteryDayWiseReport}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Stock Report
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleBatteryStatusReport}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Batteries Charged, swapped by Day, Week, Month
                  </Text>
                  <br />
                  <Text
                    style={{ cursor: 'pointer' }}
                    onClick={handleBatteryPerformance}
                    color="info"
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Performance Reports
                  </Text>
                </article>
                <article className="tile is-child notification">
                  <Text>
                    <Icon color="#209cee" icon={faUserCircle} />
                    Driver Reports
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleDriverBehaviourReport}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Driver Behaviour - Speed Changes,Route Tracking, GEO
                    Fencing,Attendance Log
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleDriverDataReport}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Driver Data Details
                  </Text>
                  <br />
                  <Text
                    color="info"
                    style={{ cursor: 'pointer' }}
                    onClick={handleDriverTripReport}
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Driver trip Reports
                  </Text>
                </article>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent is-horizontal">
                <article className="tile is-child notification ">
                  <Text>
                    <Icon color="#209cee" icon={faMoneyCheck} />
                    Cost Analysis Reports Reports
                  </Text>
                  <br />
                  <Text
                    style={{ cursor: 'pointer' }}
                    onClick={handleTotalAnalysisReports}
                    color="info"
                  >
                    <Icon color="black" icon={faChevronRight} />
                    Total Analysis Reports
                  </Text>
                  <br />
                  <Text style={{ cursor: 'pointer' }} color="info">
                    <Icon color="black" icon={faChevronRight} />
                    Cost Analysis / EV
                  </Text>
                  <br />
                </article>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  )
}
