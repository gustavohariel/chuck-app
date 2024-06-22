import { fetchJokeCategories } from '../fetch/fetch-joke-categories';
import { useQuery } from '@tanstack/react-query';

export function useGetCategories() {
  return useQuery({
    queryFn: async () => fetchJokeCategories(),
    queryKey: ['jokeCategories'],
    select: (data) => data.data.randomJoke,
  });
}
