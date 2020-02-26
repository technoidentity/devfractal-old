import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import { APIComponents, SafeRoute, SafeRouter } from 'technoidentity-core'
import 'typeface-roboto'
import { MuiComponents } from './APIComponents'
import { SimpleTable } from './SimpleTable'

const users: any = [
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
  {
    userInfo: 'Demo User',
    supervisor: 'ken adams',
    userGroups: 'DataIntegrity',
    applicationAccess: 'full',
  },
]

// const groups: any = [
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
//   {
//     groupInfo: 'Demo User',
//     owner: 'ken adams',
//     noOfUser: 'DataIntegrity',
//     noOfApplications: 'full',
//   },
// ]

// const modules: any = [
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
//   {
//     moduleName: 'Calender Management',
//     noOfUserGroups: 'DataIntegrity',
//     noOfUser: 'full',
//   },
// ]

// const groupPreferences: any = [
//   'PMM Group',
//   'Tech Group',
//   'Demo Group',
//   'Test Group',
//   'Dev Group',
//   'Client Group',
//   'Server Group',
// ]

const SimpleTableExample: React.FC = () => {
  return <SimpleTable data={users} />
}

const CheckingComponents: React.FC = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <APIComponents.Provider value={MuiComponents}>
      <SimpleTableExample />
    </APIComponents.Provider>
  </MuiPickersUtilsProvider>
)

const App: React.FC = () => {
  return (
    <SafeRouter variant="browser">
      <SafeRoute path="/" component={CheckingComponents} />
      {/* <SafeRoute path="/userGroup" component={CheckingComponents} /> */}
    </SafeRouter>
  )
}

render(<App />, document.getElementById('root'))
