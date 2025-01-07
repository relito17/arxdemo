import React from 'react';
import { Service } from './types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card group transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-[#36d7ff]/10">
      <div className="w-12 h-12 bg-[#36d7ff] rounded-lg flex items-center justify-center mb-4">
        <service.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#36d7ff] transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;