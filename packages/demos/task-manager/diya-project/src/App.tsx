// tslint:disable no-console
import 'bulma/css/bulma.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Column, Columns, Image, Section } from 'technoidentity-devfractal'
import diyaLogo from '../src/images/diyaLogo.png'
import { CreateDriverRoute } from './pages'
import {
  AddVehicleForm,
  BatteryList,
  CreateBatteryForm,
  DriverList,
  MenuComponent,
  VehicleList,
} from './views'

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
        <BrowserRouter>
          <Route exact path="/vehicles" component={VehicleList} />
          <Route exact path="/vehicles/add" component={AddVehicleForm} />
          <Route exact path="/batteries" component={BatteryList} />
          <Route exact path="/batteries/add" component={CreateBatteryForm} />
          <Route exact path="/drivers" component={DriverList} />
          <Route exact path="/drivers/add" component={CreateDriverRoute} />
        </BrowserRouter>
      </>
    </Column>
  </Columns>
)
