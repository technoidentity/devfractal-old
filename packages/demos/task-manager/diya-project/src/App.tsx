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
  CreateBatteryRoute,
  CreateClientRoute,
  CreateDriverRoute,
  CreateEmployeeRoute,
  CreateGeofenceRoute,
  CreateRaiseRequestRoute,
  CreateUserRoute,
  CreateVehicleRoute,
  EditBatteryRoute,
  EditClientRoute,
  EditDriverRoute,
  EditUserRoute,
  EditVehicleRoute,
} from './pages'
import {
  ActionsRoutes,
  BatteryList,
  ClientList,
  DriverList,
  EmployeeList,
  EmployeeListTable,
  GeofenceList,
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
    <MenuComponent />
  </Column>
)

export const App = () => (
  <Router variant="browser">
    <Columns>
      <Route exact={false} path="/" component={SideMenu} />
      <Column>
        <Route path="/" component={DriverList} />
        <Route path="/clients" component={ClientList} />
        <Route path="/clients/add" component={CreateClientRoute} />
        <Route path="/clients/:id/edit" component={EditClientRoute} />
        <Route path="/users" component={UserList} />
        <Route path="/users/add" component={CreateUserRoute} />
        <Route path="/users/:id/edit" component={EditUserRoute} />
        <Route path="/geofence" component={GeofenceList} />
        <Route path="/geofence/add" component={CreateGeofenceRoute} />
        <Route path="/vehicles" component={VehicleList} />
        <Route path="/vehicles/add" component={CreateVehicleRoute} />
        <Route path="/vehicles/:id/edit" component={EditVehicleRoute} />
        <Route path="/batteries" component={BatteryList} />
        <Route path="/batteries/add" component={CreateBatteryRoute} />
        <Route path="/batteries/:id/edit" component={EditBatteryRoute} />
        <Route path="/drivers" component={DriverList} />
        <Route path="/drivers/add" component={CreateDriverRoute} />
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
//         <Route path="/evs" component={EVsAssigned} />
//         <Route path="/evs/add" component={CreateRaiseRequestRoute} />
//         <Route path="/invoices" component={InvoiceList} />
//         <Route path="/planRoute" component={PlanRouteMap} />
//         <Route path="/employees" component={EmployeeList} />
//         <Route path="/employees/add" component={CreateEmployeeRoute} />
//       </Column>
//     </Columns>
//   </Router>
// )
