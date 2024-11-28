import React from 'react';
import { Bug, Rat, BugOff, Sword } from 'lucide-react';

const services = [
  {
    icon: Bug,
    title: 'General Pest Control',
    description: 'Comprehensive treatment for common household pests',
  },
  {
    icon: Rat,
    title: 'Rodent Control',
    description: 'Effective solutions for mice and rat infestations',
  },
  {
    icon: Sword,
    title: 'Spider Treatment',
    description: 'Removal and prevention of spider infestations',
  },
  {
    icon: BugOff,
    title: 'Cockroach Control',
    description: 'Advanced treatments for cockroach elimination',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}