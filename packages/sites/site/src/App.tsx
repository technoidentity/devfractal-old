import React from 'react'
import { SafeRouter } from 'srtp-core'
import { SiteHeader } from './IndexPage'
import { MainRoute } from './MainRoute'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <SafeRouter variant="hash">
    <ScrollToTop>
      <SiteHeader />
      <MainRoute />
    </ScrollToTop>
  </SafeRouter>
)
