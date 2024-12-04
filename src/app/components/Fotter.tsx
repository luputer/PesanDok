import React from 'react'
import Image from 'next/image';

const Fotter = () => {
  return (
    <div>
       <footer className="bg-blue-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 flex items-center justify-center w-full sm:w-auto">
            <Image src="/logo.png" alt="Heatlink Logo" width={100} height={40} className="rounded-full" />
              <span className="text-lg sm:text-xl font-bold">Heatlink</span>
            </div>
            <nav className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 w-full sm:w-auto">
              <a href="#" className="text-sm hover:text-blue-300 px-2 py-1">Tentang Kami</a>
              <a href="#" className="text-sm hover:text-blue-300 px-2 py-1">Kontak</a>
              <a href="#" className="text-sm hover:text-blue-300 px-2 py-1">Kebijakan Privasi</a>
            </nav>
          </div>
          <div className="mt-4 sm:mt-8 text-center text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Heatlink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Fotter
