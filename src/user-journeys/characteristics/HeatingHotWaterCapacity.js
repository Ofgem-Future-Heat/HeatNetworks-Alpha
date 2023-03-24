import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const HeatingHotWaterCapacity = ({ characteristicsAnswers, setCharacteristicsAnswers }) => {
  const navigate = useNavigate()

  const handleHeatingHotWaterCapacity = (e) => {
    setCharacteristicsAnswers({
      ...characteristicsAnswers,
      heatingHotWaterCapacity: e.target.value

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/user-journeys/characteristics/cooling-capacity')
  }

  return (
        <div>
             <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
                <GovUK.H1>
                What is the heating and hot water capacity in kilowatts?
                </GovUK.H1>
                <GovUK.H3> ▼ What does capacity mean?</GovUK.H3>
                <GovUK.Paragraph>This is the maximum heat output of the heating sources on the network. If the heat network is capable of thermal storage, please only provide the capacity of heating sources. Do not include the extra capacity from deploying thermal storage.

The capacity in kilowatts (kW) is normally written on the boiler(s) or pumps, or in the technical documentation. If its not, you can ask your service engineer to give you this information. If there is more than one heat source, please add together the combined total capacity of all the sources.
</GovUK.Paragraph>

<GovUK.H3>Heating and hot water capacity (kW / kilowatts)</GovUK.H3>

<GovUK.Input
              value={characteristicsAnswers.heatingHotWaterCapacity}
              input={{
                name: 'group0'
              }}
            onChange={handleHeatingHotWaterCapacity} >
          </GovUK.Input>
          <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>
        </div>
  )
}

export default HeatingHotWaterCapacity
