import React from 'react'
import * as GovUK from 'govuk-react'
const OfgemHeader = () => {
  return (
    <div className="ofgem-header-container">
        <div className='logo-container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Ofgem_logo.svg'></img>
        </div>
        <div className='title-container'>
            <GovUK.H3 class ="title">Register as a Heat Supplier</GovUK.H3>
        </div>
    </div>
  )
}
export default OfgemHeader
