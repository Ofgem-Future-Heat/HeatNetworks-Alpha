import React from 'react'
import * as GovUK from 'govuk-react'
import { SectionBreak } from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const SecondaryHeatNetworkInfo = () => {
  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/primary-heat-network-info')
  }

  return (
        <div>
            <GovUK.FormGroup>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>You are a secondary heat network</GovUK.H1>
            <GovUK.H3>Secondary heat networks:</GovUK.H3>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                are mainly run by heat network suppliers
                </GovUK.ListItem>
                <GovUK.ListItem>
                supply heat to a range of end users
                </GovUK.ListItem>
                <GovUK.ListItem>
                have a contractual relationship with a primary heat network
                </GovUK.ListItem>
                <GovUK.ListItem>
                upply heat to any end user type including domestic and microbusinesses                </GovUK.ListItem>
                <GovUK.ListItem>
                have a contractual relationship with end users including domestic or microbusinesses                </GovUK.ListItem>
                <SectionBreak level="MEDIUM"/>
            </GovUK.UnorderedList>
                <GovUK.H3>Secondary heat networks must:</GovUK.H3>
                <GovUK.UnorderedList>
                <GovUK.ListItem>
                meet technical standards
                </GovUK.ListItem>
                <GovUK.ListItem>
                offer consumer protection
                </GovUK.ListItem>
                <GovUK.ListItem>
                maintain a priority services register
                </GovUK.ListItem>
                <GovUK.ListItem>
                provide metering for their customers
                </GovUK.ListItem>
                </GovUK.UnorderedList>
            <GovUK.Button onClick={() => (navigate('/pages/heat-network-operator-info'))}>
                Continue
            </GovUK.Button>
            </GovUK.FormGroup>
        </div>
  )
}

export default SecondaryHeatNetworkInfo
