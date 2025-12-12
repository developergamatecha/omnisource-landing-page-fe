import { z } from 'zod';

export const dataSecuritySchema = z.object({
  requestDetail: z.string().min(1, 'Masukkan detail permintaan'),
  accountName: z.string().min(1, 'Masukkan nama akun yang valid'),
  phone: z
    .string()
    .regex(/^[0-9]+$/, 'Format nomor tidak valid')
    .min(1, 'Masukkan nomor yang terdaftar di aplikasi yang valid'),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Format email tidak valid')
    .min(1, 'Masukkan email yang terdaftar di aplikasi yang valid'),
  isHuman: z.boolean(),
});
