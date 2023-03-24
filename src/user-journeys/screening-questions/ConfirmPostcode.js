import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as GovUK from 'govuk-react'

const ConfirmPostcode = ({ heatNetworkInfo }) => {
  const [postcode, setPostcode] = useState('Not set')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleInput = (e) => {
    setPostcode(e.target.value)
  }

  const handleSubmit = () => {
    if (postcode === heatNetworkInfo['Postcode of Energy centre']) {
      navigate('/user-journeys/registration-summary')
      console.log('Match')
    } else if (postcode === 'Not set') {
      setError('Please enter the postcode of your energy centre')
    } else {
      setError('The postcode you entered does not match the OPSS records')
    }
  }
  return (
    <div>
        <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
        <GovUK.Paragraph>Use the postcode as is listed in your latest report to OPSS.</GovUK.Paragraph>
        <GovUK.FormGroup>
            <GovUK.Label>
                <GovUK.LabelText>
                    <strong>Postcode</strong>
                </GovUK.LabelText>
                <GovUK.Input onChange={handleInput}></GovUK.Input>
            </GovUK.Label>
            {error ? <GovUK.ErrorText>{error}</GovUK.ErrorText> : <></>}
        </GovUK.FormGroup>
        <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>
    </div>
  )
}

export default ConfirmPostcode
