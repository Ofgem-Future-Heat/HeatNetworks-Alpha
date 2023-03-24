import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import { Label } from 'govuk-react'

const EnterHNAddress = () => {
  const navigate = useNavigate()
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Enter your heat network&apos;s address</GovUK.H1>
            <GovUK.Paragraph>This is the location of your energy centre, where heating or cooling is generated. For example, this would be where your heat pump or boiler would be located.</GovUK.Paragraph>
            <GovUK.Paragraph>If you have more than one heat network, you will be able to add additional ones later in this form.</GovUK.Paragraph>
            <GovUK.FormGroup>
                <GovUK.Label>
                    <GovUK.LabelText> Address Line 1</GovUK.LabelText>
                        <GovUK.Input />
                </GovUK.Label>
                <GovUK.Label>
                        <GovUK.LabelText> Address Line 2 (optional) </GovUK.LabelText>
                        <GovUK.Input />
                </GovUK.Label>
                <GovUK.Label>
                        <GovUK.LabelText> Town or City </GovUK.LabelText>
                        <GovUK.Input />
                </GovUK.Label>
                <GovUK.Label>
                        <GovUK.LabelText> County (optional)</GovUK.LabelText>
                        <GovUK.Input />
                </GovUK.Label>
                <GovUK.Label>
                        <GovUK.LabelText> Postcode</GovUK.LabelText>
                        <GovUK.Input />
                </GovUK.Label>
            </GovUK.FormGroup>
            <GovUK.Button>Continue</GovUK.Button>

        </div>
  )
}

export default EnterHNAddress
