'use client';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Input } from '~/components/ui/input';

import { Button } from '../ui/button';

import { contextList, faqDataList } from './faq';
import styles from './style.module.css';

export function FaqList() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const searchParams = useSearchParams();

  useEffect(() => {
    const searchParamsValue = searchParams.get('search');
    const contextParamsValue = searchParams.get('context');

    if (searchParamsValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearch(searchParamsValue.toString() || '');
    }
    if (contextParamsValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilter(contextParamsValue.toString() || '');
    }
  }, [searchParams]);

  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2"
          size={18}
        />
        <Input
          className="w-full md:w-[400px] px-10"
          placeholder="Cari Pertanyaan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full md:w-[500px] mt-12 min-h-[60svh]">
        <div className="flex flex-wrap">
          <Button
            className="mx-2 my-2 capitalize cursor-pointer"
            size="sm"
            onClick={() => setFilter('')}
          >
            Semua
          </Button>
          {contextList.map((item, index) => (
            <Button
              key={index}
              className={'mx-2 my-2 capitalize cursor-pointer'}
              size="sm"
              variant={filter != item ? 'default' : 'secondary'}
              onClick={() => setFilter(item)}
            >
              {item == 'sos' ? 'SOS' : item}
            </Button>
          ))}
        </div>
        <Accordion collapsible className="w-full mb-20" type="single">
          {faqDataList
            .filter((item) => {
              const matchesFilter = filter === '' || item.context === filter;
              const matchesSearch =
                search === '' ||
                item.q.toLowerCase().includes(search.toLowerCase()) ||
                item.a.toLowerCase().includes(search.toLowerCase());

              return matchesFilter && matchesSearch;
            })
            .map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.a }}
                    className={styles.description}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
