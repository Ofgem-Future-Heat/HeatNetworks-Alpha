import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const MakePayment = () => {
  const navigate = useNavigate()
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Payment page</GovUK.H1>
            <GovUK.Paragraph>This page links you to the Gov Pay website where payment for Heat Network charges can be made</GovUK.Paragraph>
            <GovUK.FormGroup>
            <GovUK.Label>
            </GovUK.Label>
            </GovUK.FormGroup>
            <GovUK.Link href="https://www.gov.uk/payments/ofgem-heat-networks/ofgem-heat-network-charge">
            <GovUK.Button >Go to payment page</GovUK.Button>
            </GovUK.Link>
        </div>
  )
}

export default MakePayment
