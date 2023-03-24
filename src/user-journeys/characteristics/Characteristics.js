import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import HeatNetworkProvide from './HeatNetworkProvide'
import HeatNetworkFuel from './HeatNetworkFuel'
import HeatingHotWaterCapacity from './HeatingHotWaterCapacity'
import PrimarySource from './PrimarySource'
import CoolingCapacity from './CoolingCapacity'
import SecondarySource from './SecondarySource'
import TertiarySource from './TertiarySource'
import CheckAnswersCharacteristics from './CheckAnswersCharacteristics'

const Characteristics = () => {
  const [characteristicsAnswers, setCharacteristicsAnswers] = useState({
    heatNetworkProvide: '',
    heatingHotWaterCapacity: '',
    coolingCapacity: '',
    primarySource: '',
    secondarySource: '',
    tertiarySource: '',
    heatNetworkFuel: ''
  })

  return (
    <div>
      <Routes>
        <Route path="/heat-network-provide" element={<HeatNetworkProvide characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers} />} />
        <Route path="/heat-network-fuel" element={<HeatNetworkFuel characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers} />} />
        <Route path="/heating-hot-water-capacity" element={<HeatingHotWaterCapacity characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers}/>} />
        <Route path="/primary-source" element={<PrimarySource characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers} />} />
        <Route path="/secondary-source" element={<SecondarySource characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers} />} />
        <Route path="/tertiary-source" element={<TertiarySource characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers} />} />
        <Route path="/cooling-capacity" element={<CoolingCapacity characteristicsAnswers={characteristicsAnswers} setCharacteristicsAnswers={setCharacteristicsAnswers}/>} />
        <Route path="/check-answers-characteristics" element={<CheckAnswersCharacteristics characteristicsAnswers={characteristicsAnswers}/>} />
      </Routes>
    </div>
  )
}

export default Characteristics
