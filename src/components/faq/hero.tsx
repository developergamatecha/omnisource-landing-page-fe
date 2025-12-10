import { FaqList } from './faq-list';

export function Hero() {
  return (
    <section className="min-h-svh container mx-auto flex flex-col justify-center items-center px-5">
      <div className="text-center grid place-content-center h-[120px] pt-20">
        <h1 className="text-2xl lg:text-4xl text-neutral-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-neutral-500 mt-4">
          Temukan jawaban untuk pertanyaan yang sering diajukan tentang
          OmniSource
        </p>
      </div>

      <FaqList />
    </section>
  );
}
