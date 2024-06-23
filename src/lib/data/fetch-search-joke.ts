'use server';
import axios from 'axios';
import { JokeSearchResult } from '../types';

export const fetchSearchJoke = async (
  query: string,
): Promise<JokeSearchResult> => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_CHUCK_API_URL!,
    {
      query: `
      query searchJoke($query: String!) {
        searchJoke(query: $query) {
          total
          result {
            id
            value
            categories
          }
        }
      }
    `,
      variables: {
        query: query,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.CHUCK_API_API_KEY}`,
      },
    },
  );
  return response.data.data.searchJoke;
};
