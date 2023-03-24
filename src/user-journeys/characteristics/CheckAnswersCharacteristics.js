import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const CheckAnswersCharacteristics = ({ characteristicsAnswers }) => {
  const navigate = useNavigate()

  return (
        <div>
             <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } ></GovUK.BackLink>
            <GovUK.H1>Check your answers from this section</GovUK.H1>
            <GovUK.H3>Heat network characteristics</GovUK.H3>
            <GovUK.Table>
                <GovUK.Table.Row>
                    <GovUK.Table.CellHeader>
                    What does it provide?
                    </GovUK.Table.CellHeader>
                    <GovUK.Table.Cell>
                    {characteristicsAnswers.heatNetworkProvide}
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
                    <GovUK.Table.Cell >
                    {characteristicsAnswers.heatingHotWaterCapacity}
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
                        {characteristicsAnswers.coolingCapacity}
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
                        {characteristicsAnswers.primarySource}
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
                        {characteristicsAnswers.secondarySource}
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
                    {characteristicsAnswers.tertiarySource}
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
                        {characteristicsAnswers.heatNetworkFuel}
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

export default CheckAnswersCharacteristics
