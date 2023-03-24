import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import ScreeningQuestions from './screening-questions/ScreeningQuestions'
import Location from './location/Location'
import Characteristics from './characteristics/Characteristics'
import HNRegistrationSummary from './HNRegistrationSummary'

const UserJourneys = () => {
  const [heatNetworkId, setHeatNetworkId] = useState('')
  const [heatNetworkInfo, setHeatNetworkInfo] = useState('')
  const [registeredWithOPSS, setRegisteredWithOPSS] = useState('')
  const [locationFormsComplete, setLocationFormsComplete] = useState(false)
  const [nearestPostcode, setNearestPostcode] = useState('')
  const [manualAddressEntry, setManualAddressEntry] = useState([])
  const [results, setResults] = useState([])

  return (
        <div>
            <Routes>
                <Route path="/screening-questions/*" element={<ScreeningQuestions heatNetworkId={heatNetworkId} setHeatNetworkId={setHeatNetworkId} heatNetworkInfo={heatNetworkInfo} setHeatNetworkInfo={setHeatNetworkInfo} registeredWithOPSS={registeredWithOPSS} setRegisteredWithOPSS={setRegisteredWithOPSS} />} />
                <Route path="/location/*" element={<Location results={results} setResults={setResults} manualAddressEntry={manualAddressEntry} setManualAddressEntry={setManualAddressEntry} nearestPostcode={nearestPostcode} setNearestPostcode={setNearestPostcode} locationFormsComplete={locationFormsComplete} setLocationFormsComplete={setLocationFormsComplete} heatNetworkInfo={heatNetworkInfo} setHeatNetworkInfo={setHeatNetworkInfo} registeredWithOPSS={registeredWithOPSS} setRegisteredWithOPSS={setRegisteredWithOPSS} />} />
                <Route path="/characteristics/*" element={<Characteristics /> } />
                <Route path="/registration-summary" element={<HNRegistrationSummary locationFormsComplete={locationFormsComplete} setLocationFormsComplete={setLocationFormsComplete} registeredWithOPSS={registeredWithOPSS} />} />
            </Routes>

        </div>
  )
}

export default UserJourneys
