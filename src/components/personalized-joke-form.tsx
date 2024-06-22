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
import CategoriesDropdown from './categories-dropdown';

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'We need at least 2 characters.',
    })
    .optional(),
  categories: z.string().optional(),
});

export function PersonalizedJokeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      categories: '',
    },
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    const params = new URLSearchParams(searchParams.toString());
    params.set('name', values.name);
    router.push(pathname + `?search=${values.name}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-5 flex items-center gap-2">
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormControl>
                  <Input placeholder='Try "Bob"' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormControl>
                  <CategoriesDropdown />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="justify-end">
          Submit
        </Button>
      </form>
    </Form>
  );
}
