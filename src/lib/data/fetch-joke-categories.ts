'use server';
import axios from 'axios';

export const fetchJokeCategories = async (): Promise<string[]> => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_CHUCK_API_URL!,
    {
      query: `
        query {
          jokeCategories
        }
      `,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.CHUCK_API_KEY}`,
      },
    },
  );
  return response.data.data.jokeCategories;
};
