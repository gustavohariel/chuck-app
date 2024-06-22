'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import ChuckAvatar from './chuck-avatar';
import { useGetRandomJoke } from '@/lib/data/get-random-joke';
import { useGetSearchJoke } from '@/lib/data/get-search-joke';
import { Joke } from '@/lib/types';

export default function JokesCard() {
  const {
    data: randomJoke,
    error: randomError,
    isPending: randomIsLoading,
    dataUpdatedAt: randomUpdated,
  } = useGetRandomJoke();
  const {
    data: searchJoke,
    error: searchError,
    isPending: searchIsLoading,
    dataUpdatedAt: searchUpdated,
  } = useGetSearchJoke();

  const isLoading = randomIsLoading || searchIsLoading;

  const error = randomError || searchError;

  let jokeToRender;

  if (randomUpdated > searchUpdated) {
    jokeToRender = [randomJoke];
  }

  if (searchUpdated > randomUpdated) {
    jokeToRender = searchJoke.result;
  }

  // jokeToRender =
  //   randomJoke !== undefined
  //     ? [randomJoke]
  //     : searchJoke && searchJoke.result.length > 0
  //       ? searchJoke.result
  //       : null;

  return (
    <>
      {error && <p>Error fetching joke: {error.message}</p>}
      {jokeToRender && (
        <Card className="w-auto min-h-52">
          <CardHeader>
            <CardTitle>Joke Result</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <div className="flex h-full flex-col">
                <div className="flex flex-1 flex-col">
                  <div>
                    {isLoading && <p>Loading...</p>}
                    <div className="text-sm">
                      {jokeToRender.map((joke: Joke) => (
                        <div
                          key={joke.id}
                          className="flex items-start gap-4 mt-2"
                        >
                          <div className="flex flex-col">
                            <ChuckAvatar />
                            <span className="mt-2 text-foreground">
                              Chuck Norris
                            </span>
                          </div>
                          <div className="grid gap-1">
                            <div className="group gap-1 font-semibold"></div>
                            <div className="word-break flex-1 whitespace-pre-wrap text-sm">
                              <blockquote className="border-l-2 pl-6 italic text-wrap">
                                {joke.value}
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </>
  );
}
