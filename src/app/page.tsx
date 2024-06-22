import { CustomJokeTab } from '@/components/custom-joke-tab';
import RandomJokeButton from '@/components/random-joke-button';
import JokesCard from '@/components/jokes-card';
import { ToggleTheme } from '@/components/toggle-theme';
import { fetchJokeCategories } from '@/lib/fetch/fetch-joke-categories';
import { fetchRandomJoke } from '@/lib/fetch/fetch-random-joke';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['jokeCategories'],
    queryFn: fetchJokeCategories,
  });

  return (
    <Suspense>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <main className="pt-15 md:pt-12">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-2xl border-x border-primary p-4">
              <div>
                <h1 className="flex justify-center scroll-m-20 text-4xl font-extrabold text-primary tracking-tight lg:text-5xl">
                  Chuck Norris Facts
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8 mt-2 text-center">
                  Chuck Norris is an American actor, martial artist, and
                  activist. Known for his roles in action films, Chuck Norris is
                  also famous for his unbelievable and legendary facts.
                </p>
              </div>

              <RandomJokeButton />
              <div className="max-w-[350px] flex flex-col justify-center items-center space-y-4 mx-auto">
                <p className="flex justify-center">Or...</p>
                <CustomJokeTab />
                <JokesCard />
              </div>
            </div>
          </div>
        </main>
      </HydrationBoundary>
    </Suspense>
  );
}
