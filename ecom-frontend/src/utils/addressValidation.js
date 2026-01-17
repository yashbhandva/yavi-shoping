// Address validation utility
export const validateAddress = (address) => {
  const errors = {};
  
  // Name validation (using buildingName as name field)
  if (!address?.buildingName?.trim()) {
    errors.buildingName = 'Name is required';
  } else if (address.buildingName.trim().length < 2) {
    errors.buildingName = 'Name must be at least 2 characters';
  }
  
  // Street validation
  if (!address?.street?.trim()) {
    errors.street = 'Street address is required';
  } else if (address.street.trim().length < 5) {
    errors.street = 'Street address must be at least 5 characters';
  }
  
  // City validation
  if (!address?.city?.trim()) {
    errors.city = 'City is required';
  } else if (address.city.trim().length < 2) {
    errors.city = 'City must be at least 2 characters';
  }
  
  // State validation
  if (!address?.state?.trim()) {
    errors.state = 'State is required';
  } else if (address.state.trim().length < 2) {
    errors.state = 'State must be at least 2 characters';
  }
  
  // Postal code validation
  if (!address?.pincode?.trim()) {
    errors.pincode = 'Postal code is required';
  } else if (!/^\d{5,6}$/.test(address.pincode.trim())) {
    errors.pincode = 'Postal code must be 5-6 digits';
  }
  
  // Country validation
  if (!address?.country?.trim()) {
    errors.country = 'Country is required';
  } else if (address.country.trim().length < 2) {
    errors.country = 'Country must be at least 2 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Phone number validation (if needed later)
export const validatePhoneNumber = (phone) => {
  if (!phone?.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
    return { isValid: false, error: 'Invalid phone number format' };
  }
  
  return { isValid: true, error: null };
};

// Check if address has all required fields filled and valid
export const isAddressComplete = (address) => {
  if (!address) return false;
  
  const { isValid } = validateAddress(address);
  return isValid;
};