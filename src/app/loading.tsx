import { Loader } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10">
      <Image
        alt="Logo"
        height={100}
        src="/assets/white-logo.webp"
        width={100}
      />
      <Loader className="w-7 h-7 animate-spin" />
    </div>
  );
}
