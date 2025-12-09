import { Loader } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10">
      <Image
        src="/assets/white-logo.webp"
        alt="Logo"
        width={100}
        height={100}
      />
      <Loader className="w-7 h-7 animate-spin" />
    </div>
  );
}
