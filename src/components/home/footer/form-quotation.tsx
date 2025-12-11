'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';
import { contactUsSchema } from '~/scheme/contact-us';
import { Form, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { z } from 'zod';

export function FormQuotation() {
  const form = useForm({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      phone: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: z.infer<typeof contactUsSchema>) => {
    const mailtoLink = `mailto:ping@gamatecha.com?subject=Quotation Request&body=${encodeURIComponent(
      JSON.stringify(data, null, 2),
    )}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <Input
                className="bg-muted/50 border-0"
                placeholder="First name"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <Input
                className="bg-muted/50 border-0"
                placeholder="Last name"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Input
                className="bg-muted/50 border-0"
                placeholder="Email"
                type="email"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="w-full bg-muted/50 border-0">
                    <SelectValue placeholder="Location's" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Jakarta">Jakarta</SelectItem>
                    <SelectItem value="Surabaya">Surabaya</SelectItem>
                    <SelectItem value="Bandung">Bandung</SelectItem>
                    <SelectItem value="Medan">Medan</SelectItem>
                    <SelectItem value="Lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <Input
                  className="bg-muted/50 border-0"
                  placeholder="Phone"
                  type="tel"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full rounded-full" size="lg" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
