import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import CheckAnswers from './page-library/CheckAnswers'
import CheckAnswersBillingAndMetering from './page-library/CheckAnswersBillingAndMetering'
import CheckAnswersCharacteristics from './page-library/CheckAnswersCharacteristics'
import CheckAnswersCustomers from './page-library/CheckAnswersCustomers'
import CheckAnswersLocation from './page-library/CheckAnswersLocation'
import CompanyDetails from './page-library/CompanyDetails'
import CompanyLookUp from './page-library/CompanyLookUp'
import ConfirmCompanyDetails from './page-library/ConfirmCompanyDetails'
import EnterEmail from './page-library/EnterEmail'
import EnterHNAddress from './page-library/EnterHNAddress'
import EnterName from './page-library/EnterName'
import EnterTelephoneNumber from './page-library/EnterTelephoneNumber'
import HeatNetworkOperatorInfo from './page-library/HeatNetworkOperatorInfo'
import HeatNetworkSupplierInfo from './page-library/HeatNetworkSupplierInfo'
import HNCheck from './page-library/HNCheck'
import MakePayment from './page-library/MakePayment'
import NotRequired from './page-library/NotRequired'
import NumberOfProperties from './page-library/NumberOfProperties'
import OperatorAndSupplierInfo from './page-library/OperatorAndSupplierInfo'
import OperatorCheck from './page-library/OperatorCheck'
import PrimaryHeatNetworkInfo from './page-library/PrimaryHeatNetworkInfo'
import PropertyType from './page-library/PropertyType'
import RegistrationComplete from './page-library/RegistrationComplete'
import ResultsPage from './page-library/ResultsPage'
import SearchBar from './page-library/SearchBar'
import SecondaryHeatNetworkInfo from './page-library/SecondaryHeatNetworkInfo'
import SupplierCheck from './page-library/SupplierCheck'

const Pages = () => {
  const [isAHeatNetwork, setIsAHeatNetwork] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [operatorCheck, setOperatorCheck] = useState('')
  const [supplierCheck, setSupplierCheck] = useState('')
  const [companyNumber, setCompanyNumber] = useState('')
  const [companyDetails, setCompanyDetails] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephoneNumber, setTelephoneNumber] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postcode, setPostcode] = useState('')
  const [thisCompanyNumber, setThisCompanyNumber] = useState('')
  const [hasMadeSelection, setHasMadeSelection] = useState(false)
  const [isRegisteredCompany, setIsRegisteredCompany] = useState(null)
  const [companyNameError, setCompanyNameError] = useState('')
  const [isAmendingName, setIsAmendingName] = useState(false)
  const [isAmendingEmail, setIsAmendingEmail] = useState(false)
  const [heatNetworkId, setHeatNetworkId] = useState('')
  const [heatNetworkInfo, setHeatNetworkInfo] = useState('Test')
  const [anotherState, setAnotherState] = useState('Another state')
  const [changeLinks, setChangeLinks] = useState(false)

  return (
        <div>
            <Routes>

                <Route path="/hn-check" element={<HNCheck isAHeatNetwork={isAHeatNetwork} setIsAHeatNetwork={setIsAHeatNetwork}/>} />
                <Route path="/property-type" element={<PropertyType propertyType={propertyType} setPropertyType={setPropertyType} />} />
                <Route path="/number-of-properties" element={<NumberOfProperties />} />
                <Route path="/not-required" element={<NotRequired />} />
                <Route path="/company-lookup" element={<CompanyLookUp setCompanyNumber={setCompanyNumber} thisCompanyNumber={thisCompanyNumber} setThisCompanyNumber={setThisCompanyNumber} hasMadeSelection={hasMadeSelection} setHasMadeSelection={setHasMadeSelection} isRegisteredCompany={isRegisteredCompany} setIsRegisteredCompany={setIsRegisteredCompany} setCompanyDetails={setCompanyDetails} />} />
                <Route path="/company-details" element={<CompanyDetails companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} />} />
                 <Route path="/operator-check" element={<OperatorCheck operatorCheck={operatorCheck} setOperatorCheck={setOperatorCheck}/>} />
                <Route path="/supplier-check" element={<SupplierCheck supplierCheck={supplierCheck} setSupplierCheck={setSupplierCheck}/>} />
                <Route path="/confirm-company-details" element={<ConfirmCompanyDetails companyNumber={companyNumber} companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} />} />
                <Route path="primary-heat-network-info" element={<PrimaryHeatNetworkInfo />} />
                <Route path="secondary-heat-network-info" element={<SecondaryHeatNetworkInfo />} />
                <Route path="heat-network-supplier-info" element={<HeatNetworkSupplierInfo />} />
                <Route path="search-bar" element={<SearchBar searchResults = {searchResults} setSearchResults={setSearchResults} postcode={postcode} setPostcode={setPostcode}/>} />
                <Route path="results-page" element={<ResultsPage />} />
                <Route path="enter-heat-network-address" element={<EnterHNAddress />} />
                <Route path="heat-network-operator-info" element={<HeatNetworkOperatorInfo />} />
                <Route path="operator-and-supplier-info" element={<OperatorAndSupplierInfo />} />
                <Route path="enter-name" element={<EnterName name={name} setName={setName} isAmendingName={isAmendingName}/>} />
                <Route path="enter-email-address" element={<EnterEmail email={email} setEmail={setEmail} isAmendingEmail={isAmendingEmail}/>} />
                <Route path="enter-telephone-number" element={<EnterTelephoneNumber telephoneNumber={telephoneNumber} setTelephoneNumber={setTelephoneNumber} />} />
                <Route path="check-answers" element={<CheckAnswers name={name} setName={setName} email={email} setEmail={setEmail} telephoneNumber={telephoneNumber} setTelephoneNumber={setTelephoneNumber} setIsAmendingName={setIsAmendingName} setIsAmendingEmail={setIsAmendingEmail}/>} />
                <Route path="make-payment" element={<MakePayment />} />
                <Route path="registration-complete" element={<RegistrationComplete />} />
                <Route path="check-answers-location" element={<CheckAnswersLocation heatNetworkInfo={heatNetworkInfo} />} />
                <Route path="check-answers-characteristics" element={<CheckAnswersCharacteristics heatNetworkInfo={heatNetworkInfo} />} />
                <Route path="check-answers-customers" element={<CheckAnswersCustomers heatNetworkInfo={heatNetworkInfo} />} />
                <Route path="check-answers-billing-and-metering" element={<CheckAnswersBillingAndMetering heatNetworkInfo={heatNetworkInfo} />} />
            </Routes>

        </div>
  )
}

export default Pages
