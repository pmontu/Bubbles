export const FETCH_WATER_CANS_BEGIN   = 'FETCH_WATER_CANS_BEGIN';
export const FETCH_WATER_CANS_SUCCESS = 'FETCH_WATER_CANS_SUCCESS';
export const FETCH_WATER_CANS_FAILURE = 'FETCH_WATER_CANS_FAILURE';

export const fetchWaterCans = (dispatch) => (page, pageSize) => {
  dispatch(fetchWaterCansBegin());
  return fetch(`http://localhost:8000/water-cans/?page=${page}&page_size=${pageSize}`, {
    headers: {'Authorization': 'Basic ' + Buffer.from(`manoj:1`).toString('base64')}
  })
    .then(handleErrors)
    .then(r => r.json())
    .then(data => {
      dispatch(fetchWaterCansSuccess(data))
      return data
    })
    .catch(err => dispatch(fetchWaterCansFailure(err)))
}

const fetchWaterCansBegin = () => ({type: FETCH_WATER_CANS_BEGIN})
const fetchWaterCansSuccess = (data) => ({type: FETCH_WATER_CANS_SUCCESS, data})
const fetchWaterCansFailure = (err) => ({type: FETCH_WATER_CANS_FAILURE, err})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}