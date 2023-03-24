import React, { useState } from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const RegistrationComplete = () => {
  const navigate = useNavigate()

  return (
        <div>
            <GovUK.BackLink href="#" onClick={() => navigate('/pages/check-answers')}>Back</GovUK.BackLink>
            <GovUK.Panel title="Registration complete">
                <strong>
                    REG-XX00RT-A2
                </strong>
            </GovUK.Panel>
            <GovUK.Paragraph>Your registation is now complete. You can now access your account to manage your heat networks.</GovUK.Paragraph>
            <GovUK.Paragraph>You can use your account to:</GovUK.Paragraph>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                    Authorise your heat network
                </GovUK.ListItem>
                <GovUK.ListItem>
                    Inform us about changes to your company
                </GovUK.ListItem>
                <GovUK.ListItem>
                    Report on your heat networks every 3 months
                </GovUK.ListItem>
                <GovUK.ListItem>
                    Manage payments
                </GovUK.ListItem>
                 <GovUK.ListItem>
                    Register additional heat networks
                </GovUK.ListItem>
            </GovUK.UnorderedList>
            <GovUK.Button>Go to your account</GovUK.Button>
        </div>
  )
}

export default RegistrationComplete
