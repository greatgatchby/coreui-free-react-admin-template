import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/consignment'

const getAllConsignments = () => {
  return axios.get(API_URL, { headers: authHeader() })
}

const createConsignment = (
  email,
  item_name,
  item_size,
  asking_price,
  policyid,
  date_consigned,
  date_sold,
  status_code,
  venue,
  merchantid,
) => {
  return axios
    .post(API_URL, {
      email,
      item_name,
      item_size,
      asking_price,
      policyid,
      date_consigned,
      date_sold,
      status_code,
      venue,
      merchantid,
    })
    .then((response) => {
      return response.data
    })
}
const confirmConsignment = (consignmentid) => {
  return axios.put(API_URL + '/confirm', {
    headers: { authHeader },
    body: { consignmentid: consignmentid },
  })
}

const rejectConsignment = (consignmentid) => {
  return axios.put(API_URL + '/reject', {
    headers: { authHeader },
    body: { consignmentid: consignmentid },
  })
}
const authenticateConsignment = (consignmentid) => {
  return axios.put(API_URL + '/reject', {
    headers: { authHeader },
    body: { consignmentid: consignmentid },
  })
}

export default {
  getAllConsignments,
  createConsignment,
  confirmConsignment,
  rejectConsignment,
  authenticateConsignment,
}
