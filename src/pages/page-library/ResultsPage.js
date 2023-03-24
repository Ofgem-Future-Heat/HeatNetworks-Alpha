import React from 'react'
import * as GovUK from 'govuk-react'
import { Link } from 'react-router-dom'

const ResultsPage = ({ searchResults }) => {
  return (
    <div>
      <GovUK.H1>Heat Network Results:</GovUK.H1>
      {searchResults.map((result, index) => (
        <div key={index}>
          <GovUK.H5>Select address</GovUK.H5>
          <GovUK.Paragraph>You can select more than one</GovUK.Paragraph>
          <GovUK.FormGroup>
          <GovUK.Checkbox>{result.Heatnetwork} </GovUK.Checkbox>
          <GovUK.Checkbox>{'Heating Aberdeen Ltd'} </GovUK.Checkbox>
          </GovUK.FormGroup>
          <GovUK.FormGroup>
          <Link>My heat networks address isnt listed</Link>
          </GovUK.FormGroup>
          <GovUK.Button >Confirm</GovUK.Button>
        </div>
      ))}
    </div>
  )
}

export default ResultsPage
