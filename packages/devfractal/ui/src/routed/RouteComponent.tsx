import { Router, SafeRoute as Route } from 'devfractal-router';
import { Column, Columns } from 'devfractal-ui-core';
import React from 'react';
import { MenuComponent } from './RoutedMenuExample';

export const ClientList:React.FC = () => (
   <h1>clients</h1>
)
export const VehicleList:React.FC = () => (
    <h1>vehicles</h1>
)

export const App:React.FC = () => (
    <Columns>
      <Column
        narrow
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MenuComponent />
      </Column>
      <Column>
        <>
          <Router variant="hash">
            <Route exact path="/" component={MenuComponent} />
            {/* <Route exact path="/clients" component={ClientList} />
            <Route exact path="/vehicles" component={VehicleList} /> */}
        </Router>
          </>
      </Column>
    </Columns>
  )
  