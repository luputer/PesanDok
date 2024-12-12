import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'


const Team = () => {
  console.log('heelo word');




  return (
    <section id="team" className="container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Tim Kami</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { name: "Muhammad saidi", role: "Prontend dev", image: "/saidi.png" },
        { name: "Muhammad Zidan helmy", role: "Backend dev", image: "/zidan.png" },
        { name: "Putri nancin", role: "UI/UX", image: "/nancin.png" },
        { name: "Norlatifah", role: "UI/UX", image: "/norlatifah.png" }
      ].map((member, index) => (
        <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 text-center">
            <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
  )
}

export default Team
