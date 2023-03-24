import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const SpecificAddress = ({ specificAddress, setSpecificAddress }) => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (specificAddress === 'Yes') {
      navigate('/user-journeys/location/confirm-location')
    } else {
      navigate('/user-journeys/location/nearest-postcode')
    }
  }

  return (
    <div>
        <GovUK.BackLink href="#" onClick={ () => { navigate(-1) } }></GovUK.BackLink>
        <GovUK.H1>Does the energy centre have an address?</GovUK.H1>
        <GovUK.Paragraph>An energy centre is where the energy used in the heat network is created. If you have more than one, tell us about the one that generates the most energy used in the heat network.</GovUK.Paragraph>
        <GovUK.MultiChoice
                mb={8}
                >
                <GovUK.Radio
                    checked={specificAddress === 'Yes'}
                    name="specificAddress"
                    onChange={() => setSpecificAddress('Yes')}>
                        Yes
                </GovUK.Radio>
                <GovUK.Radio
                    checked={specificAddress === 'No'}
                    name="specificAddress"
                    onChange={() => setSpecificAddress('No')}>
                        No
                </GovUK.Radio>
            </GovUK.MultiChoice>
            <GovUK.Button onClick={handleSubmit}>
                Continue
            </GovUK.Button>
    </div>

  )
}

export default SpecificAddress
