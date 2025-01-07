import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-navy-900/80 backdrop-blur-sm z-50">
      <div className="bg-navy-900 border border-blue-500/20 rounded-xl p-8 max-w-md mx-4 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-blue-500 animate-success" />
          <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
          <p className="text-gray-300">
            Your consultation request has been received. We'll send you an email shortly with the next steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;