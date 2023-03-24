import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const CheckAnswers = ({ name, email, telephoneNumber, setIsAmendingName, setIsAmendingEmail }) => {
  const navigate = useNavigate()

  const handleNameAmendment = () => {
    setIsAmendingName(true)
    navigate('/pages/enter-name')
  }

  const handleEmailAmendment = () => {
    setIsAmendingEmail(true)
    navigate('/pages/enter-email-address')
  }

  return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Check your answers before submitting</GovUK.H1>
            <GovUK.Table>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Name
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {name}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell >
                                <GovUK.Link href='#' onClick={handleNameAmendment}>
                                Change

                                </GovUK.Link>

                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Email Address
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {email}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                           <GovUK.Link href='#' onClick={handleEmailAmendment}>
                            Change
                           </GovUK.Link>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                        <GovUK.Table.Row>
                            <GovUK.Table.CellHeader>
                                Telephone Number
                            </GovUK.Table.CellHeader>
                            <GovUK.Table.Cell>
                                {telephoneNumber}
                            </GovUK.Table.Cell>
                            <GovUK.Table.Cell>
                            <Link to="/pages/enter-telephone-number">
                                Change
                            </Link>
                            </GovUK.Table.Cell>
                        </GovUK.Table.Row>
                    </GovUK.Table>
                    <GovUK.Button onClick={() => navigate('/pages/registration-complete')}>Send</GovUK.Button>
        </div>
  )
}

export default CheckAnswers
