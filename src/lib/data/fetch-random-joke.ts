'use server';

import axios from 'axios';
import { Joke } from '../types';

export const fetchRandomJoke = async (
  name?: string,
  category?: string,
): Promise<Joke> => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_CHUCK_API_URL!,
    {
      query: `
      query ($name: String, $category: String) {
        randomJoke(name: $name, category: $category) {
          id
          value
          categories
        }
      }
    `,
      variables: {
        name,
        category,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.CHUCK_API_KEY}`,
      },
    },
  );
  return response.data.data.randomJoke;
};
