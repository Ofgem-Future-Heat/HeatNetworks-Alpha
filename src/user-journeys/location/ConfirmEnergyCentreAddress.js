import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as GovUK from 'govuk-react'

const EnterEnergyCentreAddress = ({ heatNetworkInfo, setHeatNetworkInfo }) => {
  const navigate = useNavigate()

  const changeAddress = () => {
    setHeatNetworkInfo('')
    navigate('/user-journeys/location/scotland-check')
  }
  return (
    <div>
        <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
        <GovUK.H1>Enter the energy centre&apos;s address</GovUK.H1>
        <GovUK.UnorderedList listStyleType='none'>
            <GovUK.ListItem >
                <strong>{heatNetworkInfo['Property Name Heat network']}</strong>
            </GovUK.ListItem>
            <GovUK.ListItem>
                <strong>{heatNetworkInfo['Postcode of Energy centre']}</strong>
            </GovUK.ListItem>
        <GovUK.Link href="#" onClick={changeAddress}>Change</GovUK.Link>
        </GovUK.UnorderedList>
        <GovUK.Button onClick={() => { navigate('/user-journeys/location/check-location-answers') } } > Continue </GovUK.Button>
    </div>
  )
}

export default EnterEnergyCentreAddress
