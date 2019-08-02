// tslint:disable no-console
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Column, Columns, Section } from 'technoidentity-devfractal'
import {
  BatteryList,
  CreateBatteryForm,
  CreateDriverForm,
  CreateVehicleForm,
  DriverList,
  MenuComponent,
  VehicleList,
} from './views'

// tslint:disable-next-line: no-console no-void-expression

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
