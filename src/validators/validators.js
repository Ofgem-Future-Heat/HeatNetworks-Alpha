export const validateHNCheck = (value) => {
  return value && value.length ? undefined : 'Please select an option to confirm if your heating system meets the definition of a Heat Network'
}

export const validatePropertyType = (value) => {
  return value && value.length ? undefined : 'Please select an option to confirm the type of properties that your Heat Network supplies'
}

export const validateOperatorCheck = (value) => {
  return value && value.length ? undefined : 'Please select one or more options to confirm the activities that your organisation is responsible for'
}

export const validateSupplierCheck = (value) => {
  return value && value.length ? undefined : 'Please select one or more options to confirm the activities that your organisation is responsible for'
}

export const validateCompanyName = (value) => {
  return value && value.length ? undefined : 'Please enter company name'
}

export const validateCompanyNumber = (value) => {
  return value && value.length ? undefined : 'Please enter company number'
}

export const validateCompanyAddress = (value) => {
  return value && value.length ? undefined : 'Please enter company address'
}

export const validateCompanyTownOrCity = (value) => {
  return value && value.length ? undefined : 'Please enter company town/city'
}

export const validateCompanyCounty = (value) => {
  return value && value.length ? undefined : 'Please enter company county'
}

export const validateCompanyPostcode = (value) => {
  return value && value.length ? undefined : 'Please enter company postcode'
}

export const validateHeatNetworkProvide = (value) => {
  return value && value.length ? undefined : 'Please select one or more options to confirm the activities that your organisation is responsible for'
}
