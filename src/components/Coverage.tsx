import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Georgetown',
  'Bayan Lepas',
  'Tanjung Bungah',
  'Batu Ferringhi',
  'Air Itam',
  'Butterworth',
  'Bukit Mertajam',
  'Nibong Tebal',
];

export function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Where We Work</h2>
          <p className="text-gray-600 mb-12">
            Providing comprehensive pest control services across Penang Island and Seberang Perai
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-gray-50 p-4 rounded-lg">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}