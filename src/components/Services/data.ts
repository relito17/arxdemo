import { MessageSquare, Send, Globe, Workflow } from 'lucide-react';
import { Service } from './types';

export const services: Service[] = [
  {
    icon: MessageSquare,
    title: 'Customer Support AI Agent',
    description: 'Intelligent agents deliver instant, 24/7 support, boosting satisfaction by resolving inquiries and escalating complex cases seamlessly.'
  },
  {
    icon: Send,
    title: 'Automated AI-Powered Outreach',
    description: 'Personalize communication at scale with AI-driven campaigns that optimize follow-ups and drive conversions. Sending more than 1000 emails per day with a click.'
  },
  {
    icon: Globe,
    title: 'AI-Driven Website',
    description: 'Create sleek, user-friendly platforms with AI-built websites and apps tailored to your business needs.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Boost productivity by automating routine tasks, enhancing operational efficiency.'
  }
];