import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const ScotlandCheck = ({ changeOperateInScotland, setChangeOperateInScotland, operateInScotland, setOperateInScotland }) => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    changeOperateInScotland ? navigate('/user-journeys/location/check-location-answers') : navigate('/user-journeys/location/specific-address')
    setChangeOperateInScotland(false)
  }

  return (
        <div>
            <GovUK.FormGroup>
                <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } }>Back</GovUK.BackLink>
                <GovUK.H1>Does the heat network operate in Scotland?</GovUK.H1>
                <GovUK.Paragraph>
                    If the heat network operates in Scotland, we will need to ask some extra questions.
                </GovUK.Paragraph>
                    <GovUK.MultiChoice
                    mb={8}
                    >
                    <GovUK.Radio
                        checked={operateInScotland === 'Yes'}
                        name="operateInScotland"
                        onChange={() => setOperateInScotland('Yes')}>
                            Yes
                    </GovUK.Radio>
                    <GovUK.Radio
                        checked={operateInScotland === 'No'}
                        name="operateInScotland"
                        onChange={() => setOperateInScotland('No')}>
                            No
                    </GovUK.Radio>
                </GovUK.MultiChoice>
                <GovUK.Button onClick={handleSubmit}>
                    Continue
                </GovUK.Button>
         </GovUK.FormGroup>
         </div>
  )
}

export default ScotlandCheck
