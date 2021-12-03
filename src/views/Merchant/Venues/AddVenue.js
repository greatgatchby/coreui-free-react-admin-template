import React, { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'
//change for each page/view
import venueService from '../../../services/venue.service'
import { useDispatch } from 'react-redux'

const AddVenue = () => {
  const [venueName, setVenueName] = useState('')
  const [venueAddress, setVenueAddress] = useState('')
  const [venueType, setVenueType] = useState('')
  const [venuePostcode, setVenuePostcode] = useState('')
  const [venueCountry, setVenueCountry] = useState('')
  const [venueCity, setVenueCity] = useState('')
  const [venueDivision, setVenueDivision] = useState('')

  const onAddVenueName = (e) => {
    const venueName = e.target.value
    setVenueName(venueName)
  }
  const onAddVenueAddress = (e) => {
    const venueAddress = e.target.value
    setVenueAddress(venueAddress)
  }
  const onAddVenueCity = (e) => {
    const VenueCity = e.target.value
    setVenueCity(VenueCity)
  }
  const onAddVenueCountry = (e) => {
    const venueCountry = e.target.value
    setVenueCountry(venueCountry)
  }
  const onAddVenueType = (e) => {
    const venueType = e.target.value
    setVenueType(venueType)
  }
  const onAddVenueDivision = (e) => {
    const venueDivision = e.target.value
    setVenueDivision(venueDivision)
  }
  const onAddVenuePostcode = (e) => {
    const venuePostcode = e.target.value
    setVenuePostcode(venuePostcode)
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    venueService
      .createVenue(
        venueName,
        venueType,
        venueAddress,
        venuePostcode,
        venueCountry,
        venueCity,
        venueDivision,
      )
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <CCard className={'mb-2'}>
        <CCardHeader>
          <h5>Create Venue</h5>
        </CCardHeader>
        <CCardBody>
          <CForm noValidate validated onSubmit={handleSubmit}>
            <CRow>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Name:
                    <CFormInput
                      name={'venueName'}
                      value={venueName}
                      onChange={onAddVenueName}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Address:
                    <CFormInput
                      name={'venueAddress'}
                      value={venueAddress}
                      onChange={onAddVenueAddress}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    City:
                    <CFormInput
                      name={'venueCity'}
                      value={venueCity}
                      onChange={onAddVenueCity}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Country:
                    <CFormInput
                      name={'venueCountry'}
                      value={venueCountry}
                      onChange={onAddVenueCountry}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Postcode:
                    <CFormInput
                      name={'venuePostcode'}
                      value={venuePostcode}
                      onChange={onAddVenuePostcode}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Division:
                    <CFormInput
                      name={'venueDivision'}
                      value={venueDivision}
                      onChange={onAddVenueDivision}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Venue type:
                    <CFormSelect
                      name={'venueType'}
                      value={venueType}
                      onChange={onAddVenueType}
                      required
                    >
                      <option>Physical</option>
                      <option>Online</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
            </CRow>
            <CButton type={'submit'} className={'btn btn-primary '}>
              Add
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddVenue
