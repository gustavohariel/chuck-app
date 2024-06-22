'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useGetCategories } from '@/lib/data/get-joke-categories';

export default function CategoriesDropdown() {
  const { data: categories } = useGetCategories();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2">
          Categories
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {categories?.map((category: string) => (
          <DropdownMenuItem key={category} className="capitalize">
            {category}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
