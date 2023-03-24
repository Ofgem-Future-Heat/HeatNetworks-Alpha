import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const CheckAnswersCustomers = ({ heatNetworkInfo }) => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/registration-summary')
  }
  return (
        <div>
<GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
    <GovUK.H1>Check your answers before submitting</GovUK.H1>
    <GovUK.H3>Customers:</GovUK.H3>
    <GovUK.Table>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Residential Customers
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Customers_Residential}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell >
                        <GovUK.Link href='#'>
                        Change

                        </GovUK.Link>

                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Commercial Customers
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Customers_Commercial}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                   <GovUK.Link href='#'>
                    Change
                   </GovUK.Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Industrial Customers
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Customers_Industrial}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Public Customers
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Customers_Public}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Other Customers
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Customers_Other}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Residential Buildings
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Buildings_Residential}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Commercial Buildings
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Buildings_Commercial}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Industrial Buildings
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Buildings_Industrial}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Public Buildings
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Buildings_Public}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Other Buildings
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Buildings_Other}
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

export default CheckAnswersCustomers
