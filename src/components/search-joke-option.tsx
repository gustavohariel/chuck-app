'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useJoke } from '@/contexts/joke-context';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchJoke } from '@/lib/data/fetch-search-joke';

export function SearchJokeOption() {
  const [search, setSearch] = useState<string>('');
  const { setJoke, setIsLoading, setError } = useJoke();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  const { data } = useQuery({
    queryKey: ['searchJoke', debouncedSearchTerm],
    queryFn: async () => {
      setIsLoading(true);
      try {
        const result = await fetchSearchJoke(debouncedSearchTerm);
        return result;
      } catch (error) {
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    enabled: !!debouncedSearchTerm,
  });

  useEffect(() => {
    if (data) {
      setJoke(data);
    }
  }, [data, setJoke]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <div className="mt-5 items-center">
      <Input
        placeholder="Search for Chuck facts"
        onChange={handleInputChange}
      />
    </div>
  );
}
