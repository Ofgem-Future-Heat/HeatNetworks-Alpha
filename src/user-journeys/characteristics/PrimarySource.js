import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const PrimarySource = ({ characteristicsAnswers, setCharacteristicsAnswers }) => {
  const navigate = useNavigate()

  const handlePrimarySource = (e) => {
    setCharacteristicsAnswers({
      ...characteristicsAnswers,
      primarySource: e.target.value

    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/user-journeys/characteristics/secondary-source')
  }
  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
      <GovUK.H1>What is your primary energy source?</GovUK.H1>
      <GovUK.Paragraph>This is the main energy source for the heat or cooling that is generated and supplied across the network.</GovUK.Paragraph>
      <GovUK.Select
        input={{
          name: 'group1',
          onChange: handlePrimarySource
        }}
          label="Primary source"
          >
      <option value="Boiler">
        Boiler
      </option>
      <option value="Chiller">
        Chiller
      </option>
      <option value="CHP Engine">
        CHP Engine
      </option>
      <option value="CHP fuel cell">
        CHP fuel cell
      </option>
      <option value="CHP gas turbine or Combined Cycle Plant">
        CHP gas turbine or Combined Cycle Plant
      </option>
      <option value="CHP Organic Rankine Cycle">
        CHP Organic Rankine Cycle
      </option>
      <option value="CHP Steam Turbine or Steam Screw Expander">
        CHP Steam Turbine or Steam Screw Expander
      </option>
      <option value="Heat exchanger from waste heat recovery process">
       Heat exchanger from waste heat recovery process
      </option>
      <option value="Heat pump">
        Heat pump
      </option>
      <option value="Solar thermal panels">
        Solar thermal panels
      </option>
    </GovUK.Select>
    <br></br>
    <GovUK.Link href='#'>  The heat source isn&apos;t listed</GovUK.Link>
    <br></br>
    <br></br>
    <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>
  </div>
  )
}

export default PrimarySource
