import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const HeatNetworkFuel = ({ characteristicsAnswers, setCharacteristicsAnswers }) => {
  const navigate = useNavigate()
  const handleHeatNetworkFuel = (e) => {
    setCharacteristicsAnswers({
      ...characteristicsAnswers,
      heatNetworkFuel: e.target.value

    })
  }

  return (
      <div>
        <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
        <GovUK.H1> What fuel does your heat network use?</GovUK.H1>
        <GovUK.Select
            input={{
              name: 'group1',
              onChange: handleHeatNetworkFuel
            }}
            label="Fuel type"
>
            <option value="Ambient heat">
              Ambient heat
            </option>
            <option value="Biogas">
              Biogas
            </option>
            <option value="Biomass">
              Biomass
            </option>
            <option value="Diesel">
              Diesel
            </option>
           <option value="Electricity">
            Electricity
            </option>
            <option value="Geothermal">
              Geothermal
            </option>
            <option value="Hydrogen">
              Hydrogen
            </option>
            <option value="Liquid Biofuel">
              Liquid Biofuel
            </option>
            <option value="Natural gas">
              Natural gas
            </option>
            <option value="Oil">
              Oil
            </option>
            <option value="Solar">
              Solar
           </option>
           <option value="Waste (energy from waste)">
            Waste (energy from waste)
           </option>
            <option value="Waste heat">
             Waste heat
            </option>
            <option value="Fuel input isn&apos;t listed">
              Fuel input isn&apos;t listed
            </option>
          </GovUK.Select>
          <br></br>
          <GovUK.Link href='#'>  The fuel isn&apos;t listed</GovUK.Link>
          <br></br>
          <br></br>
          <GovUK.Button onClick={() => (navigate('/user-journeys/characteristics/check-answers-characteristics'))}>
            Continue
          </GovUK.Button>

                </div>
  )
}

export default HeatNetworkFuel
