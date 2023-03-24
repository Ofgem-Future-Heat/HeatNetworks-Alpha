import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'
// import nestedFieldStyles from '../scss/nested.field.input.scss'

const CompanyLookUp = ({ setCompanyNumber, thisCompanyNumber, setThisCompanyNumber, hasMadeSelection, setHasMadeSelection, isRegisteredCompany, setIsRegisteredCompany, setCompanyDetails }) => {
  const expectedCompanyNumberLength = 8
  const [isCompanyNumberValidationErrorShown, setCompanyNumberValidationErrorShown] = useState(false)
  const [isNoSelectionErrorShown, setNoSelectionErrorShown] = useState(false)

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/enter-telephone-number')
  }

  const handleCompanyNumberInput = (e) => {
    setThisCompanyNumber(e.target.value)
    setCompanyNumber(e.target.value)
  }

  const handleContinue = () => {
    if (!hasMadeSelection) {
      setNoSelectionErrorShown(true)
      return
    }
    if (!isRegisteredCompany) {
      setCompanyNumberValidationErrorShown(false)
      setCompanyDetails({})
      navigate('/pages/company-details')
    } else {
      const isNumber = /^\d+$/.test(thisCompanyNumber)
      const isValidCompanyNumber = isNumber && thisCompanyNumber.length === expectedCompanyNumberLength
      setCompanyNumberValidationErrorShown(!isValidCompanyNumber)

      if (isValidCompanyNumber) {
        setCompanyNumber(thisCompanyNumber)
        navigate('/pages/confirm-company-details')
      }
    }
  }

  const shouldShowCompanyNumberValidationError = () => {
    return isRegisteredCompany && isCompanyNumberValidationErrorShown
  }

  const handleYesSelection = () => {
    setNoSelectionErrorShown(false)
    setHasMadeSelection(true)
    setIsRegisteredCompany(true)
  }

  const handleNoSelection = () => {
    setNoSelectionErrorShown(false)
    setHasMadeSelection(true)
    setIsRegisteredCompany(false)
  }

  return (
    <div>
      <GovUK.Fieldset>
      <GovUK.FormGroup>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
      <GovUK.H2>Are you representing a registered business? {isCompanyNumberValidationErrorShown}</GovUK.H2>
      <GovUK.Radio checked={isRegisteredCompany === true} name="group1" onChange={() => handleYesSelection()}>Yes</GovUK.Radio>
      <GovUK.FormGroup className={!shouldShowCompanyNumberValidationError() ? 'info' : ''} error style={isCompanyNumberValidationErrorShown ? { } : {}}>
        <GovUK.Label>
          <GovUK.LabelText>
            Company Number
          </GovUK.LabelText>
            {shouldShowCompanyNumberValidationError()
              ? <GovUK.ErrorText>
                Company number must be 8 digits.
              </GovUK.ErrorText>
              : <></>
            }
          <GovUK.Input
          value={thisCompanyNumber}
          input={{
            name: 'group0'
          }}
          onChange={handleCompanyNumberInput}
          disabled={!isRegisteredCompany}
          ></GovUK.Input>
        </GovUK.Label>
        </GovUK.FormGroup>
        <GovUK.FormGroup>
          <GovUK.Radio
          checked={isRegisteredCompany === false}
          name="group1"
          onChange={() => handleNoSelection()}>No</GovUK.Radio>
          </GovUK.FormGroup>
          {isNoSelectionErrorShown
            ? <GovUK.ErrorText>
              Please make a selection.
            </GovUK.ErrorText>
            : <></>
          }
          <GovUK.Button onClick={handleContinue}>
              Continue
          </GovUK.Button>

      </GovUK.FormGroup>
      </GovUK.Fieldset>
    </div>
  )
}

export default CompanyLookUp
