import { useMemo } from 'react';
import { validateAddress, isAddressComplete } from '../utils/addressValidation';

// Custom hook for address validation
export const useAddressValidation = (address) => {
  const validation = useMemo(() => {
    if (!address) {
      return {
        isValid: false,
        isComplete: false,
        errors: {},
        hasErrors: false
      };
    }

    const { isValid, errors } = validateAddress(address);
    const isComplete = isAddressComplete(address);
    
    return {
      isValid,
      isComplete,
      errors,
      hasErrors: Object.keys(errors).length > 0
    };
  }, [address]);

  return validation;
};