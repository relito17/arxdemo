import React from 'react';

interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  error
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={required ? `${placeholder} *` : placeholder}
        className={`w-full px-4 py-3 rounded-lg bg-navy-900/50 border ${
          error ? 'border-red-500' : 'border-gray-700'
        } text-white focus:outline-none focus:border-blue-500 transition-colors`}
      />
      {error && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;