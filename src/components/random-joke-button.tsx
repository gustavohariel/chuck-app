'use client';

import React from 'react';
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import { useJoke } from '@/contexts/joke-context';
import { fetchRandomJoke } from '@/lib/data/fetch-random-joke';

export default function RandomJokeButton() {
  const { setJoke, setIsLoading, isLoading, setError } = useJoke();

  const { refetch } = useQuery({
    queryFn: async () => {
      setIsLoading(true);
      try {
        const result = await fetchRandomJoke();
        return result;
      } catch (error) {
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    queryKey: ['randomJoke'],
    enabled: false,
  });

  const handleClick = async () => {
    const result = await refetch();
    if (result.data) {
      setJoke({ result: [result.data] });
    }
  };

  return (
    <div className="mb-4 flex items-center justify-center">
      <Button
        className="text-white"
        size="xl"
        onClick={handleClick}
        disabled={isLoading}
      >
        Hit Me
      </Button>
    </div>
  );
}
