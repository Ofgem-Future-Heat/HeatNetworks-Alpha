import React, { useEffect, useState } from 'react'
import * as GovUK from 'govuk-react'
import { Link, useNavigate } from 'react-router-dom'

const ConfirmCompanyDetails = ({ companyNumber, companyDetails, setCompanyDetails }) => {
  const [wasCompanyLookupAttempted, setCompanyLookupWasAttempted] = useState(false)
  const [wasCompanyLookupSuccessful, setSuccessfulCompanyLookup] = useState(false)

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/company-lookup')
  }

  const handleSubmit = () => {
    navigate('/pages/enter-name')
  }

  useEffect(() => {
    if (companyNumber) {
      setCompanyLookupWasAttempted(true)
      prefilForm(companyNumber)
    }
  }, [companyNumber, companyDetails])

  const prefilForm = (companyNumber) => {
    const data = require('../../api-response-stubs/companies-house/fabricated.json')
    setCompanyDetails(data[companyNumber])
    if (companyDetails && Object.keys(companyDetails).length !== 0) {
      setSuccessfulCompanyLookup(true)
      console.log(companyDetails.registered_office_address.address_line_1)
    } else {
      setSuccessfulCompanyLookup(false)
    }
  }
  return (
        <div>
         <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            {wasCompanyLookupSuccessful
              ? <div>
                    <GovUK.H1>
                        Confirm company details
                    </GovUK.H1>
                    <GovUK.H2>
                        We&apos;ve retrieved information about your company, please confirm the details below are correct before continuing.
                    </GovUK.H2>
                    <GovUK.Table>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Company name
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {companyDetails.company_name}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                            <Link to="/pages/company-details">
                                Change
                            </Link>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Building and street (line1)
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {companyDetails.registered_office_address.address_line_1}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                                <a href="/pages/company-details">Change</a>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Building and street (line2)
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {companyDetails.registered_office_address.address_line_2}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                                <a href="/pages/company-details">Change</a>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Town or city
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {companyDetails.registered_office_address.region}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                                <a href="/pages/company-details">Change</a>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                County
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {companyDetails.registered_office_address.locality}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                                <a href="/pages/company-details">Change</a>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Postcode
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {companyDetails.registered_office_address.postal_code}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                                <a href="/company-details">Change</a>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                    </GovUK.Table>
                    <GovUK.Button onClick={handleSubmit}>Continue</GovUK.Button>
                </div>
              : <div>
                    <GovUK.H1>
                        We are unable to retrieve information about your company.
                    </GovUK.H1>
                    <GovUK.H2>
                        Please click continue to provide your company details.
                  </GovUK.H2>
                  <GovUK.Button onClick={() => navigate('/pages/company-details')}>Continue</GovUK.Button>
                </div>
            }
        </div>
  )
}

export default ConfirmCompanyDetails
