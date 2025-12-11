import { ListFeature } from '~/components/feature/list';

export default function PanduanPage() {
  return (
    <div className="container mx-auto py-10 lg:py-20 px-5">
      <h1 className="text-center text-2xl lg:text-4xl font-semibold">
        Fitur Utama OmniSource
      </h1>
      <p className="text-center text-neutral-500 mt-4">
        Semua fitur dirancang agar operasional outsourcing lebih mudah dipantau,
        <br />
        terdokumentasi, dan bisa dipertanggungjawabkan kepada klien.
      </p>
      <ListFeature />
    </div>
  );
}
