import React from 'react';
import "aos/dist/aos.css";
import { Button } from '@/components/ui/button';
import { TypewriterEffect } from './ui/typewriter-effect'





const Section = () => {
  const words = [
    {
      text: "Pesan",
    },
    {
      text: "dokter",
    },
    {
      text: "dengan ",
    },
    {
      text: "mudah",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-4">
        </div>
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          <TypewriterEffect words={words} />
        </h1>
        <p className="text-xl text-gray-600 mb-8">Heatlink membantu Anda menemukan dan memesan dokter terbaik dengan cepat dan efisien.</p>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg">
          Unduh Sekarang
        </Button>

      </section>

    </div>
  );
};

export default Section;
