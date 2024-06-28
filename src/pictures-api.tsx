import axios from "axios";

const API_KEY = '-eeP60pRJtyWL-avvXlFPtyJI_PcjpBMkVJxu64PLQ8';
const BASE_URL = 'https://api.unsplash.com';

export interface Picture {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export const getPictures = async (query: string, page: number = 1, per_page: number = 12): Promise<Picture[]> => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};