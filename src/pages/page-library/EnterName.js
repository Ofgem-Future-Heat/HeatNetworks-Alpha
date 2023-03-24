import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as GovUK from 'govuk-react'

const EnterName = ({ name, setName, isAmendingName }) => {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/heat-network-supplier-info')
  }

  const handleNameInput = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    const isValidName = /^[A-Za-z\s]+$/.test(name)
    if (name.length > 0 && !isAmendingName) {
      isValidName ? navigate('/pages/enter-email-address') : setError('Please enter a valid name.')
    } else if (name.length > 0 && isAmendingName) {
      isValidName ? navigate('/pages/check-answers') : setError('Please enter a valid name.')
    } else {
      setError('Please enter your name')
    }
  }

  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Enter your name</GovUK.H1>
            <GovUK.Paragraph>We will consider you the first person to contact in regards to your heat networks.</GovUK.Paragraph>
            <GovUK.H4>Full name</GovUK.H4>
            <GovUK.FormGroup>
            <GovUK.Label>
              <GovUK.Input
              value={name}
              input={{
                name: 'group0'
              }}
            onChange={handleNameInput}>
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

export default EnterName
