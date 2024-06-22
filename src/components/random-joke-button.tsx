'use client';

import React from 'react';
import { Button } from './ui/button';
import { useGetRandomJoke } from '@/lib/data/get-random-joke';

export default function RandomJokeButton() {
  const { refetch, isLoading } = useGetRandomJoke();

  const handleClick = () => {
    refetch();
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
