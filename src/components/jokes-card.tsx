'use client';

import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import ChuckAvatar from './chuck-avatar';
import { useJoke } from '@/contexts/joke-context';
import { Joke } from '@/lib/types';
import { cn } from '@/lib/utils';
import { LoaderPinwheelIcon } from 'lucide-react';
import { useToast } from './ui/use-toast';

export default function JokesCard() {
  const { joke, isLoading, error } = useJoke();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: 'Chuck Norris can compile syntax errors.',
        description: 'We had an server error, please try again.',
      });
    }
  }, [error, toast]);

  return (
    <>
      {joke && (
        <Card className="w-auto max-w-[450px]">
          <CardHeader>
            <CardTitle className="flex items-center">
              Joke Result
              {isLoading && (
                <span className="ml-auto">
                  <LoaderPinwheelIcon className="h-5 w-5 animate-spin" />
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <div className="flex h-full flex-col">
                <div className="text-sm">
                  {joke.result.map((joke: Joke) => (
                    <div
                      key={joke.id}
                      className={cn('flex items-start gap-4 mt-2', {
                        'brightness-50': isLoading,
                      })}
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
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </>
  );
}
