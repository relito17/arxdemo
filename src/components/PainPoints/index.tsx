import React from 'react';
import PainPointCard from './PainPointCard';
import { painPoints } from './data';

const PainPoints = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-anta text-center text-white mb-12">
          Why Businesses Struggle Without Automation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point) => (
            <PainPointCard key={point.title} point={point} />
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            ARxAutomate removes these roadblocks with AI solutions tailored to your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Let{"'"}s Solve This Together →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;