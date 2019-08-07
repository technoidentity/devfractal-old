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
  SimpleRedirect,
} from 'technoidentity-devfractal'
import diyaLogo from './images/diyaLogo.png'
import {
  CreateBatteryRoute,
  CreateDriverRoute,
  CreateVehicleRoute,
  EditBatteryRoute,
  EditDriverRoute,
  EditVehicleRoute,
} from './pages'
import { BatteryList, DriverList, MenuComponent, VehicleList } from './views'

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
