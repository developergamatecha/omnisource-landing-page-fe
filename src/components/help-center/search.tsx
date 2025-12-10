'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export function SearchQuestion() {
  const [value, setValue] = useState('');
  const { push } = useRouter();

  const handleSubmit = () => {
    if (value) {
      push(`/faq?search=${value}`);
    } else {
      toast.error('Silahkan masukkan keyword pencarian terlebih dahulu');
    }
  };

  return (
    <div className="mt-8 relative">
      <Input
        className="w-[80svw] lg:w-[70svh] lg:max-w-[500px] bg-white py-6 px-3"
        placeholder="Cari pertanyaan"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
      <Button
        onClick={handleSubmit}
        className="absolute top-1/2 right-2 -translate-y-1/2 px-3 hover:bg-teal-600 cursor-pointer"
      >
        <Search /> Cari
      </Button>
    </div>
  );
}
