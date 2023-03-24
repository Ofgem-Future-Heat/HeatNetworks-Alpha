import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate, Link } from 'react-router-dom'

const CheckAnswersCharacteristics = ({ heatNetworkInfo }) => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/registration-summary')
  }
  return (
        <div>
<GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
    <GovUK.H1>Check your answers before submitting</GovUK.H1>
    <GovUK.H3>Characteristics:</GovUK.H3>
    <GovUK.Table>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Primary Energy Source
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo['Primary Energy Source']}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell >
                        <GovUK.Link href='#'>
                        Change

                        </GovUK.Link>

                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Primary Technology Type
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo['Primary Technology Type']}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                   <GovUK.Link href='#'>
                    Change
                   </GovUK.Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Secondary Energy Source
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Secondary_Energy_Source}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    Secondary Tech Type
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.Secondary_Tech_Type}
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <Link>
                        Change
                    </Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    HN_Age (Year of installation)
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {heatNetworkInfo.HN_Age}
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

export default CheckAnswersCharacteristics
