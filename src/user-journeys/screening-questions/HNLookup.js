import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as GovUK from 'govuk-react'

const HNLookup = ({ heatNetworkId, setHeatNetworkId, setHeatNetworkInfo, registeredWithOPSS, setRegisteredWithOPSS }) => {
  const [selectionError, setSelectionError] = useState('')
  const [noSelectionError, setNoSelectionError] = useState('')
  const HNLookupData = require('../../opss-data/fabricated.json')

  const navigate = useNavigate()

  const handleInput = (e) => {
    setHeatNetworkId(e.target.value)
  }

  const handleSubmit = (e) => {
    if (registeredWithOPSS === '') {
      setNoSelectionError('Please select an option')
    } else if (registeredWithOPSS === 'Yes') {
      setNoSelectionError('')
    } else if (registeredWithOPSS === 'No') {
      navigate('/user-journeys/registration-summary')
      return
    }
    if (registeredWithOPSS === 'Yes') {
      if (heatNetworkId.length > 0) {
        const searchResult = HNLookupData.find(opssObject => opssObject['HN-ID'] === heatNetworkId)
        if (searchResult) {
          setHeatNetworkInfo(searchResult)
          navigate('/user-journeys/screening-questions/confirm-postcode')
        } else {
          setSelectionError('ID not found in our records')
        }
      } else {
        setSelectionError('Please enter your OPSS ID')
      }
    }
  }

  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
      <GovUK.H2>Have you already registered your heat network with OPSS?</GovUK.H2>
      <GovUK.Paragraph>To save you time, we will use your OPSS data to help complete your registration. You don&apos;t need an OPSS ID to register.</GovUK.Paragraph>
      <GovUK.FormGroup>
        <GovUK.Radio
            checked={registeredWithOPSS === 'Yes'}
            name="registeredWithOPSS"
            onChange={() => setRegisteredWithOPSS('Yes')}
        >Yes
        </GovUK.Radio>
        {registeredWithOPSS === 'Yes'
          ? <GovUK.InsetText>
        <GovUK.FormGroup>
          <GovUK.Label>
            <GovUK.LabelText>
                Heat Network Unique ID
            </GovUK.LabelText>
            <GovUK.Input onChange={handleInput}></GovUK.Input>
          </GovUK.Label>
        </GovUK.FormGroup>
      </GovUK.InsetText>
          : <></>}
      {selectionError ? <GovUK.ErrorText>{selectionError}</GovUK.ErrorText> : <></>}
      <GovUK.Radio
        checked={registeredWithOPSS === 'No'}
        name="registeredWithOPSS"
        onChange={() => setRegisteredWithOPSS('No')}
      >No
      </GovUK.Radio>
      {noSelectionError ? <GovUK.ErrorText> {noSelectionError}</GovUK.ErrorText> : <></>}
      </GovUK.FormGroup>
      <GovUK.Button onClick={handleSubmit} > Continue </GovUK.Button>

    </div>
  )
}

export default HNLookup
