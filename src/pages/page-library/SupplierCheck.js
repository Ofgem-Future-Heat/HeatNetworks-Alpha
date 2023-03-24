import React, { useState, useCallback } from 'react'
import * as GovUK from 'govuk-react'
import { validateSupplierCheck } from '../../validators/validators'
import { useNavigate } from 'react-router-dom'

const SupplierCheck = ({ supplierCheck, setSupplierCheck }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/operator-check')
  }

  const isNotEmpty = (obj) => {
    return Object.keys(obj).some((key) => obj[key]?.length > 0)
  }

  const toggle = (array, newItem) =>
    array.includes(newItem) ? array.filter((existingItem) => existingItem !== newItem) : [...array, newItem]

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return

    const newErrors = {
      supplierCheck: validateSupplierCheck(supplierCheck)
    }
    if (isNotEmpty(newErrors)) {
      setErrors(newErrors)
    } else {
      setIsSubmitting(true)
      setErrors(null)
      setHasSubmitted(true)
      setIsSubmitting(false)
      navigate('/pages/primary-heat-network-info')
    }
  }, [supplierCheck, isSubmitting])

  return (
        <div>
                <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
                <GovUK.H1>
                    Do you or your organisation do any of the following?
                </GovUK.H1>
                <GovUK.H2>Select as many that apply</GovUK.H2>
                <GovUK.FormGroup error={!!errors?.supplierCheck}>
                {errors?.supplierCheck && <GovUK.ErrorText>{errors?.supplierCheck}</GovUK.ErrorText>}

                    <GovUK.Checkbox
                    checked={supplierCheck.includes('I generate the energy used by customers')}
                    name="group-1"
                    onChange={() => setSupplierCheck((prev) => toggle(prev, 'I generate the energy used by customers'))}
                    >
                        I generate the energy used by customers
                    </GovUK.Checkbox>
                    <GovUK.Checkbox
                    checked={supplierCheck.includes('Installing and/or fixing the networks physical infrastructure, such as pipes and boilers')}
                    name="group-1"
                    onChange={() => setSupplierCheck((prev) => toggle(prev, 'Installing and/or fixing the networks physical infrastructure, such as pipes and boilers'))}
                    >
                        Installing and/or fixing the networks physical infrastructure, such as pipes and boilers
                    </GovUK.Checkbox>
                    <GovUK.Checkbox
                    checked={supplierCheck.includes('Contracting operators to manage the physical maintenance of the heat network')}
                    name="group-1"
                    onChange={() => setSupplierCheck((prev) => toggle(prev, 'Contracting operators to manage the physical maintenance of the heat network'))}
                    >
                        Contracting operators to manage the physical maintenance of the heat network
                    </GovUK.Checkbox>
                    <GovUK.Checkbox
                    checked={supplierCheck.includes('None of the above')}
                    name="group-1"
                    onChange={() => setSupplierCheck((prev) => toggle(prev, 'None of the above'))}
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

export default SupplierCheck
