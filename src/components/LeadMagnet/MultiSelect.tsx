import React from 'react';
import { ServiceOption } from './types';
import { X } from 'lucide-react';

interface MultiSelectProps {
  options: ServiceOption[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
  onClearError?: () => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange, error, onClearError }) => {
  const handleToggle = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
    if (onClearError) {
      onClearError();
    }
  };

  const isSelected = (optionValue: string) => value.includes(optionValue);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleToggle(option.value)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2
              ${
                isSelected(option.value)
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-navy-900/80 text-gray-300 hover:bg-navy-900/60 border border-gray-700 hover:border-blue-500/50'
              }`}
          >
            {option.label}
            {isSelected(option.value) && (
              <X className="w-4 h-4 text-white/80" />
            )}
          </button>
        ))}
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
};

export default MultiSelect;
