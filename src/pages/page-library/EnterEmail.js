import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const EnterEmail = ({ email, setEmail, isAmendingEmail }) => {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/enter-name')
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    if (email.length > 0 && !isAmendingEmail) {
      isValidEmail ? navigate('/pages/enter-telephone-number') : setError('Please enter a valid email address')
    } else if (email.length > 0 && isAmendingEmail) {
      isValidEmail ? navigate('/pages/check-answers') : setError('Please enter a valid email address')
    } else {
      setError('Please enter an email address. We will use this should we need to contact you about your registration')
    }
  }

  return (
        <div>
           <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Enter your email address</GovUK.H1>
            <GovUK.Paragraph>You will need access to this inbox to log in to your account.</GovUK.Paragraph>
            <GovUK.H4>Email address</GovUK.H4>
            <GovUK.FormGroup>
        <GovUK.Label>
        <GovUK.Input
              value={email}
              input={{
                name: 'group0'
              }}
            onChange={handleEmailInput}>
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

export default EnterEmail
