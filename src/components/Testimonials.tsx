import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      quote: language === 'en' 
        ? "ARxAutomate revolutionized how we operate. They made a simple website perfect for our needs!"
        : "ARxAutomate revolucionou nossa forma de operar. Eles fizeram um site simples perfeito para nossas necessidades!",
      author: "Ângelo Bastos",
      role: language === 'en' ? "Founder, AVBX" : "Fundador, AVBX",
    },
    {
      quote: language === 'en'
        ? "Our efficiency skyrocketed thanks to their AI-Chatbot!"
        : "Nossa eficiência disparou graças ao Chatbot de IA deles!",
      author: "Ana Paula Sousa",
      role: language === 'en' ? "Founder, Clínica das Origens" : "Fundadora, Clínica das Origens",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-6xl font-anta text-center text-white mb-12">
          {t.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-900/50 rounded-xl p-8 relative hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-gray-800 w-full sm:w-1/2 lg:w-1/3 max-w-sm"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">"</span>
              </div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;