// tslint:disable no-console
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Column, Columns, Router, Section } from 'technoidentity-devfractal'
import { BatteryList } from './views/BatteryList'
import { CreateBatteryForm } from './views/CreateBattryForm'
import { CreateDriverForm } from './views/CreateDriverForm'
import { CreateVehicleForm } from './views/CreateVehicleForm'
import { DriverList } from './views/DriverList'
import { MenuComponent } from './views/MenuComponent'
import { VehicleList } from './views/VehicleList'
// tslint:disable-next-line: no-console
// tslint:disable-next-line: no-void-expression

export const App = () => (
  <Columns>
    <Column narrow>
      <MenuComponent />
    </Column>
    <Column>
      <Section>
        <BrowserRouter>
          <Route exact path="/vehicles" component={VehicleList} />
          <Route exact path="/vehicles/add" component={CreateVehicleForm} />
          <Route exact path="/batteries" component={BatteryList} />
          <Route exact path="/batteries/add" component={CreateBatteryForm} />
          <Route exact path="/drivers" component={DriverList} />
          <Route exact path="/drivers/add" component={CreateDriverForm} />
        </BrowserRouter>
      </Section>
    </Column>
  </Columns>
)
