'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import SelectCategories from './select-categories';
import { useJoke } from '@/contexts/joke-context';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomJoke } from '@/lib/data/fetch-random-joke';

export function PersonalizedJokeOptions() {
  const { setJoke, setIsLoading, setError } = useJoke();
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const [debouncedName, setDebouncedName] = useState<string>('');
  const [debouncedCategory, setDebouncedCategory] = useState<string>('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedName(name);
      setDebouncedCategory(category);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [name, category]);

  const { refetch, data: randomJoke } = useQuery({
    queryFn: async () => {
      setIsLoading(true);
      try {
        const result = await fetchRandomJoke(debouncedName, debouncedCategory);
        return result;
      } catch (error) {
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    queryKey: ['randomJoke', debouncedName, debouncedCategory],
    enabled: !!debouncedName || !!debouncedCategory,
  });

  useEffect(() => {
    if (debouncedName || debouncedCategory) {
      refetch();
    }
  }, [debouncedName, debouncedCategory, refetch]);

  useEffect(() => {
    if (randomJoke) {
      setJoke({ result: [randomJoke] });
    }
  }, [randomJoke, setJoke]);

  return (
    <div className="flex mt-5 items-center gap-2 space-y-0">
      <Input
        placeholder='Try "Bob"'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SelectCategories setCategory={setCategory} />
    </div>
  );
}
