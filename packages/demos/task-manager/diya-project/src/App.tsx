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
import diyaLogo from './images/diyaLogo.png'
import {
  CreateBatteryRoute,
  CreateClientRoute,
  CreateDriverRoute,
  CreateUserRoute,
  CreateVehicleRoute,
  EditBatteryRoute,
  EditClientRoute,
  EditDriverRoute,
  EditUserRoute,
  EditVehicleRoute,
} from './pages'
import {
  BatteryList,
  ClientList,
  DriverList,
  MenuComponent,
  UserList,
  VehicleList,
} from './views'

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
