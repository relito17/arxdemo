import { Clock, TrendingDown, LineChart } from 'lucide-react';
import { PainPoint } from './types';

export const painPoints: PainPoint[] = [
  {
    icon: Clock,
    title: 'Time Wastage',
    description: "Manual processes cost hours you cannot afford to lose."
  },
  {
    icon: TrendingDown,
    title: 'Inefficiency',
    description: "Scaling is impossible without AI-powered workflows."
  },
  {
    icon: LineChart,
    title: 'Missed Insights',
    description: "You lose opportunities without real-time data-driven decisions."
  }
];