'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { JokeSearchResult } from '@/lib/types';

type JokeContextType = {
  joke: JokeSearchResult | null;
  setJoke: (joke: JokeSearchResult | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: any | null;
  setError: Dispatch<SetStateAction<any | null>>;
};

const JokeContext = createContext<JokeContextType | undefined>(undefined);

export const JokeProvider = ({ children }: { children: ReactNode }) => {
  const [joke, setJoke] = useState<JokeSearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  return (
    <JokeContext.Provider
      value={{ joke, setJoke, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </JokeContext.Provider>
  );
};

export const useJoke = () => {
  const context = useContext(JokeContext);
  if (!context) {
    throw new Error('useJoke must be used within a JokeProvider');
  }
  return context;
};
