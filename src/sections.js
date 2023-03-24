import React from 'react'
import * as GovUK from 'govuk-react'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
        <div>
            <h2>User Journeys</h2>
            <GovUK.OrderedList listStyleType="none">
            {/* <strong>Prototype Demo</strong>
              <GovUK.ListItem>
                <Link to="/">Start Page</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/screening-questions/heat-network-name">Give your heat network a name</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/screening-questions/hn-lookup">Already registered with HN?</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/screening-questions/confirm-postcode">Confirm the postcode of your energy centre</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/confirm-energy-centre-address">Confirm Energy Centre</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/scotland-check">Operate in Scotland?</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/specific-address">Specific Address Check</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/confirm-location">Enter the energy centre&apos;s address (OS postcode search)</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/confirm-location-result">Confirm Location results</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/enter-energy-centre-address">Enter Energy Centre Address (manual entry)</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/nearest-postcode">Nearest Postcode</Link>
              </GovUK.ListItem>
              <GovUK.ListItem>
                <Link to="/user-journeys/location/check-location-answers">Check Answers</Link>
              </GovUK.ListItem>
              <br></br> */}
            <strong>Screening Questions</strong>
                <GovUK.ListItem>
                    <Link to="/">
                    Start Page
                    </Link>
                 </GovUK.ListItem>
                 <GovUK.ListItem>
                    <Link to="/user-journeys/screening-questions/heat-network-name">
                    Give your heat network a name
                    </Link>
                </GovUK.ListItem>
                <GovUK.ListItem>
                    <Link to="/user-journeys/screening-questions/hn-lookup">
                    Have you already registered your heat network with OPSS?
                    </Link>
                </GovUK.ListItem>
                <GovUK.ListItem>
                    <Link to="/user-journeys/screening-questions/confirm-postcode">
                    Confirm postcode
                    </Link>
                </GovUK.ListItem>
                <GovUK.ListItem>
                <Link to="/user-journeys/registration-summary">Registration Summary</Link>
              </GovUK.ListItem>

           <GovUK.OrderedList />
           <br></br>

           <GovUK.ListItem>
           <strong>Location</strong>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/location/scotland-check">
            Does the heat network operate in Scotland?
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/location/specific-address">
                Does the energy centre have an address?
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/location/confirm-location">
                Enter the energy centre&apos;s address (OS postcode search)
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/location/confirm-location-result">
            Confirm Location results
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
                <Link to="/user-journeys/location/enter-energy-centre-address">Enter Energy Centre Address (manual entry)</Link>
              </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/location/nearest-postcode">
                Nearest postcode
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
                <Link to="/user-journeys/location/check-location-answers">Check Answers</Link>
              </GovUK.ListItem>
           <br></br>
          <strong>Characteristics</strong>
          <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/heat-network-provide">
            What does your heat network provide (heating, cooling or hot water)?
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/heating-hot-water-capacity">
            heating hot water
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/cooling-capacity">
            cooling capacity
            </Link>
           </GovUK.ListItem>
            <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/primary-source">
            primary source
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/secondary-source">
            secondary source
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/tertiary-source">
            tertiary source
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/heat-network-fuel">
            fuel source
            </Link>
           </GovUK.ListItem>
           <GovUK.ListItem>
            <Link to="/user-journeys/characteristics/check-answers-characteristics">
            check answers
            </Link>
           </GovUK.ListItem>
           </GovUK.OrderedList>
        </div>
  )
}

export default Sections
