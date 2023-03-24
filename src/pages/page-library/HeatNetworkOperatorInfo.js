import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const HeatNetworkOperatorInfo = () => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/secondary-heat-network-info')
  }
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>You are a Heat Network operator</GovUK.H1>
            <GovUK.Paragraph>
                Based on your answers, you will be classified as the heat network operator.
                Operators are responsible for:
            </GovUK.Paragraph>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                the safety, function and maintenance of the physical infrastructures in the heat network
                </GovUK.ListItem>
            </GovUK.UnorderedList>
            <GovUK.Button onClick={() => (navigate('/pages/heat-network-supplier-info'))}>
                Continue
            </GovUK.Button>
        </div>
  )
}

export default HeatNetworkOperatorInfo
