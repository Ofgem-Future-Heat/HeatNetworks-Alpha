import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const HNRegistrationSummary = ({ locationFormsComplete, setLocationFormsComplete, registeredWithOPSS }) => {
  const navigate = useNavigate()

  const handleLocationSubmit = () => {
    if (locationFormsComplete) {
      setLocationFormsComplete(false)
      console.log('first condition reached')
      navigate('/user-journeys/location/check-location-answers')
    } else if (!locationFormsComplete) {
      registeredWithOPSS === 'Yes' ? navigate('/user-journeys/location/confirm-energy-centre-address') : navigate('/user-journeys/location/scotland-check')
    }
  }
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Register a heat network</GovUK.H1>
            <GovUK.H3>Application Incomplete</GovUK.H3>
            <GovUK.Paragraph>You have completed 0 of 8 sections</GovUK.Paragraph>
            <GovUK.InsetText>Some answers will be filled in with data from your <strong>OPSS ID: HN2349850</strong> to save you time. You can change that data if it is no longer accurate</GovUK.InsetText>
            <GovUK.H3>1. Roles and responsibilities</GovUK.H3>
            <GovUK.Table name='group1'>
                <GovUK.Table.Row>
                    <GovUK.Table.Cell style={{ width: '400px' }}>
                        Contact details
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Tag tint="GREY">
                        NOT STARTED
                    </GovUK.Tag>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.Cell style={{ width: '400px' }}>
                        Supplier and operator details
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Tag tint='GREY'>
                        CANNOT START YET
                    </GovUK.Tag>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
            </GovUK.Table>
            <GovUK.H3>2. Your heat network</GovUK.H3>
            <GovUK.Table name='group1'>
                <GovUK.Table.Row>
                <GovUK.Table.Cell style={{ width: '400px' }}>
                    <GovUK.Link href='#' onClick={handleLocationSubmit}>Location</GovUK.Link>
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Tag tint="BLUE">
                        PENDING
                    </GovUK.Tag>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.Cell style={{ width: '400px' }}>
                        <Link to="/user-journeys/characteristics/heat-network-provide">
                        Characteristics
                        </Link>
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Tag tint="GREY">
                    NOT STARTED
                </GovUK.Tag>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
            </GovUK.Table>
            <GovUK.H3>3. Review standards and send</GovUK.H3>
            <GovUK.Table name='group1'>
                <GovUK.Table.Row>
                    <GovUK.Table.Cell style={{ width: '400px' }}>
                        Commit to standards and send
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Tag tint='GREY'>
                        CANNOT START YET
                    </GovUK.Tag>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
            </GovUK.Table>
            <GovUK.Button>Save and return later</GovUK.Button>
        </div>
  )
}

export default HNRegistrationSummary
