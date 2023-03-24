import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const CheckAnswersBillingAndMetering = ({ heatNetworkInfo }) => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/registration-summary')
  }

  return (
        <div>
        <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
        <GovUK.H1>Check your answers before submitting</GovUK.H1>
        <GovUK.H3>Billing and Metering:</GovUK.H3>
        <GovUK.Table>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Energy costs
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        {heatNetworkInfo.Billing_energy_costs}
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell >
                            <GovUK.Link href='#'>
                            Change

                            </GovUK.Link>

                        </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Bill calculation
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        {heatNetworkInfo.Billing_Bill_calculation}
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                       <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                        </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Smart meters
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        {heatNetworkInfo.Billing_smart_meters}
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                        </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Frequency of Billing
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        {heatNetworkInfo.Billing_Frequency}
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                        </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Third party billing
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        {heatNetworkInfo.Billing_third_party}
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                        </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Current energy price
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        {heatNetworkInfo.Current_Energy_price}
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                        </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                </GovUK.Table>
                <GovUK.Button >Confirm</GovUK.Button>
    </div>
  )
}

export default CheckAnswersBillingAndMetering
