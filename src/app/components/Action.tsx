import React from 'react'
import { Button } from '@/components/ui/button'

const Action = () => {
  return (
    <section className="bg-blue-600 text-white py-12 sm:py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6" >Siap untuk Memulai?</h2>
      <p className="text-sm sm:text-xl mb-4 sm:mb-6 px-4" >
        Unduh Heatlink sekarang dan nikmati kemudahan dalam memesan dokter.
      </p>
      <Button 
        className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base w-full sm:w-auto" 
      >
        Unduh Gratis
      </Button>
    </div>
  </section>
  )
}

export default Action
