import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { MessageSquare, Send, Globe, Workflow } from 'lucide-react';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: MessageSquare,
      title: language === 'en' ? 'Customer Support AI Agent' : 'Agente de Suporte ao Cliente com IA',
      description: language === 'en'
        ? 'Intelligent agents deliver instant, 24/7 support, boosting satisfaction by resolving inquiries and escalating complex cases seamlessly.'
        : 'Agentes inteligentes fornecem suporte instantâneo 24/7, aumentando a satisfação ao resolver questões e encaminhar casos complexos de forma eficiente.',
    },
    {
      icon: Send,
      title: language === 'en' ? 'Automated AI-Powered Outreach' : 'Divulgação Automatizada Potenciada por IA',
      description: language === 'en'
        ? 'Automate personalized communication at scale with AI-driven campaigns that optimize follow-ups and drive conversions, sending over 1,000 emails daily.'
        : 'Automatize a comunicação personalizada em grande escala com campanhas impulsionadas por IA que otimizam os seguimentos e aumentam as conversões, enviando mais de 1.000 e-mails diariamente.',
    },
    {
      icon: Globe,
      title: language === 'en' ? 'AI-Driven Website' : 'Website Impulsionado por IA',
      description: language === 'en'
        ? 'Create sleek, user-friendly platforms with AI-built websites and apps tailored to your business needs.'
        : 'Plataformas elegantes e fáceis de usar com websites e Apps desenvolvidas por nós com ajuda de Inteligência Artificial, adaptados às suas necessidades.',
    },
    {
      icon: Workflow,
      title: language === 'en' ? 'Workflow Automation' : 'Automação de Fluxos de Trabalho',
      description: language === 'en'
        ? 'Boost productivity by automating routine tasks, enhancing operational efficiency.'
        : 'Aumente a produtividade ao automatizar tarefas repetitivas, otimizando a eficiência operacional.',
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-anta text-center text-white mb-6 leading-tight">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;