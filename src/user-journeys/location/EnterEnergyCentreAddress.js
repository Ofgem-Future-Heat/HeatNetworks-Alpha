import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const EnterEnergyCentreAddress = ({ setNearestPostcode, setHeatNetworkInfo, setManualAddressEntry, addressLine1, setAddressLine1, addressLine2, setAddressLine2, townOrCity, setTownOrCity, county, setCounty, postcode, setPostcode }) => {
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')
  const [error3, setError3] = useState('')

  const navigate = useNavigate()

  const handleAddressLine1Input = (e) => {
    setAddressLine1(e.target.value)
  }

  const handleAddressLine2Input = (e) => {
    setAddressLine2(e.target.value)
  }

  const handleTownOrCityInput = (e) => {
    setTownOrCity(e.target.value)
  }

  const handleCountyInput = (e) => {
    setCounty(e.target.value)
  }

  const handlePostcodeInput = (e) => {
    setPostcode(e.target.value)
  }

  const handleSubmit = () => {
    setNearestPostcode('')
    setHeatNetworkInfo('')
    setManualAddressEntry([addressLine1, ', ', townOrCity, ', ', postcode])
    navigate('/user-journeys/location/check-location-answers')
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const errors = {}

  //   if (!addressLine1 || addressLine1.trim() === '') {
  //     errors.address = 'Please enter a valid address.'
  //   }

  //   if (!postcode || !/^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/.test(postcode)) {
  //     errors.postcode = 'Please enter a valid postcode.'
  //   }

  //   if (!townOrCity || townOrCity.trim() === '') {
  //     errors.townOrCity = 'Please enter a valid town/city.'
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     setError1(errors.address || '')
  //     setError2(errors.townOrCity || '')
  //     setError3(errors.postcode || '')
  //   } else {
  //     setManualAddressEntry([...addressLine1, townOrCity, postcode])
  //     setError1('')
  //     setError2('')
  //     setError3('')
  //     navigate('/pages/heat-network-supplier-info')
  //   }
  // }

  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
      <GovUK.H1>Enter the energy centre&apos;s address</GovUK.H1>
      <GovUK.H4>Address line 1</GovUK.H4>
      <GovUK.FormGroup>
        <GovUK.Label>
          <GovUK.Input
          value={addressLine1}
          input={{
            name: 'group0'
          }}
          onChange={handleAddressLine1Input}>
          </GovUK.Input>
        </GovUK.Label>
        {error1 ? <GovUK.ErrorText> {error1} </GovUK.ErrorText> : <></>}
        <GovUK.Label>
          <GovUK.H4>Address line 2 (optional)</GovUK.H4>
          <GovUK.Input
          value={addressLine2}
          input={{
            name: 'group0'
          }}
          onChange={handleAddressLine2Input}>
          </GovUK.Input>
        </GovUK.Label>
        <GovUK.H4>Town or City</GovUK.H4>
        <GovUK.Input
          value={townOrCity}
          input={{
            name: 'group0'
          }}
          onChange={handleTownOrCityInput}>
        </GovUK.Input>
        {error2 ? <GovUK.ErrorText> {error2} </GovUK.ErrorText> : <></>}
        <GovUK.Label>
          <GovUK.H4>County (optional)</GovUK.H4>
          <GovUK.Input
            value={county}
            input={{
              name: 'group0'
            }}
            onChange={handleCountyInput}>
          </GovUK.Input>
        </GovUK.Label>
          <GovUK.H4>Postcode</GovUK.H4>
          <GovUK.Input
              value={postcode}
              input={{
                name: 'group0'
              }}
            onChange={handlePostcodeInput}>
          </GovUK.Input>
        {error3 ? <GovUK.ErrorText> {error3} </GovUK.ErrorText> : <></>}
      </GovUK.FormGroup>
      <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>
    </div>
  )
}

export default EnterEnergyCentreAddress
