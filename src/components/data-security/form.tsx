'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { dataSecuritySchema } from '~/scheme/data-security';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

export function FormDataSeceurity() {
  const form = useForm<z.infer<typeof dataSecuritySchema>>({
    resolver: zodResolver(dataSecuritySchema),
    mode: 'onChange',
    defaultValues: {
      userType: '',
      requestDetail: '',
      accountName: '',
      phone: '',
      email: '',
      isHuman: false,
    },
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* User Type */}
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilih tipe pengguna</FormLabel>
              <FormControl className="py-1">
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="bg-muted/50 border-0 h-12 rounded-xl w-full">
                    <SelectValue placeholder="Pilih tipe pengguna" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="individual">
                      Pengguna Individual
                    </SelectItem>
                    <SelectItem value="business">Pengguna Bisnis</SelectItem>
                    <SelectItem value="partner">Partner</SelectItem>
                    <SelectItem value="merchant">Merchant</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Request Detail */}
        <FormField
          control={form.control}
          name="requestDetail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detail Permintaan</FormLabel>
              <FormControl className="py-1">
                <Textarea
                  className="min-h-[120px] bg-muted/50 border-0 resize-y rounded-xl p-3"
                  placeholder="Detail Permintaan"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Account Name */}
        <FormField
          control={form.control}
          name="accountName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama di akun</FormLabel>
              <FormControl className="py-1">
                <Input
                  className="bg-muted/50 border-0 h-12 rounded-xl"
                  placeholder="Nama di akun"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor yang terdaftar di aplikasi</FormLabel>
              <FormControl className="py-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-2 min-w-[110px]">
                    <span className="text-lg">🇮🇩</span>
                    <span className="text-foreground font-medium">+62</span>
                  </div>
                  <Input
                    className="bg-muted/50 border-0 h-12 rounded-xl"
                    placeholder="Nomor yang terdaftar di aplikasi"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email yang terdaftar di aplikasi</FormLabel>
              <FormControl className="py-1">
                <Input
                  className="bg-muted/50 border-0 h-12 rounded-xl"
                  placeholder="Email yang terdaftar di aplikasi"
                  type="email"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
          type="submit"
        >
          Kirim
        </Button>
      </form>
    </Form>
  );
}
