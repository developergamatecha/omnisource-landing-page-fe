import { z } from 'zod';

export const contactUsSchema = z.object({
  firstName: z.string().min(1, 'First name wajib diisi'),
  lastName: z.string().min(1, 'Last name wajib diisi'),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Alamat email tidak valid'),
  location: z.string().min(1, 'Location wajib diisi'),
  phone: z.string().regex(/^[0-9]{10,15}$/, 'Nomor telepon tidak valid'),
});
