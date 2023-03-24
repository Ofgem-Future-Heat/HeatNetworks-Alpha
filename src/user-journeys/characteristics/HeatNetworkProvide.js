import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const HeatNetworkProvide = ({ characteristicsAnswers, setCharacteristicsAnswers }) => {
  const navigate = useNavigate()

  const handleHeatNetworkProvideInfo = (userInput) => {
    setCharacteristicsAnswers({
      ...characteristicsAnswers,
      heatNetworkProvide: userInput

    })
  }

  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
      <GovUK.H1>
        What does your heat network provide?
      </GovUK.H1>
      <GovUK.FormGroup>
        <GovUK.Checkbox
          name="group-1"
          checked={characteristicsAnswers.heatNetworkProvide === 'Heating'}
          onChange={() => { handleHeatNetworkProvideInfo('Heating') }}
        >
          Heating
        </GovUK.Checkbox>
        <GovUK.Checkbox
          name="group-1"
          checked={characteristicsAnswers.heatNetworkProvide === 'Cooling'}
          onChange={() => { handleHeatNetworkProvideInfo('Cooling') }}
        >
          Cooling
        </GovUK.Checkbox>
        <GovUK.Checkbox
          name="group-1"
          checked={characteristicsAnswers.heatNetworkProvide === 'Hot Water'}
          onChange={() => { handleHeatNetworkProvideInfo('Hot Water') }}
        >
          Hot Water
        </GovUK.Checkbox>
      </GovUK.FormGroup>
      <GovUK.Button onClick={() => navigate('/user-journeys/characteristics/heating-hot-water-capacity')}>
        Continue
      </GovUK.Button>

    </div>
  )
}

export default HeatNetworkProvide
