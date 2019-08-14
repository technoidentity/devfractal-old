// tslint:disable no-console
import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Image,
  Router,
  SafeRoute as Route,
  Section,
} from 'technoidentity-devfractal'
import { range } from 'technoidentity-utils'
import diyaLogo from './images/diyaLogo.png'
import {
  BatteryRoute,
  ClientRoute,
  DriverRoute,
  EditBatteryRoute,
  EditClientRoute,
  EditDriverRoute,
  EditUserRoute,
  EditVehicleRoute,
  EmployeeRoute,
  GeoFenceRoute,
  RaiseRequestRoute,
  UserRoute,
  VehicleRoute,
} from './pages'
import {
  ActionsRoutes,
  BatteryList,
  ClientList,
  DriverList,
  EmployeeList,
  EmployeeListTable,
  GeoFenceList,
  InvoiceList,
  MenuComponent,
  MenuComponentRoute,
  PlanRouteMap,
  UserList,
  VehicleList,
} from './views'
import { EmployeeForm } from './views/EmployeeForm'
import { EVsAssigned } from './views/EVsAssigned'

// tslint:disable-next-line: no-console no-void-expression

export const SideMenu = () => (
  <Column
    narrow
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Section>
      <Image src={diyaLogo} alt="diyaImage" size="96x96" />
    </Section>
    <MenuComponentRoute />
  </Column>
)

export const App = () => (
  <Router variant="browser">
    <Columns>
      <Route exact={false} path="/" component={SideMenu} />
      <Column>
        <Route path="/" component={DriverList} />
        <Route path="/clients" component={ClientList} />
        <Route path="/clients/add" component={ClientRoute} />
        <Route path="/clients/:id/edit" component={EditClientRoute} />
        <Route path="/users" component={UserList} />
        <Route path="/users/add" component={UserRoute} />
        <Route path="/users/:id/edit" component={EditUserRoute} />
        <Route path="/geofence" component={GeoFenceList} />
        <Route path="/geofence/add" component={GeoFenceRoute} />
        <Route path="/vehicles" component={VehicleList} />
        <Route path="/vehicles/add" component={VehicleRoute} />
        <Route path="/vehicles/:id/edit" component={EditVehicleRoute} />
        <Route path="/batteries" component={BatteryList} />
        <Route path="/batteries/add" component={BatteryRoute} />
        <Route path="/batteries/:id/edit" component={EditBatteryRoute} />
        <Route path="/drivers" component={DriverList} />
        <Route path="/drivers/add" component={DriverRoute} />
        <Route path="/drivers/:id/edit" component={EditDriverRoute} />
      </Column>
    </Columns>
  </Router>
)

// export const App = () => (
//   <Router variant="browser">
//     <Columns>
//       <Route exact={false} path="/" component={SideMenu} />
//       <Column>
//         <Route path="/" component={EmployeeList} />
//         <Route path="/evs" component={EVsAssigned} />
//         <Route path="/evs/add" component={RaiseRequestRoute} />
//         <Route path="/invoices" component={InvoiceList} />
//         <Route path="/planRoute" component={PlanRouteMap} />
//         <Route path="/employees/add" component={EmployeeRoute} />
//       </Column>
//     </Columns>
//   </Router>
// )
