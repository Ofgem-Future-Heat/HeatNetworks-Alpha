import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const EnterTelephoneNumber = ({ telephoneNumber, setTelephoneNumber }) => {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/enter-email-address')
  }

  const handleTelephoneNumberInput = (e) => {
    setTelephoneNumber(e.target.value)
  }

  const handleSubmit = () => {
    if (telephoneNumber.length > 0) {
      const isValidTelephoneNumber = /^07\d{9}$/.test(telephoneNumber)
      isValidTelephoneNumber ? navigate('/pages/check-answers') : setError('Please enter a valid telephone number')
    } else {
      setError('Please enter a telephone number. We will use this should we need to contact you about your registration')
    }
  }

  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Enter your telephone number</GovUK.H1>
            <GovUK.H4>Telephone number</GovUK.H4>
            <GovUK.FormGroup>
        <GovUK.Label>
            <GovUK.Input
              value={telephoneNumber}
              input={{
                name: 'group0'
              }}
            onChange={handleTelephoneNumberInput}>
          </GovUK.Input>
        </GovUK.Label>
        {error
          ? <GovUK.ErrorText>
            {error}
           </GovUK.ErrorText>
          : <></>}
        </GovUK.FormGroup>
        <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>
        </div>
  )
}

export default EnterTelephoneNumber
