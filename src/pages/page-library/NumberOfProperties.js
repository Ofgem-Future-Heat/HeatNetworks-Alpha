import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const NumberOfProperties = () => {
  const navigate = useNavigate()
  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>How many properties does your heat network supply?</GovUK.H1>
            <GovUK.MultiChoice>
              <GovUK.Radio>
                  1 to 50
              </GovUK.Radio>
              <GovUK.Radio>
                51 to 100
              </GovUK.Radio>
              <GovUK.Radio>
                  101 or more
              </GovUK.Radio>
            </GovUK.MultiChoice>
            <GovUK.Paragraph></GovUK.Paragraph>
            <GovUK.Button >
            Continue
        </GovUK.Button>
        </div>
  )
}

export default NumberOfProperties
