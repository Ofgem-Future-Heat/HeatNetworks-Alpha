import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as GovUK from 'govuk-react'
import { validateHNCheck } from '../../validators/validators'

const HNCheck = ({ isAHeatNetwork, setIsAHeatNetwork }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/start-page')
  }

  const isNotEmpty = (obj) => {
    return Object.keys(obj).some((key) => obj[key]?.length > 0)
  }

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return

    const newErrors = {
      HNCheck: validateHNCheck(isAHeatNetwork)
    }

    if (isNotEmpty(newErrors)) {
      setErrors(newErrors)
    } else {
      setIsSubmitting(true)
      setErrors(null)
      setHasSubmitted(true)
      setIsSubmitting(false)
      if (isAHeatNetwork === 'Yes') {
        navigate('/pages/property-type')
      } else {
        navigate('/pages/not-required')
      }
    }
  }, [isAHeatNetwork, isSubmitting])

  return (
    <>
        <GovUK.FormGroup>
        <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
        {/* Error summary not needed for this page but example kept for Heat Network Address page */}
        {/* {errors && !!Object.keys(errors).length &&
            <GovUK.ErrorSummary
              heading="Error summary"
              description="Please address the following issues"
              errors={Object.keys(errors).map((key) => ({
                targetName: key,
                text: errors[key]
              }))}
            />
          } */}
        <GovUK.H1>Does your system meet the definition of a heat network?</GovUK.H1>
          <GovUK.H3>Definition:</GovUK.H3>
        <GovUK.Paragraph>
          A heat network is when one heat source is used to provide heating to more than one location.
        </GovUK.Paragraph>
        <GovUK.Paragraph>
          Heat networks can cover large areas such as a city, or be smaller clusters of buildings. They can also be multiple flats or units within a building.
        </GovUK.Paragraph>
        <GovUK.Paragraph>
        Heat networks can supply residential, commercial and industrial properties.
        </GovUK.Paragraph>

        <GovUK.Link href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/696273/HNIP_What_is_a_heat_network.pdf' target="_blank">
        Find out more about what a heat network is.
        </GovUK.Link>
        <br></br>
        <br></br>
            <GovUK.MultiChoice
            mb={8}
            meta={{ error: errors?.HNCheck, touched: !!errors?.HNCheck }}>
              <GovUK.Radio
              checked={isAHeatNetwork === 'Yes'}
              name="heatnetwork"
              onChange={() => setIsAHeatNetwork('Yes')}>
                  Yes
              </GovUK.Radio>
              <GovUK.Radio
              checked={isAHeatNetwork === 'No'}
              name="heatnetwork"
              onChange={() => setIsAHeatNetwork('No')}>
                  No
              </GovUK.Radio>
            </GovUK.MultiChoice>

        <GovUK.Button onClick={handleSubmit} disabled={isSubmitting}>
            Continue
        </GovUK.Button>

        </GovUK.FormGroup>
        </>
  )
}

export default HNCheck
