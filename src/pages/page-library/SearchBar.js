import * as GovUK from 'govuk-react'
import { Paragraph } from 'govuk-react'
import React, { useState } from 'react'
import ResultsPage from './ResultsPage'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ searchResults, setSearchResults, postcode, setPostcode }) => {
  const [error, setError] = useState('')
  const searchData = require('../../opss-data/fabricated.json')
  const navigate = useNavigate()

  const handlePostcodeInput = (e) => {
    setPostcode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postcode.length > 0) {
      const isValidPostcode = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/.test(postcode)
      if (isValidPostcode) {
        const results = searchData.filter((opssObject) => {
          setError('')
          return opssObject['Postcode of Energy centre'] === postcode.toUpperCase()
        })
        console.log(results)
        if (results.length > 0) {
          setSearchResults(results)
        } else {
          setError('This postcode was not found in our records')
        }
      } else {
        setError('Please enter a valid postcode')
      }
    } else {
      setError('Please enter your postcode')
    }
  }

  return (

    <div>
        <br></br><br></br>
      <GovUK.H1>Enter your heat network&apos;s address</GovUK.H1>
      <GovUK.FormGroup onSubmit={handleSubmit}>
        <GovUK.Input onChange={handlePostcodeInput} placeholder="Enter heat network postcode" value={postcode} />
        {error
          ? <GovUK.ErrorText>
            {error}
           </GovUK.ErrorText>
          : <GovUK.ErrorText>
          {error}
         </GovUK.ErrorText>}
        </GovUK.FormGroup >
        <GovUK.Button type="submit" onClick={handleSubmit}> Search </GovUK.Button>

      {searchResults.length > 0 && <ResultsPage searchResults={searchResults} />}
    </div>
  )
}

export default SearchBar
