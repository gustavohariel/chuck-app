import axios from 'axios';

export const fetchRandomJoke = async () => {
  const response = await axios.post(process.env.NEXT_PUBLIC_CHUCK_API_URL!, {
    query: `
      query {
        randomJoke {
          id
          value
          categories
        }
      }
    `,
  });
  return response.data;
};
