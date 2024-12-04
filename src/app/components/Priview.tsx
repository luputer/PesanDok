import React from 'react'
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  


const Priview = () => {


  return (
    <div>
      <section id="preview" className="bg-blue-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Tampilan Aplikasi</h2>
          <div className="bg-white p-4 rounded-xl shadow-2xl">
          <Carousel 
           opts={{
            align: "start",
            loop: true,
          }}
           >
            <CarouselContent>
            <CarouselItem >
                <center>
                  <h1 className='text-xl font-semibold mb-4'>Login</h1>
                <Image src="/login.jpg" alt=""  width={1000} height={800}/>
                </center>
            </CarouselItem>
                <CarouselItem  >
                    <center>
                    <h1 className='text-xl font-semibold'>register</h1>
                    <Image src="/register.jpg" alt=""  width={900} height={600}/>
                    </center>
                </CarouselItem>
                <CarouselItem >
                  <center>
                  <h1 className='text-xl font-semibold mb-4'>Dashbord</h1>
                    <Image src="/dahsbord.jpg" alt=""  width={900} height={600}/>
                    </center>
                </CarouselItem>
                <CarouselItem  >
                    <center>
                    <Image src="/dokter.png" alt=""  width={900} height={600}/>
                    </center>
                </CarouselItem >
                <CarouselItem  >
                    <center>
                    <Image src="/dokter.png" alt=""  width={900} height={600}/>
                    </center>
                </CarouselItem>
                        </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Priview
