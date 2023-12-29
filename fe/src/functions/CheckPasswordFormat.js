export const CheckPasswordLength = (password) => {
  return password.length > 8;
};

export const CheckPasswordChars = (password) => {
  // Conditions to check
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^a-zA-Z\d\s:]/.test(password);
  // Check if all conditions are met
  if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
    return true;
  } else {
    return false;
  }
};

export const CheckPasswordFormat = (password) => {
  return CheckPasswordChars(password) && CheckPasswordLength(password);
};
