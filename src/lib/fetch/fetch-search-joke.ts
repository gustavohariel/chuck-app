import axios from 'axios';

export const fetchSearchJoke = async (query: string) => {
  const response = await axios.post(process.env.NEXT_PUBLIC_CHUCK_API_URL!, {
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
  });
  return response.data.data.searchJoke;
};
