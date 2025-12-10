'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

import { Button } from '~/components/ui/button';

import { listGuide } from './listData';

export function ListFeature() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-24">
      {active !== null && (
        <div className="col-span-full">
          <Button
            onClick={() => setActive(null)}
            variant={'link'}
            className="text-base cursor-pointer"
          >
            <ChevronLeft />
            Kembali
          </Button>
          <div className="mt-10 ">
            <div className="flex gap-3 items-center mt-5">
              <div className="p-3 bg-green-50 rounded-lg">
                {listGuide[active].icon}
              </div>
              <h1 className="text-lg lg:text-2xl font-semibold">
                {listGuide[active].title}
              </h1>
            </div>
            <div className="text-base lg:text-sm border p-4 lg:px-10 lg:py-6 rounded-lg mt-5 space-y-2.5">
              <p className="text-base font-medium">Tentang Fitur</p>
              <p className="text-muted-foreground">{listGuide[active].href}</p>
            </div>

            <div className="text-base lg:text-sm mt-10 space-y-2.5">
              <p className="text-base font-medium lg:pl-10 pb-4">Fitur Utama</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {listGuide[active].features.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 min-h-[100px] border rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        {item.icon}
                      </div>
                      <p className="font-medium">{item.title}</p>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-4 lg:px-10 lg:py-6 border rounded-lg">
              <p className="text-base font-medium mb-4">Cara Kerja Lengkap</p>
              {listGuide[active].workflowSteps.map((item) => (
                <div key={item.step} className="flex items-center gap-3 py-2">
                  <div className="bg-primary p-2 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="font-medium text-sm text-white">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {active === null &&
        listGuide.map((item, index) => (
          <div
            key={item.title}
            className="h-[220px] flex flex-col gap-2 p-4 lg:p-8 border border-neutral-200 rounded-lg hover:border-primary duration-300 cursor-pointer hover:shadow-lg hover:bg-emerald-50"
            onClick={() => setActive(index)}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-3 rounded-lg">{item.icon}</div>
              <p className="font-medium tex-lg lg:text-2xl">{item.title}</p>
            </div>
            <p className="text-sm">{item.href}</p>
          </div>
        ))}
    </div>
  );
}
