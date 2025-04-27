export default function validateUserForm(formData, type) {
    const errors = {};
  
    // Common validations
    if (type !== 'login' && !formData.name?.trim()) {
      errors.name = 'Name is required.';
    }
  
    if (!formData.email?.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address.';
    }
  
    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
  
    if (type === 'signup' && !formData.role) {
        errors.role = 'Please select a role.';
      }
      
  
    if (type === 'update') {
      // Password is optional in update, but if provided, should be at least 6 characters
      if (formData.password && formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters if you wish to update it.';
      }
    }
  
    return errors;
  }
  