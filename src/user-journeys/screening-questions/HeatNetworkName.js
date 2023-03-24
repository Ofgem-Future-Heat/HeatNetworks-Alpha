import * as React from 'react'
import * as GovUK from 'govuk-react'
import { Link, useNavigate } from 'react-router-dom'

const HeatNetworkName = () => {
  const navigate = useNavigate()
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Give your heat network a name</GovUK.H1>
            <GovUK.Paragraph>
              Give your heat network a name that makes sense to you. This is what we&apos;ll use when we request information about it in future.
            </GovUK.Paragraph>
            <GovUK.Paragraph>
              If you have more than one heat network, you will be able to add others after you have registered this one.
            </GovUK.Paragraph>
            <GovUK.H5>Heat Network Name</GovUK.H5>
            <GovUK.FormGroup>
                <GovUK.Input></GovUK.Input>
            </GovUK.FormGroup>
            <GovUK.Button onClick={() => { navigate('/user-journeys/screening-questions/hn-lookup') }}>Continue</GovUK.Button>
        </div>
  )
}

export default HeatNetworkName
