import React from 'react'
import { SafeRouter } from 'technoidentity-core'
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
