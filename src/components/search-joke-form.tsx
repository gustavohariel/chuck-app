'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const formSchema = z.object({
  searchQuery: z.string().min(2, {
    message: 'We need at least 2 characters.',
  }),
});

export function SearchJokeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: '',
    },
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', values.searchQuery);
    router.push(pathname + `?search=${values.searchQuery}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 flex items-center gap-2"
      >
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormControl>
                <Input placeholder="Search for Chuck facts" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
