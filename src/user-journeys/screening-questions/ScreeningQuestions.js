import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import ConfirmPostcode from './ConfirmPostcode'
import HeatNetworkName from './HeatNetworkName'
import HNLookup from './HNLookup'
import StartPage from './StartPage'

const ScreeningQuestions = ({ heatNetworkId, setHeatNetworkId, heatNetworkInfo, setHeatNetworkInfo, registeredWithOPSS, setRegisteredWithOPSS }) => {
  return (
        <div>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/heat-network-name" element={<HeatNetworkName />} />
            <Route path="/hn-lookup" element={<HNLookup heatNetworkId={heatNetworkId} setHeatNetworkId={setHeatNetworkId} heatNetworkInfo={heatNetworkInfo} setHeatNetworkInfo={setHeatNetworkInfo} registeredWithOPSS={registeredWithOPSS} setRegisteredWithOPSS={setRegisteredWithOPSS}/>} />
            <Route path="/confirm-postcode" element={<ConfirmPostcode heatNetworkInfo={heatNetworkInfo}/>} />
          </Routes>

        </div>
  )
}

export default ScreeningQuestions
