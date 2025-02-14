import axios from 'axios';

const API_KEY = '48704705-de0108bea4c192368cade13d3';
const BASE_URL = 'https://pixabay.com/api/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function fetchImages(query, page = 1, perPage = 9) {
  return axiosInstance
    .get('/', {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    })
    .then(res => res.data.hits)
    .catch(error => {
      console.log('Error fetching images:', error);
      return [];
    });
}
