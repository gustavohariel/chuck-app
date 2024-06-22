import axios from 'axios';

export const fetchJokeCategories = async () => {
  const response = await axios.post(process.env.NEXT_PUBLIC_CHUCK_API_URL!, {
    query: `
      query {
        jokeCategories
      }
    `,
  });
  return response.data;
};