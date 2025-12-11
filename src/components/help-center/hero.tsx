import Link from 'next/link';

import { contextList } from '../faq/faq';

import { SearchQuestion } from './search';

export function Hero() {
  return (
    <section className="min-h-[620px] h-[85svh] lg:h-[70svh] bg-linear-30 from-primary to-emerald-600 overflow-hidden relative">
      <div className="absolute top-0 right-0 translate-x-1/2 bg-emerald-400 rounded-full blur-[100px]  w-80 h-80" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 bg-yellow-400 rounded-full blur-[100px]  w-80 h-80" />
      <div className="relative z-30 container mx-auto px-6 py-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl lg:text-6xl text-emerald-100 font-bold">
          Pusat Bantuan
        </h1>
        <h2 className="text-4xl lg:text-6xl font-semibold text-emerald-50">
          OmniSource
        </h2>
        <p className="text-center text-emerald-200 mt-4">
          Temukan panduan lengkap, tips penggunaan, dan jawaban untuk semua{' '}
          <br />
          pertanyaan Anda tentang aplikasi OmniSource
        </p>
        <SearchQuestion />

        {/* Poopiler topic */}
        <div className="flex flex-wrap px-5 items-center gap-3 text-white mt-5">
          <p className="text-xs">Topic Populer</p>
          <div className="flex flex-wrap items-center gap-2">
            {contextList.map((item) => (
              <Link
                key={item}
                className="px-2 py-1 capitalize bg-teal-50 rounded-full text-sm cursor-pointer text-primary"
                href={`/faq?context=${item}`}
              >
                {item == 'sos' ? 'SOS' : item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
