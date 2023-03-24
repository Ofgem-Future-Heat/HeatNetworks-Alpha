import React, { useState, useCallback } from 'react'
import * as GovUK from 'govuk-react'
import { validateOperatorCheck } from '../../validators/validators'
import { useNavigate } from 'react-router-dom'

const OperatorCheck = ({ operatorCheck, setOperatorCheck }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/property-type')
  }

  const isNotEmpty = (obj) => {
    return Object.keys(obj).some((key) => obj[key]?.length > 0)
  }

  const toggle = (array, newItem) =>
    array.includes(newItem) ? array.filter((existingItem) => existingItem !== newItem) : [...array, newItem]

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return

    const newErrors = {
      operatorCheck: validateOperatorCheck(operatorCheck)
    }
    if (isNotEmpty(newErrors)) {
      setErrors(newErrors)
    } else {
      setIsSubmitting(true)
      setErrors(null)
      setHasSubmitted(true)
      setIsSubmitting(false)
      navigate('/pages/supplier-check')
    }
  }, [operatorCheck, isSubmitting])

  return (
        <div>
                <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
                <GovUK.H1>
                    Do you or your organisation do any of the following?
                </GovUK.H1>
                <GovUK.H2>Select as many that apply</GovUK.H2>
                <GovUK.FormGroup error={!!errors?.operatorCheck}>
                {errors?.operatorCheck && <GovUK.ErrorText>{errors?.operatorCheck}</GovUK.ErrorText>}
                    <GovUK.Checkbox
                    checked={operatorCheck.includes('Billing and metering')}
                    name="group-1"
                    onChange={() => setOperatorCheck((prev) => toggle(prev, 'Billing and metering'))}
                    >
                        Billing and metering
                    </GovUK.Checkbox>
                    <GovUK.Checkbox
                    checked={operatorCheck.includes('Business and financial management')}
                    name="group-1"
                    onChange={() => setOperatorCheck((prev) => toggle(prev, 'Business and financial management'))}
                    >
                        Business and financial management
                    </GovUK.Checkbox>
                    <GovUK.Checkbox
                    checked={operatorCheck.includes('Contracting operators to manage the physical maintenance of the heat network')}
                    name="group-1"
                    onChange={() => setOperatorCheck((prev) => toggle(prev, 'Contracting operators to manage the physical maintenance of the heat network'))}

                    >
                        Contracting operators to manage the physical maintenance of the heat network
                    </GovUK.Checkbox>
                    <GovUK.Checkbox
                    checked={operatorCheck.includes('None of the above')}
                    name="group-1"
                    onChange={() => setOperatorCheck((prev) => toggle(prev, 'None of the above'))}
                    >
                        None of the above
                    </GovUK.Checkbox>
                </GovUK.FormGroup>
                <GovUK.Button onClick={handleSubmit} disabled={isSubmitting}>
                    Continue
                </GovUK.Button>

        </div>
  )
}

export default OperatorCheck
