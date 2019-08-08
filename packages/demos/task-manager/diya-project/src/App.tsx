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
  EditDriverRoute,
  EditUserRoute,
  EditVehicleRoute,
} from './pages'
import {
  BatteryList,
  DriverList,
  MenuComponent,
  UserList,
  VehicleList,
} from './views'
import { ClientList } from './views/ClientList'

// tslint:disable-next-line: no-console no-void-expression

export const App = () => (
  <Columns>
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
    <Column>
      <>
        <Router variant="browser">
          <Route exact path="/" component={DriverList} />
          <Route exact path="/clients" component={ClientList} />
          <Route exact path="/clients/add" component={CreateClientRoute} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/add" component={CreateUserRoute} />
          <Route exact path="/users/:id/edit" component={EditUserRoute} />
          <Route exact path="/vehicles" component={VehicleList} />
          <Route exact path="/vehicles/add" component={CreateVehicleRoute} />
          <Route exact path="/vehicles/:id/edit" component={EditVehicleRoute} />
          <Route exact path="/batteries" component={BatteryList} />
          <Route exact path="/batteries/add" component={CreateBatteryRoute} />
          <Route
            exact
            path="/batteries/:id/edit"
            component={EditBatteryRoute}
          />
          <Route exact path="/drivers" component={DriverList} />
          <Route exact path="/drivers/add" component={CreateDriverRoute} />
          <Route exact path="/drivers/:id/edit" component={EditDriverRoute} />
        </Router>
      </>
    </Column>
  </Columns>
)
