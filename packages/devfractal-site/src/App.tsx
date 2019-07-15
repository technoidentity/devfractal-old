import React from 'react'
import { HashRouter } from 'react-router-dom'
import { IndexPage } from './IndexPage'

// export const App: React.FC = () => (
//   <HashRouter>
//     <ScrollToTop>
//       <Routes />
//     </ScrollToTop>
//   </HashRouter>
// )

export const App: React.FC = () => (
  <HashRouter>
    <IndexPage />
  </HashRouter>
)
