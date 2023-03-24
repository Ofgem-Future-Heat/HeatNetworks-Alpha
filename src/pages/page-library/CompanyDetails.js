import React, { useState, useEffect } from 'react'
import * as GovUK from 'govuk-react'
import { SectionBreak } from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import { validateCompanyName, validateCompanyNumber, validateCompanyAddress, validateCompanyTownOrCity, validateCompanyCounty, validateCompanyPostcode } from '../../validators/validators'

const CompanyDetails = ({ companyDetails, setCompanyDetails }) => {
  const navigate = useNavigate()

  const [companyName, setCompanyName] = useState('')
  const [number, setNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [town, setTown] = useState('')
  const [county, setCounty] = useState('')
  const [postCode, setPostcode] = useState('')
  const [companyNameError, setCompanyNameError] = useState('')
  const [errors, setErrors] = useState({})

  const isNotEmpty = (obj) => {
    return Object.keys(obj).some((key) => obj[key]?.length > 0)
  }

  const handleCompanyNameInput = (e) => {
    setCompanyName(e.target.value)
  }

  const handleCompanyNumberInput = (e) => {
    setCompanyName(e.target.value)
  }

  const handleCompanyAddressInput = (e) => {
    setAddressLine1(e.target.value)
  }

  const handleCompanyTownOrCityInput = (e) => {
    setTown(e.target.value)
  }

  const handleCompanyCountyInput = (e) => {
    setTown(e.target.value)
  }

  const handleCompanyPostcodeInput = (e) => {
    setTown(e.target.value)
  }

  const handleSubmit = () => {
    const newErrors = {
      companyName: validateCompanyName(companyName),
      companyNumber: validateCompanyNumber(number),
      companyAddress: validateCompanyAddress(addressLine1),
      companyTownOrCity: validateCompanyTownOrCity(addressLine1),
      companyCounty: validateCompanyCounty(county),
      companyPostcode: validateCompanyPostcode(postCode)

    }
    if (isNotEmpty(newErrors)) { setErrors(newErrors) }
  }

  const previousPage = () => {
    navigate('/pages/company-lookup')
  }

  return (
    <div>
      <GovUK.FormGroup>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
      <GovUK.GridRow>
          <GovUK.GridCol setWidth="two-thirds">
            <GovUK.H2>Your Company Details</GovUK.H2>
            {companyNameError
              ? <GovUK.ErrorText>
            {companyNameError}
           </GovUK.ErrorText>
              : <></>}
              <GovUK.InputField
                input={{
                  name: 'group0',
                  defaultValue: companyDetails?.company_name ?? ''
                }}
                onChange={handleCompanyNameInput}>
              </GovUK.InputField>
              {errors?.companyName ? <GovUK.ErrorText>{errors.companyName}</GovUK.ErrorText> : <></>}
              <GovUK.InputField
                input={{
                  name: 'group0',
                  defaultValue: companyDetails?.company_number ?? ''
                }}
                onChange={handleCompanyNumberInput}>
                Companies House Number
              </GovUK.InputField>
              {errors?.companyNumber ? <GovUK.ErrorText>{errors.companyNumber}</GovUK.ErrorText> : <></>}
              <GovUK.InputField
                  input={{
                    name: 'group0'
                  }}
                  >
                  Telephone number (optional)
              </GovUK.InputField>
              <SectionBreak level="LARGE" />
              <GovUK.H2> What is your Company&apos;s address?</GovUK.H2>
              <GovUK.InputField
                  input={{
                    name: 'group0',
                    defaultValue: companyDetails?.registered_office_address?.address_line_1 ?? ''
                  }}
                  onChange={handleCompanyAddressInput}
                  >
                  Building and street (line1)
              </GovUK.InputField>
              {errors?.companyAddress ? <GovUK.ErrorText>{errors.companyAddress}</GovUK.ErrorText> : <></>}

              <GovUK.InputField
                  input={{
                    name: 'group0',
                    defaultValue: companyDetails?.registered_office_address?.address_line_2 ?? ''
                  }}
                  >
                  Building and street (line2)(optional)
              </GovUK.InputField>
              <GovUK.InputField
                  input={{
                    name: 'group0',
                    defaultValue: companyDetails?.registered_office_address?.locality ?? ''
                  }}
                  onChange={handleCompanyTownOrCityInput}
                  >
                  Town or city
              </GovUK.InputField>
              {errors?.companyTownOrCity ? <GovUK.ErrorText>{errors.companyTownOrCity}</GovUK.ErrorText> : <></>}
              <GovUK.InputField
                  input={{
                    name: 'group0',
                    defaultValue: companyDetails?.registered_office_address?.region ?? ''
                  }}
                  onChange={handleCompanyCountyInput}
                  >
                  County
              </GovUK.InputField>
              {errors?.companyCounty ? <GovUK.ErrorText>{errors.companyCounty}</GovUK.ErrorText> : <></>}
              <GovUK.InputField
                  input={{
                    name: 'group0',
                    defaultValue: companyDetails?.registered_office_address?.postal_code ?? ''
                  }}
                  onChange={handleCompanyPostcodeInput}
                  >
                  Postcode
              </GovUK.InputField>
              {errors?.companyPostcode ? <GovUK.ErrorText>{errors.companyPostcode}</GovUK.ErrorText> : <></>}
          </GovUK.GridCol>
      </GovUK.GridRow>
      <SectionBreak level="MEDIUM" />
      <GovUK.Button onClick={handleSubmit}>
          Continue
      </GovUK.Button>
      </GovUK.FormGroup>
    </div>
  )
}

export default CompanyDetails
