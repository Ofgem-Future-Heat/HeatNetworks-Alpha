import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const CheckLocationAnswers = ({ setLocationFormsComplete, setChangeOperateInScotland, operateInScotland, specificAddress, heatNetworkInfo, nearestPostcode, addressSelection, manualAddressEntry }) => {
  const navigate = useNavigate()

  const handleChangeOperateInScotland = () => {
    setChangeOperateInScotland(true)
    navigate('/user-journeys/location/scotland-check')
  }

  const handleSubmit = () => {
    setLocationFormsComplete(true)
    navigate('/user-journeys/registration-summary')
  }

  return (
    <div>
        <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
        <GovUK.H1>Check your answers before submitting</GovUK.H1>
        <GovUK.H5>nearest postcode state: {nearestPostcode}</GovUK.H5>
        <GovUK.Table>
        <GovUK.H3>Location</GovUK.H3>
            <GovUK.Table.Row>
                <GovUK.Table.CellHeader>
                    Operate in Scotland?
                </GovUK.Table.CellHeader>
                <GovUK.Table.Cell>
                    {operateInScotland || 'No'}
                    {operateInScotland}
                </GovUK.Table.Cell>
                <GovUK.Table.Cell >
                    <GovUK.Link href='#' onClick={handleChangeOperateInScotland} >
                        Change
                    </GovUK.Link>
                </GovUK.Table.Cell>
            </GovUK.Table.Row>
            <GovUK.Table.Row>
                <GovUK.Table.CellHeader>
                    Specific address?
                </GovUK.Table.CellHeader>
                <GovUK.Table.Cell>
                    {specificAddress || 'Yes'}
                </GovUK.Table.Cell>
                <GovUK.Table.Cell>
                <GovUK.Link href='#' onClick={() => { navigate('/user-journeys/location/specific-address') }} >
                Change
                </GovUK.Link>
                </GovUK.Table.Cell>
            </GovUK.Table.Row>
            <GovUK.Table.Row>
                <GovUK.Table.CellHeader>
                    Energy centre&apos;s address
                </GovUK.Table.CellHeader>
                <GovUK.Table.Cell>
                    {manualAddressEntry || ''}
                    {heatNetworkInfo ? `${heatNetworkInfo['Property Name Heat network']}, ${heatNetworkInfo['Postcode of Energy centre']}  ` : ''}
                    {nearestPostcode || ''}
                    {addressSelection || ''}
                </GovUK.Table.Cell>
                <GovUK.Table.Cell>
                <GovUK.Link href='#' onClick={() => { navigate('/user-journeys/screening-questions/hn-lookup') }}>
                    Change
                </GovUK.Link>
                </GovUK.Table.Cell>
            </GovUK.Table.Row>
        </GovUK.Table>
        <GovUK.Button onClick={handleSubmit}> Continue </GovUK.Button>
    </div>
  )
}

export default CheckLocationAnswers
