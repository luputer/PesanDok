import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import fitures, { Feature } from '../../../public/data/data';

const Fitur = () => {
  return (
    <div>
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fitures.map((feature: Feature, index: number) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fitur;
