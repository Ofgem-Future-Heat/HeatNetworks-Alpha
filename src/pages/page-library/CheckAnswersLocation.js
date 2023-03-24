import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const CheckAnswersLocation = ({ heatNetworkInfo }) => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/registration-summary')
  }
  return (
        <div>
<GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>Check your answers before submitting</GovUK.H1>
            <GovUK.H3>Location:</GovUK.H3>
            <GovUK.Table>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        Supplier Property
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                        {heatNetworkInfo['Supplier Property']}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell >
                        <GovUK.Link href='#'>
                            Change

                        </GovUK.Link>

                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        Supplier Postcode
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                        {heatNetworkInfo['Supplier Postcode']}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                        <GovUK.Link href='#'>
                            Change
                        </GovUK.Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        Property Name Heat network
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                        {heatNetworkInfo['Property Name Heat network']}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        Postcode of Energy centre
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo['Postcode of Energy centre']}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        Country
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                        {heatNetworkInfo.country}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        UPRN
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                        {heatNetworkInfo.UPRN}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                        <Link>
                            Change
                        </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
            </GovUK.Table>
            <GovUK.Button>Confirm</GovUK.Button>
        </div>
  )
}

export default CheckAnswersLocation

// <div>

// {
// records && records.map(records => {
// return (
// <div className='box' key={records.UPRN} >{records.Name.getElementById('25151144448')}</div>

// )
// })
// }
// </div>
