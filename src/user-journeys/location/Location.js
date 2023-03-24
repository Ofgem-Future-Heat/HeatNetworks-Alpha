import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import ConfirmEnergyCentreAddress from './ConfirmEnergyCentreAddress'
import SpecificAddress from './SpecificAddress'
import CheckLocationAnswers from './CheckLocationAnswers'
import ScotlandCheck from './ScotlandCheck'
import ConfirmLocation from './ConfirmLocation'
import ConfirmLocationResult from './ConfirmLocationResult'
import EnterEnergyCentreAddress from './EnterEnergyCentreAddress'
import NearestPostcode from './NearestPostcode'

const Location = ({ results, setResults, manualAddressEntry, setManualAddressEntry, nearestPostcode, setNearestPostcode, locationFormsComplete, setLocationFormsComplete, heatNetworkInfo, setHeatNetworkInfo }) => {
  const [operateInScotland, setOperateInScotland] = useState('')
  const [specificAddress, setSpecificAddress] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [townOrCity, setTownOrCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [addressSelection, setAddressSelection] = useState([])
  const [postcodeForOSSearch, setPostcodeForOSSearch] = useState('')
  const [changeOperateInScotland, setChangeOperateInScotland] = useState(false)
  return (
        <div>
            <Routes>
                <Route path="/confirm-location" element={<ConfirmLocation results={results} setResults={setResults} postcodeForOSSearch={postcodeForOSSearch} setPostcodeForOSSearch={setPostcodeForOSSearch}/>} />
                <Route path="/nearest-postcode" element={<NearestPostcode setManualAddressEntry={setManualAddressEntry} setHeatNetworkInfo={setHeatNetworkInfo} nearestPostcode={nearestPostcode} setNearestPostcode={setNearestPostcode}/>} />
                <Route path="/confirm-location-result" element={<ConfirmLocationResult results={results} setResults={setResults} addressSelection={addressSelection} setAddressSelection={setAddressSelection} setHeatNetworkInfo={setHeatNetworkInfo} postcodeForOSSearch={postcodeForOSSearch}/>} />
                <Route path="/scotland-check" element={<ScotlandCheck changeOperateInScotland={changeOperateInScotland} setChangeOperateInScotland={setChangeOperateInScotland} operateInScotland={operateInScotland} setOperateInScotland={setOperateInScotland}/>} />
                <Route path="/specific-address" element={<SpecificAddress specificAddress={specificAddress} setSpecificAddress={setSpecificAddress}/>} />
                <Route path="/check-location-answers" element={<CheckLocationAnswers setLocationFormsComplete={setLocationFormsComplete} setChangeOperateInScotland={setChangeOperateInScotland} operateInScotland={operateInScotland} specificAddress={specificAddress} heatNetworkInfo={heatNetworkInfo} nearestPostcode={nearestPostcode} addressSelection={addressSelection} manualAddressEntry={manualAddressEntry}/>} />
                <Route path="/confirm-energy-centre-address" element={<ConfirmEnergyCentreAddress heatNetworkInfo={heatNetworkInfo} setHeatNetworkInfo={setHeatNetworkInfo}/>} />
                <Route path="/enter-energy-centre-address" element={<EnterEnergyCentreAddress setHeatNetworkInfo={setHeatNetworkInfo} setNearestPostcode={setNearestPostcode} setManualAddressEntry={setManualAddressEntry} addressLine1={addressLine1} setAddressLine1={setAddressLine1} townOrCity={townOrCity} setTownOrCity={setTownOrCity} postcode={postcode} setPostcode={setPostcode} />} />
            </Routes>

        </div>
  )
}

export default Location
