import * as React from 'react'
import * as GovUK from 'govuk-react'
import { Link, useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <GovUK.PhaseBanner level="alpha">
        This service is currently a prototype –{' '}
        <Link href="https://example.com">
          find out what that means
        </Link>
      </GovUK.PhaseBanner>
      <GovUK.Page.Main>
        <GovUK.H1>Register a heat network</GovUK.H1>
        <GovUK.Paragraph>
        A heat network is a system in which heating, cooling or hot water is generated at a central source and supplied to customers through a network serving either multiple buildings or multiple occupants in a single building.
        </GovUK.Paragraph>
        <GovUK.Paragraph>
        If you are registering a new heat network, you will have to wait for Ofgem to approve your registration before the heat network can start operating.
        </GovUK.Paragraph>
        <GovUK.Button
          onClick={() => { navigate('/user-journeys/screening-questions/heat-network-name') }}
          icon={<GovUK.ButtonArrow />}
          >
          Start
        </GovUK.Button>
        <Link>Continue an existing registration</Link>
        <br></br>
        <br></br>
        <GovUK.H3>Before you start</GovUK.H3>
        <GovUK.Paragraph>You will need:</GovUK.Paragraph>
        <GovUK.UnorderedList>
          <GovUK.ListItem>
            OPSS ID if you have one
          </GovUK.ListItem>
          <GovUK.ListItem>
            details of any responsible parties
          </GovUK.ListItem>
          <GovUK.ListItem>
            information about the heat network you are registering
          </GovUK.ListItem>
        </GovUK.UnorderedList>

      </GovUK.Page.Main>
    </div>
  )
}

export default StartPage
