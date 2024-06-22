import { fetchRandomJoke } from '../fetch/fetch-random-joke';
import { useQuery } from '@tanstack/react-query';

export function useGetRandomJoke() {
  return useQuery({
    queryFn: async () => fetchRandomJoke(),
    queryKey: ['randomJoke'],
    enabled: false,
    select: (data) => data.data.randomJoke,
  });
}
