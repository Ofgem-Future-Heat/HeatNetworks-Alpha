import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const ConfirmLocationResult = ({ results, setResults, addressSelection, setAddressSelection, setHeatNetworkInfo, postcodeForOSSearch }) => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    setHeatNetworkInfo('')
    navigate('/user-journeys/location/check-location-answers')
  }
  const handleAddressNotListed = () => {
    if (addressSelection) {
      setAddressSelection('')
    }
    navigate('/user-journeys/location/check-location-answers')
  }

  const handlePostcodeChange = () => {
    setResults([])
    navigate('/user-journeys/location/confirm-location')
  }

  return (
    <div>
      <GovUK.BackLink href='#' onClick={handlePostcodeChange} >Back</GovUK.BackLink>
      <GovUK.H1>
          Enter the energy centre&apos;s address
      </GovUK.H1>
      <GovUK.H5>Energy centre postcode</GovUK.H5>
      <GovUK.H5>{postcodeForOSSearch} <GovUK.Link href='#' onClick={handlePostcodeChange}>Change</GovUK.Link></GovUK.H5>
      <GovUK.FormGroup>
        <GovUK.Select input={{ onChange: (e) => { setAddressSelection(e.target.value) } }}>
        {results.map((address, index) => (
          <option key={index} value={address.DPA.ADDRESS}>
            {address.DPA.ADDRESS}
          </option>
        ))}
        </GovUK.Select>
        <br></br>
        <Link to="/user-journeys/location/enter-energy-centre-address"> My energy centre&apos;s address isn&apos;t listed </Link>
      </GovUK.FormGroup>
      <GovUK.Button onClick={handleSubmit} type="submit">Continue</GovUK.Button>
    </div>
  )
}

export default ConfirmLocationResult
