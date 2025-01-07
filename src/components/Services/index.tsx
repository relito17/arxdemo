import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './data';

const Services = () => {
  return (
    <section className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-anta text-center text-white mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;