import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import OfgemHeader from './pages/OfgemHeader'
import Sections from './sections'
import Pages from './pages/Pages'
import UserJourneys from './user-journeys/UserJourneys.js'
import StartPage from './user-journeys/screening-questions/StartPage'

function App () {
  return (
    <BrowserRouter>
      <GovUK.Page.WidthContainer>
      <OfgemHeader />
      <GovUK.GridRow>
        <GovUK.GridCol setWidth="three-quarters">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/pages/*" element={<Pages />} />
          <Route path="/user-journeys/*" element={<UserJourneys />} />
        </Routes>
        </GovUK.GridCol>
        <GovUK.GridCol setWidth="one-quarter">
            <Sections />
        </GovUK.GridCol>
      </GovUK.GridRow>
      </GovUK.Page.WidthContainer>
      <GovUK.Footer/>
    </BrowserRouter>
  )
}

export default App
