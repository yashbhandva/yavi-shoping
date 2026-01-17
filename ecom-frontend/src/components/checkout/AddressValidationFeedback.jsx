import React from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { validateAddress } from '../../utils/addressValidation';

const AddressValidationFeedback = ({ address }) => {
  if (!address) return null;

  const { isValid, errors } = validateAddress(address);

  if (isValid) {
    return (
      <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md mt-4">
        <FaCheckCircle className="text-green-600 flex-shrink-0" />
        <span className="text-green-700 text-sm font-medium">
          Address is complete and valid
        </span>
      </div>
    );
  }

  const errorFields = Object.keys(errors);
  if (errorFields.length === 0) return null;

  return (
    <div className="p-3 bg-red-50 border border-red-200 rounded-md mt-4">
      <div className="flex items-start gap-2 mb-2">
        <FaExclamationTriangle className="text-red-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <span className="text-red-700 text-sm font-medium block mb-2">
            Please complete the following fields:
          </span>
          <ul className="text-red-600 text-sm space-y-1">
            {errorFields.map(field => (
              <li key={field} className="flex items-start">
                <span className="mr-2">-</span>
                <span className="flex-1">{errors[field]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddressValidationFeedback;