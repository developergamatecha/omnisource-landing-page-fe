'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import featureIcon1 from '~/assets/v5/feature-icon-1.png';
import featureIcon2 from '~/assets/v5/feature-icon-2.png';
import featureIcon3 from '~/assets/v5/feature-icon-3.png';
import featureIcon4 from '~/assets/v5/feature-icon-4.png';

const features = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Dashboard &  Report Comprehensive',
    description:
      'Akses diagram analitik dan pantau laporan aktivitas operasional pada bisnis outsource anda',
    gradient: 'from-amber-200 via-yellow-100 to-white',
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'Payroll Automation',
    description:
      'Lakukan perhitungan gaji otomatis berdasarkan presensi dan komponen gaji untuk petugas ',
    gradient: 'from-orange-200 via-orange-100 to-white',
  },
  {
    id: 3,
    icon: featureIcon3,
    title: 'Activity Report',
    description:
      'Laporkan kegiatan mulai dari patroli, melaksanakan atensi, mengerjakan aktivitas hanya dalam beberapa langkah mudah',
    gradient: 'from-emerald-200 via-green-100 to-white',
  },
  {
    id: 4,
    icon: featureIcon4,
    title: 'Presensi Digital',
    description: 'Laporkan kehadiran dengan lebih mudah melalui aplikasi',
    gradient: 'from-blue-200 via-sky-100 to-white',
  },
  {
    id: 5,
    icon: featureIcon1,
    title: 'HRIS & Shift Management',
    description: 'Manajemen data dan jadwal kerja petugas secara terpusat.',
    gradient: 'from-purple-200 via-violet-100 to-white',
  },
  {
    id: 6,
    icon: featureIcon1,
    title: 'Billing & Access Control',
    description:
      'Atur dan sesuaikan paket berlangganan selaras dengan kebutuhan bisnis anda!',
    gradient: 'from-neutral-200 via-neutral-100 to-white',
  },
];

export function V5Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (dragOffset > 50) {
        handlePrev();
      } else if (dragOffset < -50) {
        handleNext();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;

    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (dragOffset > 50) {
        handlePrev();
      } else if (dragOffset < -50) {
        handleNext();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff =
      ((diff + features.length + Math.floor(features.length / 2)) %
        features.length) -
      Math.floor(features.length / 2);

    const baseTranslateX = normalizedDiff * 280;
    const dragAdjustment = isDragging ? dragOffset * 0.3 : 0;
    const translateX = baseTranslateX + dragAdjustment;

    const absNormalizedDiff = Math.abs(normalizedDiff);
    const scale = Math.max(0.7, 1 - absNormalizedDiff * 0.15);
    const rotateY = normalizedDiff * -25;
    const zIndex = 10 - absNormalizedDiff;
    const opacity =
      absNormalizedDiff > 2 ? 0 : Math.max(0.4, 1 - absNormalizedDiff * 0.3);

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-400/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Fitur Kami
          </h2>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: '1200px' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="absolute w-[260px] md:w-[300px]"
              style={getCardStyle(index)}
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 h-[380px] flex flex-col items-center text-center shadow-xl relative overflow-hidden`}
              >
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/40 rounded-full blur-sm" />
                <div className="absolute bottom-8 left-4 w-12 h-12 bg-white/30 rounded-full blur-sm" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full" />

                {/* Icon */}
                <div className="w-24 h-24 mb-6 relative z-10">
                  <Image
                    alt={feature.title}
                    className="w-full h-full object-contain drop-shadow-md"
                    src={feature.icon}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10 text-gray-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6 bg-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
