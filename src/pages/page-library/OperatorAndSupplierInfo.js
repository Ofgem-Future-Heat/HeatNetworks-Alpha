import React from 'react'
import * as GovUK from 'govuk-react'
import { useNavigate } from 'react-router-dom'

const OperatorAndSupplierInfo = () => {
  const navigate = useNavigate()
  return (
        <div>
           <GovUK.BackLink href='#' onClick={ () => { navigate(-1) } } >Back</GovUK.BackLink>
            <GovUK.H1>You are a heat network operator and supplier</GovUK.H1>
            <GovUK.Paragraph>
                Based on your answers, you will be classified as the heat network operator and supplier.
            </GovUK.Paragraph>
            <GovUK.H3>
            Operators are responsible for:
            </GovUK.H3>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                the safety, function and maintenance of the physical infrastructures in the heat network
                </GovUK.ListItem>
            </GovUK.UnorderedList>
            <GovUK.H3>
            Suppliers are responsible for:
            </GovUK.H3>
            <GovUK.UnorderedList>
                <GovUK.ListItem>
                managing the network
                </GovUK.ListItem>
                <GovUK.ListItem>
                communicating with customers
                </GovUK.ListItem>
                <GovUK.ListItem>
                billing customers
                </GovUK.ListItem>
            </GovUK.UnorderedList>

            <GovUK.Button>
                Continue
            </GovUK.Button>
        </div>
  )
}

export default OperatorAndSupplierInfo
