import React, { useState, useEffect } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

function ConfirmLocation ({ results, setResults, postcodeForOSSearch, setPostcodeForOSSearch }) {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handlePostcodeInput = event => {
    setPostcodeForOSSearch(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`https://hnstaticapp.azurewebsites.net/api/HttpTrigger1?name=${postcodeForOSSearch}&&code=QRbygTiT2RZiRwvL_EXp-gfZSFDwDXP-dHELpc_Pw6GjAzFu_7Cj3Q==`)
      const data = await response.json()
      setResults(data.results)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (!results) {
      setError('No results found. Please enter a valid postcode')
    } else if (results.length > 0) {
      navigate('/user-journeys/location/confirm-location-result')
    }
  }, [results])

  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
      <GovUK.H1>
        Enter the energy centre&apos;s address
      </GovUK.H1>
      <GovUK.H5>Energy centre postcode</GovUK.H5>
      <GovUK.LoadingBox loading={isLoading}>
        <GovUK.FormGroup>
        <GovUK.Input
          value={postcodeForOSSearch}
          input={{
            name: 'group0'
          }}
          onChange={handlePostcodeInput}
        >
        </GovUK.Input>
        </GovUK.FormGroup>
      </GovUK.LoadingBox>
      {error ? <GovUK.ErrorText>{error}</GovUK.ErrorText> : <></>}
      <GovUK.Button onClick={handleSubmit} type="submit">Find Address</GovUK.Button>
    </div>
  )
}

export default ConfirmLocation
