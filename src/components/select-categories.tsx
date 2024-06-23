'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchJokeCategories } from '@/lib/data/fetch-joke-categories';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function SelectCategories({
  setCategory,
}: {
  setCategory: (category: string) => void;
}) {
  const { data: categories } = useQuery({
    queryFn: async () => fetchJokeCategories(),
    queryKey: ['jokeCategories'],
  });

  return (
    <Select onValueChange={setCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Categories" />
      </SelectTrigger>
      <SelectContent className="capitalize">
        {categories?.map((category: string) => (
          <SelectItem className="capitalize" key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
