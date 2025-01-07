import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Clock, TrendingDown, LineChart } from 'lucide-react';

const PainPoints = () => {
  const { language } = useLanguage();
  const t = translations[language].painPoints;

  const painPoints = [
    {
      icon: Clock,
      title: language === 'en' ? 'Time Wastage' : 'Perda de Tempo',
      description: language === 'en' 
        ? "Manual processes cost hours you can't afford to lose."
        : "Processos manuais custam horas que você não pode perder.",
    },
    {
      icon: TrendingDown,
      title: language === 'en' ? 'Inefficiency' : 'Ineficiência',
      description: language === 'en'
        ? 'Scaling is impossible without AI-powered workflows.'
        : 'Escalar é impossível sem fluxos de trabalho alimentados por IA.',
    },
    {
      icon: LineChart,
      title: language === 'en' ? 'Missed Insights' : 'Insights Perdidos',
      description: language === 'en'
        ? 'You lose opportunities without real-time data-driven decisions.'
        : 'Você perde oportunidades sem decisões baseadas em dados em tempo real.',
    },
  ];

  const scrollToLeadMagnet = () => {
    const leadMagnetSection = document.getElementById('lead-magnet');
    if (leadMagnetSection) {
      leadMagnetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-anta text-center text-white mb-6 leading-tight">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            {t.subtitle}
          </p>
          <button
            onClick={scrollToLeadMagnet}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;