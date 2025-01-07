import React from 'react';
import { SelectOption } from './types';

interface SingleSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  options,
  value,
  onChange,
  label,
  error
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
              ${
                value === option.value
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-navy-900/80 text-gray-300 hover:bg-navy-900/60 border border-gray-700 hover:border-blue-500/50'
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SingleSelect;