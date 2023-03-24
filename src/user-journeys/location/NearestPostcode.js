import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const NearestPostcode = ({ setHeatNetworkInfo, setManualAddressEntry, nearestPostcode, setNearestPostcode }) => {
  const navigate = useNavigate()

  const handlePostcodeInput = (e) => {
    setNearestPostcode(e.target.value)
  }

  const handleSubmit = () => {
    setHeatNetworkInfo('')
    setManualAddressEntry('')
    navigate('/user-journeys/location/check-location-answers')
  }

  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Enter the nearest postcode to your energy centre</GovUK.H1>
            <GovUK.H5>Postcode {nearestPostcode}</GovUK.H5>
            <GovUK.FormGroup>
                <GovUK.Input
                 value={nearestPostcode}
                 input={{
                   name: 'group0'
                 }}
               onChange={handlePostcodeInput}></GovUK.Input>
            </GovUK.FormGroup>
            <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>

        </div>
  )
}

export default NearestPostcode
