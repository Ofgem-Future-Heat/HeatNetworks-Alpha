import React, { useState, useCallback } from 'react'
import * as GovUK from 'govuk-react'
import { validatePropertyType } from '../../validators/validators'
import { useNavigate } from 'react-router-dom'

const PropertyType = ({ propertyType, setPropertyType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/pages/hn-check')
  }

  const isNotEmpty = (obj) => {
    return Object.keys(obj).some((key) => obj[key]?.length > 0)
  }

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return

    const newErrors = {
      propertyType: validatePropertyType(propertyType)
    }
    if (isNotEmpty(newErrors)) {
      setErrors(newErrors)
    } else {
      setIsSubmitting(true)
      setErrors(null)
      setHasSubmitted(true)
      setIsSubmitting(false)
      navigate('/pages/operator-check')
    }
  }, [propertyType, isSubmitting])

  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
      <GovUK.H1>What type of properties does your heat network supply?</GovUK.H1>
      <GovUK.FormGroup>
          <GovUK.MultiChoice
          mb={8}
          meta={{ error: errors?.propertyType, touched: !!errors?.propertyType }}>
              <GovUK.Checkbox
              checked={propertyType === 'Residential properties'}
              name="group1"
              onChange={() => setPropertyType('Residential properties')}
              >
                Residential properties
              </GovUK.Checkbox>
              <GovUK.Checkbox
              checked={propertyType === 'Commercial properties'}
              name="group1"
              onChange={() => setPropertyType('Commercial properties')}
              >Commercial properties
              </GovUK.Checkbox>
              <GovUK.Checkbox
              checked={propertyType === 'Industrial properties'}
              name="group1"
              onChange={() => setPropertyType('Industrial properties')}
              >Industrial properties
              </GovUK.Checkbox>
          </GovUK.MultiChoice>
      </GovUK.FormGroup>
      <GovUK.Button onClick={handleSubmit} disabled={isSubmitting}>
          Continue
      </GovUK.Button>
    </div>
  )
}

export default PropertyType
