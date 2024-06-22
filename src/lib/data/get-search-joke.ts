'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchSearchJoke } from '../fetch/fetch-search-joke';
import { useSearchParams } from 'next/navigation';

export function useGetSearchJoke() {
  const query = useSearchParams().get('search');
  return useQuery({
    queryFn: async () => fetchSearchJoke(query!!),
    queryKey: ['searchJoke', query],
    enabled: !!query,
  });
}
