import React from 'react'
import * as GovUK from 'govuk-react'
import { SectionBreak } from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const PrimaryHeatNetworkInfo = () => {
  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/supplier-check')
  }

  return (
        <div>
            <GovUK.FormGroup>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>You are a primary heat network</GovUK.H1>
            <GovUK.H3>Primary heat networks:</GovUK.H3>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                are mainly run by heat network operators
                </GovUK.ListItem>
                <GovUK.ListItem>
                supply heat to other heat networks
                </GovUK.ListItem>
                <GovUK.ListItem>
                can supply heat to commercial or industrial end users
                </GovUK.ListItem>
                <GovUK.ListItem>
                have a contractual relationship with non domestic end users including secondary networks
                </GovUK.ListItem>
                <GovUK.ListItem>
                have no domestic or microbusiness directly connected
                </GovUK.ListItem>
            </GovUK.UnorderedList>

                <GovUK.H3>Primary heat networks must:</GovUK.H3>
                <GovUK.UnorderedList>
                    <GovUK.ListItem>
                    meet technical standards
                    </GovUK.ListItem>
                    <GovUK.ListItem>
                    maintain a priority services register
                    </GovUK.ListItem>
                </GovUK.UnorderedList>
            <GovUK.Button onClick={() => (navigate('/pages/secondary-heat-network-info'))}>
                Continue
            </GovUK.Button>
            </GovUK.FormGroup>
        </div>
  )
}

export default PrimaryHeatNetworkInfo
