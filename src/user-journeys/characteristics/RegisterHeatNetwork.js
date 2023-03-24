import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const RegisterHeatNetwork = () => {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate('/pages/registration-summary')

    return (
        <div>
            <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
            <GovUK.H1>Register a heat network</GovUK.H1>
            <GovUK.H3>Application incomplete</GovUK.H3>
            <GovUK.Paragraph> You have completed 1 of 3 sections</GovUK.Paragraph>
            <GovUK.Table>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    1. Roles and responsibilities
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                   Heating
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                       Heating capacity
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    34500kWh
                    </GovUK.Table.Cell>
                    <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Cooling capacity
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        18000kWh
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                        Primary source
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                       Heat pump
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                    <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                            Secondary source
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                        Boiler
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                        Tertiary source
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                        None
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                </GovUK.Table.Row>
                <GovUK.Table.Row>
                        <GovUK.Table.CellHeader>
                            Fuel input
                        </GovUK.Table.CellHeader>
                        <GovUK.Table.Cell>
                       Solar
                        </GovUK.Table.Cell>
                        <GovUK.Table.Cell>
                    <GovUK.Link href='#'>
                        Change
                       </GovUK.Link>
                    </GovUK.Table.Cell>
                    </GovUK.Table.Row>
                </GovUK.Table>
            <GovUK.Button>Save and return later</GovUK.Button>
        </div>
    )
  }
}

export default RegisterHeatNetwork
