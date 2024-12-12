
import Image from 'next/image';
const Navbar = () => {

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Heatlink Logo" width={100} height={40} className="rounded-full" />
        <span className="text-2xl font-bold text-blue-600">HeatLink</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="text-blue-600 hover:text-blue-800">Fitur</a></li>
          <li><a href="#preview" className="text-blue-600 hover:text-blue-800">Preview</a></li>
          <li><a href="#testimonials" className="text-blue-600 hover:text-blue-800">Testimoni</a></li>
          <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
