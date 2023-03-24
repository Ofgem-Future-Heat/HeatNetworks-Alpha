import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const NotRequired = () => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/hn-check')
  }
  return (
    <div>
      <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
      <GovUK.H1>You don&apos;t need this service</GovUK.H1>
      <GovUK.H3>This service is for registering heat networks</GovUK.H3>
      <GovUK.Link a href='https://www.google.com/url?q=https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/696273/HNIP_What_is_a_heat_network.pdf&source=gmail-imap&ust=1676305160000000&usg=AOvVaw26mqu2E19y0ufpDLmTQqnq' target="_blank">
             Read more about what a heat network is.
       </GovUK.Link>

      <GovUK.Paragraph>
                If you still think you need to register, contact our customer service team for advice on what you need to do next.
      </GovUK.Paragraph>
      <GovUK.H3>Contact us:</GovUK.H3>

        <GovUK.Paragraph>
        0808 223 1133 (Monday to Friday, 9am to 6pm)
        </GovUK.Paragraph>

         <GovUK.Link a href='mailto:heatnetworks@ofgem.gov.uk' target="_blank">heatnetworks@ofgem.gov.uk</GovUK.Link>

    </div>
  )
}

export default NotRequired
