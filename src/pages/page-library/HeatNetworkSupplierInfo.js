import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const HeatNetworkSupplierInfo = () => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/secondary-heat-network-info')
  }
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>You are a Heat Network supplier</GovUK.H1>
            <GovUK.Paragraph>
                Based on your answers, you will be classified as the heat network supplier.
                Suppliers are responsible for:
            </GovUK.Paragraph>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                managing the network
                </GovUK.ListItem>
                <GovUK.ListItem>
                communicating with customers
                </GovUK.ListItem>
                <GovUK.ListItem>
                billing customers
                </GovUK.ListItem>
            </GovUK.UnorderedList>
            <GovUK.Button onClick={() => (navigate('/pages/enter-name'))}>
                Continue
            </GovUK.Button>
        </div>
  )
}

export default HeatNetworkSupplierInfo
