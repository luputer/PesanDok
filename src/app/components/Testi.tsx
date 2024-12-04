import React from 'react';  
import { Card, CardContent } from '@/components/ui/card';  

const Testi = () => {  
  // Define testimonials array separately for better readability  
  const testimonials = [  
    { name: "Andi Pratama", comment: "Heatlink membuat proses booking dokter menjadi sangat mudah dan cepat!" },  
    { name: "Siti Rahma", comment: "Saya suka bagaimana saya bisa melihat riwayat medis saya dengan mudah." },  
    { name: "Budi Santoso", comment: "Antarmuka yang intuitif dan fitur pencarian yang powerful. Sangat direkomendasikan!" }  
  ];  

  return (  
    <section id="testimonials" className="container mx-auto px-4 py-20">  
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Apa Kata Pengguna Kami</h2>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {testimonials.map((testimonial, index) => (  
          <Card key={index} className="bg-green-50 shadow-md hover:shadow-lg transition-shadow duration-300">  
            <CardContent className="p-6">  
              {/* Use JSX syntax for quotes */}  
              <p className="text-gray-600 mb-4">&quot;{testimonial.comment}&quot;</p>  
              <p className="font-semibold text-blue-600">{testimonial.name}</p>  
            </CardContent>  
          </Card>  
        ))}  
      </div>  
    </section>  
  );  
};  

export default Testi;